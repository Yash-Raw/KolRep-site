"use client";

import Link from "next/link";
import { ArrowUpRight, Download, Play } from "lucide-react";
import { PageHeader } from "@/components/ui/StudioUI";

export default function HistoryPage() {
  const takes = [
    {
      id: "t1",
      voice: "David S. (Documentary Baritone)",
      text: "Every sound carries an imprint of its origin. Here, the machine does not invent your character—it simply preserves what was already recorded.",
      date: "Nov 17, 2026 · 02:14 AM",
      chars: 154,
    },
    {
      id: "t2",
      voice: "Elena R. (Editorial Warmth)",
      text: "Running locally means the microphone stays between you and your physical hardware. No telemetry. No remote servers listening in.",
      date: "Nov 16, 2026 · 11:32 PM",
      chars: 132,
    },
    {
      id: "t3",
      voice: "Marcus K. (Broadcast Deep)",
      text: "Thirty-six diffusion steps through the local MPS neural engine. Fast, precise, and verified with cryptographic authenticity.",
      date: "Nov 15, 2026 · 04:19 PM",
      chars: 122,
    },
  ];

  return (
    <div className="page history-page">
      <PageHeader
        number="04"
        label="Recording History"
        title="Archived Studio Takes."
        description="All synthesized takes generated on this device. Each take is watermarked and signed."
      />

      <div className="history-list">
        {takes.map((take, idx) => (
          <div key={take.id} className="history-entry">
            <span className="history-index">{String(idx + 1).padStart(2, "0")}</span>
            <div>
              <div className="history-meta">
                <strong className="text-xs">{take.voice}</strong>
                <span className="mono text-[10px] text-muted">{take.date}</span>
                <span className="mono text-[10px] text-[#a5ba84]">C2PA SIGNED</span>
              </div>
              <p className="history-text">"{take.text}"</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="icon-button" aria-label="Play take">
                <Play size={16} />
              </button>
              <button className="icon-button" aria-label="Download take">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
