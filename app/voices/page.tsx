"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mic, Mic2, Plus, Sparkles, Volume2 } from "lucide-react";
import { PageHeader } from "@/components/ui/StudioUI";

interface VoiceItem {
  id: string;
  name: string;
  role: string;
  sampleDuration: string;
  quality: string;
  consentSigned: boolean;
  takesCount: number;
}

const VOICES: VoiceItem[] = [
  {
    id: "v1",
    name: "David S.",
    role: "Documentary Baritone",
    sampleDuration: "00:18",
    quality: "Studio Pristine (48kHz)",
    consentSigned: true,
    takesCount: 24,
  },
  {
    id: "v2",
    name: "Elena R.",
    role: "Editorial Warmth",
    sampleDuration: "00:22",
    quality: "Broadband Vocal (24kHz)",
    consentSigned: true,
    takesCount: 16,
  },
  {
    id: "v3",
    name: "Marcus K.",
    role: "Broadcast Deep",
    sampleDuration: "00:15",
    quality: "Commercial Vocal (48kHz)",
    consentSigned: true,
    takesCount: 9,
  },
];

export default function VoicesPage() {
  const [voices, setVoices] = useState<VoiceItem[]>(VOICES);

  return (
    <div className="page voices-page">
      <PageHeader
        number="01"
        label="Voice Library"
        title="Your original voices. Stored on-device."
        description="Every voice profile is constructed from your authorized local recordings. Biometric voiceprints are kept strictly offline."
        actions={
          <button className="btn btn-primary">
            <Plus size={16} /> New voice recording
          </button>
        }
      />

      <div className="library-grid">
        {voices.map((voice, idx) => (
          <article key={voice.id} className="voice-sleeve">
            <div className="sleeve-art">
              <span className="mono text-[10px] text-muted">
                PROFILE #{String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="sleeve-content">
              <h3 className="sleeve-title">{voice.name}</h3>
              <p className="text-xs text-muted mb-2">{voice.role}</p>

              <div className="sleeve-meta">
                <span className="mono text-[10px] text-muted">
                  SAMPLE: {voice.sampleDuration}
                </span>
                <span className="mono text-[10px] text-[#a5ba84]">
                  {voice.consentSigned ? "CONSENT VERIFIED" : "PENDING"}
                </span>
              </div>
              <div className="sleeve-meta mt-1">
                <span className="mono text-[10px] text-muted">{voice.quality}</span>
                <span className="mono text-[10px] text-muted">{voice.takesCount} TAKES</span>
              </div>
            </div>

            <div className="sleeve-actions">
              <Link
                href="/studio"
                className="text-link text-xs m-0 border-b border-ink py-1 flex items-center gap-1"
              >
                Open in studio <ArrowUpRight size={14} />
              </Link>
              <button className="btn btn-secondary text-xs py-1.5 px-3 min-h-[34px]">
                Audition sample
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
