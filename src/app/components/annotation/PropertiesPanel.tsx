import React, { useState } from "react";
import { BoundingBox, Polygon, StrikedOut, TamilChar } from "./types";
import { Trash2, ChevronDown, Info, Tag, AlertTriangle, Folder } from "lucide-react";
import { getLabelInfo } from "./tamilData";

interface Props {
  bbox: BoundingBox | null;
  polygon?: Polygon | null;
  allBBoxes: BoundingBox[];
  imageMeta: { image_id: string; naturalWidth: number; naturalHeight: number; dpi: number } | null;
  onUpdate: (id: string, updates: Partial<BoundingBox>) => void;
  onUpdatePolygon?: (id: string, updates: Partial<Polygon>) => void;
  onDelete: (id: string) => void;
  onDeletePolygon?: (id: string) => void;
  customChars?: TamilChar[];
}

const STRIKED_OPTIONS: StrikedOut[] = ["none", "above line", "below line", "after", "before"];

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div
        onClick={() => onChange(!checked)}
        className="relative w-8 h-4 rounded-full transition-colors flex-shrink-0"
        style={{ background: checked ? "#3B82F6" : "#334155" }}
      >
        <div
          className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform"
          style={{ left: checked ? "calc(100% - 14px)" : "2px" }}
        />
      </div>
      <span className="text-xs text-slate-300">{label}</span>
    </label>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-1" style={{ borderBottom: "1px solid #1e293b" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800/50 transition-colors"
      >
        <span className="text-slate-400">{icon}</span>
        <span className="text-xs text-slate-300 flex-1 text-left" style={{ fontWeight: 600, letterSpacing: 0.4 }}>
          {title}
        </span>
        <ChevronDown
          size={12}
          className="text-slate-500 transition-transform"
          style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
        />
      </button>
      {open && <div className="px-3 pb-3">{children}</div>}
    </div>
  );
}

export function PropertiesPanel({ bbox, polygon, imageMeta, onUpdate, onUpdatePolygon, onDelete, onDeletePolygon }: Props) {
  // Use whichever annotation is selected
  const annotation = bbox ?? polygon ?? null;
  const isPolygon = !!polygon && !bbox;
  if (!annotation) {
    return (
      <div
        className="flex flex-col h-full"
        style={{ background: "#060f1e", borderLeft: "1px solid #1e293b" }}
      >
        <div className="px-3 py-3" style={{ borderBottom: "1px solid #1e293b" }}>
          <h2 className="text-sm text-slate-200" style={{ fontWeight: 600, letterSpacing: 0.3 }}>
            Properties
          </h2>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-slate-600">
          <Info size={28} />
          <p className="text-xs text-center px-4">
            Select a bounding box to edit its annotation properties
          </p>
        </div>

        {/* Image metadata */}
        {imageMeta && (
          <div className="px-3 py-3" style={{ borderTop: "1px solid #1e293b" }}>
            <div className="text-xs text-slate-500 mb-2" style={{ fontWeight: 600, letterSpacing: 0.3 }}>
              IMAGE METADATA
            </div>
            <div className="space-y-1">
              {[
                ["ID", imageMeta.image_id],
                ["Width", `${imageMeta.naturalWidth}px`],
                ["Height", `${imageMeta.naturalHeight}px`],
                ["DPI", `${imageMeta.dpi}`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-xs">
                  <span className="text-slate-500">{k}</span>
                  <span className="text-slate-300 font-mono">{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Unified update handler
  const handleUpdate = (updates: Partial<BoundingBox>) => {
    if (isPolygon && polygon && onUpdatePolygon) {
      onUpdatePolygon(polygon.id, updates as Partial<Polygon>);
    } else if (bbox) {
      onUpdate(bbox.id, updates);
    }
  };

  const handleDelete = () => {
    if (isPolygon && polygon && onDeletePolygon) {
      onDeletePolygon(polygon.id);
    } else if (bbox) {
      onDelete(bbox.id);
    }
  };

  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
      style={{ background: "#060f1e", borderLeft: "1px solid #1e293b", scrollbarWidth: "thin", scrollbarColor: "#334155 transparent" }}
    >
      {/* Header */}
      <div className="px-3 py-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid #1e293b" }}>
        <div
          className="w-3 h-3 rounded-sm flex-shrink-0"
          style={{ background: annotation.color, border: `2px solid ${annotation.color}80` }}
        />
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-200 font-mono truncate" style={{ fontWeight: 600 }}>
            {annotation.glyphId}
          </div>
          {isPolygon && (
            <div className="text-xs text-slate-500" style={{ fontSize: 9, marginTop: 2 }}>POLYGON</div>
          )}
        </div>
        <button
          onClick={handleDelete}
          title="Delete"
          className="text-slate-500 hover:text-red-400 p-1 rounded hover:bg-slate-800 transition-colors"
        >
          <Trash2 size={13} />
        </button>
      </div>

      {/* Coordinates section — bbox shows x/y/w/h fields; polygon shows vertex count */}
      {isPolygon ? (
        <Section title="POLYGON" icon={<Tag size={12} />}>
          <div className="mt-1 space-y-1">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-500">Vertices</span>
              <span className="text-slate-300 font-mono">{polygon!.points.length}</span>
            </div>
            {polygon!.points.length > 0 && (
              <div 
                className="max-h-32 overflow-y-auto space-y-1 pr-1"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#334155 transparent" }}
              >
                {polygon!.points.map((p, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 text-xs font-mono"
                    style={{ background: "#0f172a", padding: "2px 6px", borderRadius: "4px", border: "1px solid #1e293b" }}
                  >
                    <span className="text-slate-500 w-4">{i + 1}.</span>
                    <span className="text-blue-400 flex-1">x: {Math.round(p.x)}</span>
                    <span className="text-emerald-400 flex-1">y: {Math.round(p.y)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="text-xs text-slate-600 italic mt-1.5">Points are stored in image pixel coordinates</div>
          </div>
        </Section>
      ) : (
        <Section title="BOUNDING BOX" icon={<Tag size={12} />}>
          <div className="grid grid-cols-2 gap-1.5 mt-1">
            {(["x", "y", "w", "h"] as const).map((key) => (
              <div key={key}>
                <label className="text-xs text-slate-500 block mb-0.5">{key.toUpperCase()}</label>
                <input
                  type="number"
                  value={bbox![key]}
                  onChange={(e) =>
                    onUpdate(bbox!.id, { [key]: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-2 py-1 rounded text-xs font-mono outline-none"
                  style={{
                    background: "#0f172a",
                    border: "1px solid #334155",
                    color: "#e2e8f0",
                  }}
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Labels */}
      <Section title="LABELS" icon={<Tag size={12} />}>
        <div className="mt-1">
          {annotation.labels.length === 0 ? (
            <div className="text-xs text-slate-600 italic py-1">No labels — click characters on the left</div>
          ) : (
            <>
              {(() => {
                const customFolders = annotation.labels.filter((l) => l.startsWith("FOLDER_"));
                const standardLabels = annotation.labels.filter((l) => !l.startsWith("FOLDER_"));

                return (
                  <div className="space-y-2">
                    {/* Custom Glyphs */}
                    {customFolders.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Folder size={10} className="text-blue-400" />
                          <span className="text-xs text-slate-500" style={{ fontWeight: 600, letterSpacing: 0.3 }}>
                            CUSTOM GLYPHS
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {customFolders.map((lbl) => {
                            const info = getLabelInfo(lbl);
                            const displayLabel = info?.char || lbl.replace("FOLDER_", "").replace(/_/g, " ");
                            return (
                              <div
                                key={lbl}
                                className="flex items-center gap-1 px-2 py-1 rounded text-xs"
                                style={{
                                  background: "#1e3a5f",
                                  color: "#93c5fd",
                                  border: "1px solid #3B82F6",
                                }}
                              >
                                <Folder size={11} />
                                <span style={{ fontWeight: 600, fontFamily: "'Noto Sans Tamil', serif", fontSize: 16 }}>{displayLabel}</span>
                                <button
                                  onClick={() =>
                                    handleUpdate({ labels: annotation.labels.filter((l) => l !== lbl) })
                                  }
                                  className="text-slate-400 hover:text-red-400 transition-colors leading-none ml-0.5"
                                >
                                  ×
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Standard Character Labels */}
                    {standardLabels.length > 0 && (
                      <div>
                        {customFolders.length > 0 && (
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Tag size={10} className="text-slate-500" />
                            <span className="text-xs text-slate-500" style={{ fontWeight: 600, letterSpacing: 0.3 }}>
                              CHARACTER LABELS
                            </span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1.5">
                          {standardLabels.map((lbl) => (
                            <div
                              key={lbl}
                              className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono"
                              style={{ background: "#1e293b", color: "#93c5fd", border: "1px solid #334155" }}
                            >
                              <span style={{ fontFamily: "monospace" }}>{lbl}</span>
                              <button
                                onClick={() =>
                                  handleUpdate({ labels: annotation.labels.filter((l) => l !== lbl) })
                                }
                                className="text-slate-500 hover:text-red-400 transition-colors leading-none"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </>
          )}
          {annotation.labels.length > 1 && (
            <div
              className="flex items-center gap-1.5 px-2 py-1.5 rounded text-xs mt-2"
              style={{ background: "#172033", border: "1px solid #1e3a5f", color: "#93c5fd" }}
            >
              <AlertTriangle size={10} />
              Multi-label detected — proofread recommended
            </div>
          )}
        </div>
      </Section>

      {/* Variant */}
      <Section title="VARIANT" icon={<Info size={12} />}>
        <div className="space-y-2.5 mt-1">
          <Toggle
            label="Elongated stroke"
            checked={annotation.variant.elongated}
            onChange={(v) =>
              handleUpdate({ variant: { ...annotation.variant, elongated: v } })
            }
          />
          <Toggle
            label="Broken glyph"
            checked={annotation.variant.broken}
            onChange={(v) =>
              handleUpdate({ variant: { ...annotation.variant, broken: v } })
            }
          />
          <div>
            <label className="text-xs text-slate-500 block mb-1">Striked-out</label>
            <select
              value={annotation.variant.striked_out}
              onChange={(e) =>
                handleUpdate({
                  variant: { ...annotation.variant, striked_out: e.target.value as StrikedOut },
                })
              }
              className="w-full px-2 py-1.5 rounded text-xs outline-none"
              style={{
                background: "#0f172a",
                border: "1px solid #334155",
                color: "#e2e8f0",
                appearance: "none",
              }}
            >
              {STRIKED_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o === "none" ? "None" : o}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Section>


      {/* Confidence */}
      <Section title="CONFIDENCE" icon={<Info size={12} />}>
        <div className="mt-1">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs text-slate-500">Score</span>
            <span className="text-xs text-slate-200 font-mono">{annotation.confidence.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={annotation.confidence}
            onChange={(e) => handleUpdate({ confidence: parseFloat(e.target.value) })}
            className="w-full accent-blue-500"
            style={{ cursor: "pointer" }}
          />
          <div className="flex justify-between text-xs text-slate-600 mt-0.5">
            <span>0.0</span>
            <span>0.5</span>
            <span>1.0</span>
          </div>
          <p className="text-xs text-slate-600 mt-1">Default 1.0 (manual annotation)</p>
        </div>
      </Section>
    </div>
  );
}
