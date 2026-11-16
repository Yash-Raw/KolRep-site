"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  FileAudio,
  FileCheck2,
  Lock,
  ShieldAlert,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { PageHeader } from "@/components/ui/StudioUI";

export default function VerifyPage() {
  const [analyzed, setAnalyzed] = useState(true);

  return (
    <div className="page verify-page">
      <PageHeader
        number="03"
        label="Audio Verification"
        title="Inspect audio for provenance & watermarks."
        description="Verify whether an audio recording was synthesized with VoiceRep, inspect embedded C2PA manifests, and detect acoustic watermarks."
      />

      <div className="inspection-intro">
        <div className="inspection-info">
          <strong className="block text-ink text-sm mb-1">Dual-Layer Authenticity Verification</strong>
          Layer 1 verifies inaudible spread-spectrum acoustic watermarks resilient to MP3/AAC compression.
          Layer 2 validates the cryptographic C2PA digital manifest signed by the author's local hardware key.
        </div>
        <div className="verification-legend">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a5ba84]" />
            <span className="mono">VERIFIED AUTHENTIC</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d87d3a]" />
            <span className="mono">TRANSCODED / MANIFEST STRIPPED</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c63e26]" />
            <span className="mono">UNVERIFIED / UNKNOWN SOURCE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Upload Zone */}
        <div className="upload-zone flex flex-col items-center justify-center p-8 text-center border border-dashed border-line rounded">
          <div className="w-14 h-14 rounded-full bg-soft flex items-center justify-center mb-4 text-muted">
            <Upload size={24} />
          </div>
          <h3 className="text-base font-medium mb-1">Drop audio file for provenance check</h3>
          <p className="text-xs text-muted max-w-xs mb-4">
            Supports WAV, MP3, FLAC, and M4A up to 100MB. Analyzed strictly in your local browser sandbox.
          </p>
          <button className="btn btn-secondary text-xs">Select audio file</button>
        </div>

        {/* Verification Inspector Results */}
        {analyzed && (
          <div className="panel p-6">
            <div className="flex items-center justify-between pb-4 border-b border-line mb-4">
              <div className="flex items-center gap-2">
                <FileAudio size={20} className="text-[#c63e26]" />
                <span className="font-medium text-sm">sample_take_01_master.wav</span>
              </div>
              <span className="mono text-[10px] px-2.5 py-1 bg-[#252822] text-[#a5ba84] rounded border border-[#3c4236]">
                AUTHENTIC
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-canvas p-3.5 rounded border border-line">
                <div className="flex items-center justify-between mb-1">
                  <span className="mono text-[10px] text-muted uppercase">LAYER 1: ACOUSTIC WATERMARK</span>
                  <span className="mono text-[10px] text-[#a5ba84] flex items-center gap-1">
                    <CheckCircle2 size={12} /> DETECTED (24.1 kHz)
                  </span>
                </div>
                <p className="text-xs text-muted">
                  Spread-spectrum payload verified. Confidence score: 99.8%. Audio has not undergone destructive manipulation.
                </p>
              </div>

              <div className="bg-canvas p-3.5 rounded border border-line">
                <div className="flex items-center justify-between mb-1">
                  <span className="mono text-[10px] text-muted uppercase">LAYER 2: C2PA CRYPTOGRAPHIC MANIFEST</span>
                  <span className="mono text-[10px] text-[#a5ba84] flex items-center gap-1">
                    <CheckCircle2 size={12} /> VALID SIGNATURE
                  </span>
                </div>
                <div className="mono text-[10px] text-muted space-y-1 mt-2">
                  <div>ISSUER: VoiceRep Local Engine (MPS-v1)</div>
                  <div>CLAIM_ID: urn:c2pa:voicerep:f5tts:mps-sha256-4b89a22f</div>
                  <div>TIMESTAMP: {new Date().toISOString()}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
