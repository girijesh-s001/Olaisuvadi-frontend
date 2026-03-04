import React, { useState, useRef, useCallback, useEffect } from "react";
import JSZip from "jszip";
import { BoundingBox, DrawingMode, ExportData, GlyphAnnotation, ImageMeta } from "./types";
import { ImageCanvas } from "./ImageCanvas";
import { CharacterPanel } from "./CharacterPanel";
import { PropertiesPanel } from "./PropertiesPanel";
import { Toolbar } from "./Toolbar";
import { TAMIL_GROUPS } from "./tamilData";

// Create a mapping from label to Tamil character
const LABEL_TO_TAMIL_MAP = new Map<string, string>();
TAMIL_GROUPS.forEach((group) => {
  group.chars.forEach((char) => {
    LABEL_TO_TAMIL_MAP.set(char.label, char.char);
    char.variants.forEach((variant) => {
      LABEL_TO_TAMIL_MAP.set(variant.label, char.char);
    });
  });
});

const DEFAULT_VARIANT = {
  elongated: false,
  broken: false,
  striked_out: "none" as const,
};

const DEFAULT_JOINS = {
  horizontal: false,
  vertical: false,
  touching_ids: [],
};

function generateImageId(fileName: string): string {
  const base = fileName.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9]/g, "_");
  return `page_${base}`.toLowerCase().replace(/__+/g, "_").substring(0, 30);
}

function estimateDPI(width: number, height: number): number {
  // Estimate DPI from resolution (common palm-leaf scan sizes)
  if (width >= 4960 || height >= 7016) return 600;
  if (width >= 2480 || height >= 3508) return 300;
  if (width >= 1240 || height >= 1754) return 150;
  return 72;
}

export function AnnotationWorkspace() {
  const [imageMeta, setImageMeta] = useState<ImageMeta | null>(null);
  const [bboxes, setBboxes] = useState<BoundingBox[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mode, setMode] = useState<DrawingMode>("draw");
  const [zoom, setZoom] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedBbox = bboxes.find((b) => b.id === selectedId) ?? null;

  // Handle image load
  const loadImageFile = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    const img = new window.Image();
    img.onload = () => {
      const dpi = estimateDPI(img.naturalWidth, img.naturalHeight);
      const meta: ImageMeta = {
        image_id: generateImageId(file.name),
        src: url,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        dpi,
        fileName: file.name,
      };
      setImageMeta(meta);
      setBboxes([]);
      setSelectedId(null);
      setZoom(1);
    };
    img.src = url;
  }, []);

  const handleFileDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        loadImageFile(file);
      }
    },
    [loadImageFile]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadImageFile(file);
  };

  // BBox management
  const handleAddBBox = useCallback(
    (bbox: Omit<BoundingBox, "labels" | "variant" | "joins" | "confidence">) => {
      const newBBox: BoundingBox = {
        ...bbox,
        labels: [],
        variant: { ...DEFAULT_VARIANT },
        joins: { ...DEFAULT_JOINS, touching_ids: [] },
        confidence: 1.0,
      };
      setBboxes((prev) => [...prev, newBBox]);
      setSelectedId(newBBox.id);
      setMode("select");
    },
    []
  );

  const handleUpdateBBox = useCallback((id: string, updates: Partial<BoundingBox>) => {
    setBboxes((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updates } : b))
    );
  }, []);

  const handleDeleteBBox = useCallback((id: string) => {
    setBboxes((prev) => {
      const remaining = prev.filter((b) => b.id !== id);
      // Clean up touching_ids references
      return remaining.map((b) => ({
        ...b,
        joins: {
          ...b.joins,
          touching_ids: b.joins.touching_ids.filter((tid) => tid !== id),
        },
      }));
    });
    setSelectedId(null);
  }, []);

  const handleDuplicateBBox = useCallback((id: string) => {
    setBboxes((prev) => {
      const original = prev.find((b) => b.id === id);
      if (!original) return prev;
      const newId = `g_${Date.now().toString(36)}_${String(prev.length).padStart(3, "0")}`;
      const duplicate: BoundingBox = {
        ...original,
        id: newId,
        x: original.x + 20,
        y: original.y + 20,
        joins: { ...original.joins, touching_ids: [] },
      };
      return [...prev, duplicate];
    });
  }, []);

  // Labels
  const handleAddLabel = useCallback(
    (label: string) => {
      if (!selectedId) return;
      setBboxes((prev) =>
        prev.map((b) =>
          b.id === selectedId && !b.labels.includes(label)
            ? { ...b, labels: [...b.labels, label] }
            : b
        )
      );
    },
    [selectedId]
  );

  const handleRemoveLabel = useCallback(
    (label: string) => {
      if (!selectedId) return;
      setBboxes((prev) =>
        prev.map((b) =>
          b.id === selectedId
            ? { ...b, labels: b.labels.filter((l) => l !== label) }
            : b
        )
      );
    },
    [selectedId]
  );

  // Zoom
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 4));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.25));
  const handleZoomReset = () => setZoom(1);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "d" || e.key === "D") setMode("draw");
      if (e.key === "s" || e.key === "S") setMode("select");
      if (e.key === "h" || e.key === "H") setMode("pan");
      if (e.key === "Delete" || e.key === "Backspace") {
        if (selectedId) handleDeleteBBox(selectedId);
      }
      if (e.key === "=" || e.key === "+") handleZoomIn();
      if (e.key === "-" || e.key === "_") handleZoomOut();
      if (e.key === "0") handleZoomReset();
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedId, handleDeleteBBox]);

  // Export JSON
  const handleExportJSON = () => {
    if (!imageMeta) return;

    const imageLabel = {
      image_id: imageMeta.image_id,
      width: imageMeta.naturalWidth,
      height: imageMeta.naturalHeight,
      dpi: imageMeta.dpi,
    };

    const annotations: GlyphAnnotation[] = bboxes.map((b, idx) => ({
      glyph_id: `g_${imageMeta.image_id}_${String(idx).padStart(3, "0")}`,
      image_id: imageMeta.image_id,
      bbox: [b.x, b.y, b.w, b.h],
      mask: null,
      labels: b.labels,
      variant: b.variant,
      joins: b.joins,
      confidence: b.confidence,
    }));

    const exportData: ExportData = {
      image_label: imageLabel,
      annotations,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${imageMeta.image_id}_annotations.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export cropped images as ZIP
  const handleExportImages = async () => {
    if (!imageMeta || bboxes.length === 0) return;

    // Load the original image
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = imageMeta.src;
    });

    // Create canvas for cropping
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const zip = new JSZip();

    // Process each bounding box
    for (let idx = 0; idx < bboxes.length; idx++) {
      const bbox = bboxes[idx];
      
      // Set canvas size to bbox size
      canvas.width = bbox.w;
      canvas.height = bbox.h;

      // Draw the cropped region
      ctx.drawImage(
        img,
        bbox.x, bbox.y, bbox.w, bbox.h,  // source rectangle
        0, 0, bbox.w, bbox.h              // destination rectangle
      );

      // Convert to blob
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });

      if (blob) {
        const filename = `${bbox.id}.png`;
        
        // If bbox has labels, save in each label folder
        if (bbox.labels.length > 0) {
          for (const label of bbox.labels) {
            // Map label to Tamil character or use label as-is for custom folders
            let folderName = label;
            
            // If it's a standard Tamil character label, convert to Tamil character
            if (LABEL_TO_TAMIL_MAP.has(label)) {
              folderName = LABEL_TO_TAMIL_MAP.get(label)!;
            } else if (label.startsWith("FOLDER_")) {
              // For custom folders, remove the FOLDER_ prefix
              folderName = label.replace("FOLDER_", "");
            }
            
            const folderPath = `${folderName}/${filename}`;
            zip.file(folderPath, blob);
          }
        } else {
          // If no labels, save in "unlabeled" folder
          zip.file(`unlabeled/${filename}`, blob);
        }
      }
    }

    // Generate and download the ZIP file
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${imageMeta.image_id}_glyphs.zip`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="flex flex-col h-screen w-full overflow-hidden"
      style={{ background: "#030b17", color: "#e2e8f0" }}
    >
      {/* Top Toolbar */}
      <Toolbar
        mode={mode}
        zoom={zoom}
        bboxCount={bboxes.length}
        selectedId={selectedId}
        hasImage={!!imageMeta}
        imageName={imageMeta?.fileName ?? ""}
        onModeChange={setMode}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onZoomReset={handleZoomReset}
        onExportJSON={handleExportJSON}
        onExportImages={handleExportImages}
        onClearAll={() => {
          setBboxes([]);
          setSelectedId(null);
        }}
        onDeleteSelected={() => selectedId && handleDeleteBBox(selectedId)}
        onUploadClick={() => fileInputRef.current?.click()}
      />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Character panel */}
        <div className="w-64 flex-shrink-0 overflow-hidden flex flex-col">
          <CharacterPanel
            selectedBBoxId={selectedId}
            selectedLabels={selectedBbox?.labels ?? []}
            allBBoxes={bboxes}
            onAddLabel={handleAddLabel}
            onRemoveLabel={handleRemoveLabel}
          />
        </div>

        {/* Center: Canvas */}
        <div className="flex-1 overflow-hidden">
          <ImageCanvas
            imageSrc={imageMeta?.src ?? null}
            imageNaturalWidth={imageMeta?.naturalWidth ?? 0}
            imageNaturalHeight={imageMeta?.naturalHeight ?? 0}
            bboxes={bboxes}
            selectedId={selectedId}
            mode={mode}
            zoom={zoom}
            onAddBBox={handleAddBBox}
            onSelectBBox={setSelectedId}
            onUpdateBBox={handleUpdateBBox}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          />
        </div>

        {/* Right: Properties panel */}
        <div className="w-64 flex-shrink-0 overflow-hidden flex flex-col">
          <PropertiesPanel
            bbox={selectedBbox}
            allBBoxes={bboxes}
            imageMeta={imageMeta}
            onUpdate={handleUpdateBBox}
            onDelete={handleDeleteBBox}
            onDuplicate={handleDuplicateBBox}
          />
        </div>
      </div>

      {/* Keyboard shortcuts hint */}
      <div
        className="px-3 py-1 flex items-center gap-4 text-xs text-slate-600 flex-shrink-0"
        style={{ borderTop: "1px solid #1e293b", background: "#060f1e" }}
      >
        <span><kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "#1e293b", color: "#94a3b8" }}>D</kbd> Draw</span>
        <span><kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "#1e293b", color: "#94a3b8" }}>S</kbd> Select</span>
        <span><kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "#1e293b", color: "#94a3b8" }}>Del</kbd> Delete</span>
        <span><kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "#1e293b", color: "#94a3b8" }}>+/-</kbd> Zoom</span>
        <span><kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "#1e293b", color: "#94a3b8" }}>0</kbd> Fit</span>
        <span><kbd className="px-1 py-0.5 rounded text-xs" style={{ background: "#1e293b", color: "#94a3b8" }}>Esc</kbd> Deselect</span>
        <div className="flex-1" />
        <span className="text-slate-700">Olaisuvadi Palm Leaf Annotation Tool • v1.0</span>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.tiff,.tif"
        className="hidden"
        onChange={handleFileInput}
      />
    </div>
  );
}