import React, { useState } from "react";
import { TamilChar, TamilCharVariant, BoundingBox } from "./types";
import { TAMIL_GROUPS } from "./tamilData";
import { ChevronDown, ChevronRight, Clock, FolderPlus, Folder } from "lucide-react";

interface Props {
  selectedBBoxId: string | null;
  selectedLabels: string[];
  allBBoxes: BoundingBox[];
  onAddLabel: (label: string) => void;
  onRemoveLabel: (label: string) => void;
}

function VariantBadge({
  variant,
  selected,
  onClick,
}: {
  variant: TamilCharVariant;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={`${variant.description}${variant.period ? ` — ${variant.period}` : ""}`}
      className="flex items-center gap-1 px-2 py-0.5 rounded text-xs transition-colors"
      style={{
        background: selected ? "#3B82F6" : "#1e293b",
        color: selected ? "#fff" : "#94a3b8",
        border: `1px solid ${selected ? "#3B82F6" : "#334155"}`,
        cursor: "pointer",
        fontFamily: "monospace",
      }}
    >
      {variant.period && <Clock size={9} />}
      <span>{variant.label}</span>
    </button>
  );
}

function CharRow({
  char,
  selectedLabels,
  onAddLabel,
  onRemoveLabel,
  disabled,
}: {
  char: TamilChar;
  selectedLabels: string[];
  onAddLabel: (label: string) => void;
  onRemoveLabel: (label: string) => void;
  disabled: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const mainSelected = selectedLabels.includes(char.label);

  const handleMainClick = () => {
    if (disabled) return;
    if (mainSelected) {
      onRemoveLabel(char.label);
    } else {
      onAddLabel(char.label);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #1e293b", marginBottom: 4 }}>
      <div
        className="flex items-center gap-2 px-3 py-2 cursor-pointer select-none transition-colors"
        style={{
          background: mainSelected ? "#1e3a5f" : "#0f172a",
          opacity: disabled ? 0.5 : 1,
        }}
        onClick={handleMainClick}
      >
        <span
          className="text-xl w-8 text-center"
          style={{ fontFamily: "'Noto Sans Tamil', serif", lineHeight: 1.2, color: "#f1f5f9" }}
        >
          {char.char}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-300" style={{ fontWeight: 500 }}>
            {char.name}
          </div>
          <div className="text-xs text-slate-500 font-mono">{char.label}</div>
        </div>
        {mainSelected && (
          <div
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{ background: "#3B82F6", flexShrink: 0 }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
              <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="text-slate-500 hover:text-slate-300 transition-colors"
          title="Show variants"
        >
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>

      {expanded && (
        <div className="px-3 py-2 flex flex-wrap gap-1.5" style={{ background: "#0a1525", borderTop: "1px solid #1e293b" }}>
          <div className="w-full text-xs text-slate-500 mb-1 flex items-center gap-1">
            <Clock size={10} />
            Historical Variants
          </div>
          {char.variants.map((v) => {
            const vSelected = selectedLabels.includes(v.label);
            return (
              <VariantBadge
                key={v.label}
                variant={v}
                selected={vSelected}
                onClick={() => {
                  if (disabled) return;
                  if (vSelected) onRemoveLabel(v.label);
                  else onAddLabel(v.label);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export function CharacterPanel({ selectedBBoxId, selectedLabels, allBBoxes, onAddLabel, onRemoveLabel }: Props) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set([TAMIL_GROUPS[0].group, TAMIL_GROUPS[1].group])
  );
  const [search, setSearch] = useState("");
  const [showFolderInput, setShowFolderInput] = useState(false);
  const [customFolderName, setCustomFolderName] = useState("");

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  };

  const disabled = !selectedBBoxId;

  const filterChar = (char: TamilChar) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      char.char.includes(search) ||
      char.name.toLowerCase().includes(q) ||
      char.label.toLowerCase().includes(q) ||
      char.variants.some((v) => v.label.toLowerCase().includes(q))
    );
  };

  const handleCreateCustomFolder = () => {
    if (!customFolderName.trim() || !selectedBBoxId) return;
    
    // Create a custom label with folder prefix
    const customLabel = `FOLDER_${customFolderName.trim().replace(/\s+/g, "_").toUpperCase()}`;
    onAddLabel(customLabel);
    
    // Reset
    setCustomFolderName("");
    setShowFolderInput(false);
  };

  // Extract all unique custom folders from all bboxes
  const allCustomFolders = React.useMemo(() => {
    const folderSet = new Set<string>();
    if (allBBoxes && Array.isArray(allBBoxes)) {
      allBBoxes.forEach((bbox) => {
        bbox.labels.forEach((label) => {
          if (label.startsWith("FOLDER_")) {
            folderSet.add(label);
          }
        });
      });
    }
    return Array.from(folderSet).sort();
  }, [allBBoxes]);

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "#060f1e", borderRight: "1px solid #1e293b" }}
    >
      {/* Header */}
      <div className="px-3 py-3" style={{ borderBottom: "1px solid #1e293b" }}>
        <h2 className="text-sm text-slate-200 mb-2" style={{ fontWeight: 600, letterSpacing: 0.3 }}>
          Tamil Characters
        </h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search character or label…"
          className="w-full px-2.5 py-1.5 rounded text-xs outline-none"
          style={{
            background: "#0f172a",
            border: "1px solid #334155",
            color: "#e2e8f0",
          }}
        />
        {disabled && (
          <div
            className="mt-2 px-2 py-1.5 rounded text-xs text-yellow-300"
            style={{ background: "#422006", border: "1px solid #78350f" }}
          >
            Select a bounding box first to assign labels
          </div>
        )}
      </div>

      {/* Custom Folder Section */}
      <div className="px-3 py-2" style={{ borderBottom: "1px solid #1e293b", background: "#0a1525" }}>
        {!showFolderInput ? (
          <button
            onClick={() => setShowFolderInput(true)}
            disabled={disabled}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded text-xs transition-colors"
            style={{
              background: disabled ? "#0f172a" : "#1e3a5f",
              color: disabled ? "#475569" : "#60a5fa",
              border: `1px solid ${disabled ? "#1e293b" : "#3B82F6"}`,
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.5 : 1,
            }}
          >
            <FolderPlus size={14} />
            <span style={{ fontWeight: 600, letterSpacing: 0.3 }}>CREATE CUSTOM FOLDER</span>
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Folder size={14} className="text-blue-400 flex-shrink-0" />
              <span className="text-xs text-slate-300" style={{ fontWeight: 600 }}>
                New Folder
              </span>
            </div>
            <input
              autoFocus
              value={customFolderName}
              onChange={(e) => setCustomFolderName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateCustomFolder();
                if (e.key === "Escape") {
                  setShowFolderInput(false);
                  setCustomFolderName("");
                }
              }}
              placeholder="Enter folder name (e.g., TA_OLD_FORM)"
              className="w-full px-2.5 py-1.5 rounded text-xs outline-none"
              style={{
                background: "#0f172a",
                border: "1px solid #3B82F6",
                color: "#e2e8f0",
              }}
            />
            <div className="flex gap-2">
              <button
                onClick={handleCreateCustomFolder}
                disabled={!customFolderName.trim()}
                className="flex-1 px-2 py-1.5 rounded text-xs transition-colors"
                style={{
                  background: customFolderName.trim() ? "#3B82F6" : "#1e293b",
                  color: customFolderName.trim() ? "#fff" : "#64748b",
                  fontWeight: 600,
                  cursor: customFolderName.trim() ? "pointer" : "not-allowed",
                }}
              >
                Create & Assign
              </button>
              <button
                onClick={() => {
                  setShowFolderInput(false);
                  setCustomFolderName("");
                }}
                className="px-2 py-1.5 rounded text-xs transition-colors"
                style={{
                  background: "#1e293b",
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                Cancel
              </button>
            </div>
            <div className="text-xs text-slate-600">
              Press Enter to create, Esc to cancel
            </div>
          </div>
        )}
      </div>

      {/* Character list */}
      <div className="flex-1 overflow-y-auto px-2 py-2" style={{ scrollbarWidth: "thin", scrollbarColor: "#334155 transparent" }}>
        {/* Custom Folders */}
        {allCustomFolders.length > 0 && (
          <div className="mb-3">
            <button
              onClick={() => toggleGroup("Custom Folders")}
              className="w-full flex items-center gap-2 px-2 py-1.5 rounded mb-1 transition-colors hover:bg-slate-800"
              style={{ background: "transparent" }}
            >
              <Folder size={16} className="text-blue-400" />
              <span className="text-xs text-slate-400 flex-1 text-left" style={{ fontWeight: 600 }}>
                Custom Folders
              </span>
              <span className="text-xs text-slate-600">({allCustomFolders.length})</span>
              {expandedGroups.has("Custom Folders") ? (
                <ChevronDown size={12} className="text-slate-500" />
              ) : (
                <ChevronRight size={12} className="text-slate-500" />
              )}
            </button>
            {expandedGroups.has("Custom Folders") &&
              allCustomFolders.map((folderLabel) => {
                const folderName = folderLabel.replace("FOLDER_", "").replace(/_/g, " ");
                const isSelected = selectedLabels.includes(folderLabel);
                return (
                  <div
                    key={folderLabel}
                    className="rounded-lg overflow-hidden"
                    style={{ border: "1px solid #1e293b", marginBottom: 4 }}
                  >
                    <div
                      className="flex items-center gap-2 px-3 py-2 cursor-pointer select-none transition-colors"
                      style={{
                        background: isSelected ? "#1e3a5f" : "#0f172a",
                        opacity: disabled ? 0.5 : 1,
                      }}
                      onClick={() => {
                        if (disabled) return;
                        if (isSelected) {
                          onRemoveLabel(folderLabel);
                        } else {
                          onAddLabel(folderLabel);
                        }
                      }}
                    >
                      <Folder size={18} className="text-blue-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-300" style={{ fontWeight: 500 }}>
                          {folderName}
                        </div>
                        <div className="text-xs text-slate-500 font-mono">{folderLabel}</div>
                      </div>
                      {isSelected && (
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: "#3B82F6", flexShrink: 0 }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
                            <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Standard Tamil Character Groups */}
        {TAMIL_GROUPS.map((group) => {
          const filteredChars = group.chars.filter(filterChar);
          if (filteredChars.length === 0) return null;
          const isOpen = expandedGroups.has(group.group) || !!search;

          return (
            <div key={group.group} className="mb-3">
              <button
                onClick={() => toggleGroup(group.group)}
                className="w-full flex items-center gap-2 px-2 py-1.5 rounded mb-1 transition-colors hover:bg-slate-800"
                style={{ background: "transparent" }}
              >
                <span className="text-base" style={{ fontFamily: "'Noto Sans Tamil', serif" }}>
                  {group.icon}
                </span>
                <span className="text-xs text-slate-400 flex-1 text-left" style={{ fontWeight: 600 }}>
                  {group.group}
                </span>
                <span className="text-xs text-slate-600">({filteredChars.length})</span>
                {isOpen ? (
                  <ChevronDown size={12} className="text-slate-500" />
                ) : (
                  <ChevronRight size={12} className="text-slate-500" />
                )}
              </button>
              {isOpen &&
                filteredChars.map((char) => (
                  <CharRow
                    key={char.label}
                    char={char}
                    selectedLabels={selectedLabels}
                    onAddLabel={onAddLabel}
                    onRemoveLabel={onRemoveLabel}
                    disabled={disabled}
                  />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}