import React, { useState, useEffect, useRef } from "react";
import { TAMIL_GROUPS } from "./tamilData";
import { TamilChar } from "./types";
import { Search, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onSelectCharacter: (label: string) => void;
  onClose: () => void;
  // additional characters (e.g. user‑defined folders) to include in search
  extraChars?: TamilChar[];
}

export function CharacterSearchModal({ isOpen, onSelectCharacter, onClose, extraChars }: Props) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Array<{ char: TamilChar; group: string }>>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Search characters
  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const query = search.toLowerCase();
    const found: Array<{ char: TamilChar; group: string }> = [];

    TAMIL_GROUPS.forEach((group) => {
      group.chars.forEach((char) => {
        if (
          char.char.includes(search) ||
          char.name.toLowerCase().includes(query) ||
          char.label.toLowerCase().includes(query)
        ) {
          found.push({ char, group: group.group });
        }
      });
    });

    if (extraChars) {
      extraChars.forEach((char) => {
        if (
          char.char.includes(search) ||
          char.name.toLowerCase().includes(query) ||
          char.label.toLowerCase().includes(query)
        ) {
          found.push({ char, group: "Custom" });
        }
      });
    }

    setResults(found);
    setSelectedIndex(0);
  }, [search]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0) {
        const selected = results[selectedIndex];
        onSelectCharacter(selected.char.label);
        setSearch("");
        onClose();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div
        className="w-96 rounded-lg shadow-2xl overflow-hidden"
        style={{ background: "#0f1729", border: "1px solid #1e293b" }}
      >
        {/* Header */}
        <div className="px-4 py-3 flex items-center gap-3" style={{ borderBottom: "1px solid #1e293b" }}>
          <Search size={18} style={{ color: "#64748b" }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search character name or label (e.g., 'TA', 'அ')..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: "#e2e8f0" }}
          />
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-slate-500 text-sm">
              {search ? "No characters found" : "Start typing to search for a character"}
            </div>
          ) : (
            results.map((item, idx) => (
              <button
                key={`${item.group}-${item.char.label}`}
                onClick={() => {
                  onSelectCharacter(item.char.label);
                  setSearch("");
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                className="w-full px-4 py-2 text-left flex items-center gap-3 transition-colors text-sm"
                style={{
                  background: selectedIndex === idx ? "#1e3a5f" : "transparent",
                  borderBottom: "1px solid #1e293b",
                  color: "#e2e8f0",
                }}
              >
                <span
                  className="text-2xl w-8 text-center flex-shrink-0"
                  style={{ fontFamily: "'Noto Sans Tamil', serif" }}
                >
                  {item.char.char}
                </span>
                <div className="flex-1 min-w-0">
                  <div style={{ color: "#cbd5e1" }}>{item.char.name}</div>
                  <div style={{ color: "#64748b", fontSize: "0.75rem" }}>
                    {item.char.label} • {item.group}
                  </div>
                </div>
                <div
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    background: "#1e293b",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  {item.char.label}
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div
            className="px-4 py-2 text-xs flex items-center justify-between"
            style={{ background: "#060f1e", color: "#64748b", borderTop: "1px solid #1e293b" }}
          >
            <span>↓↑ Navigate • Enter Select • Esc Close</span>
          </div>
        )}
      </div>
    </div>
  );
}
