"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AudioLines,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  Download,
  HardDrive,
  Lock,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SignalArt } from "@/components/ui/SignalArt";

function GithubIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function ProductLandingPage() {
  const [copiedSha, setCopiedSha] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const sha256 = "91c5bb06bb55ac73fc526605426b26ae1f2228a1a87288f96dda68daac7d8209";
  const installCmd = "git clone https://github.com/Yash-Raw/VoiceRep.git\ncd VoiceRep && chmod +x run-local.sh && ./run-local.sh";

  const handleCopySha = () => {
    navigator.clipboard.writeText(sha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(installCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="landing">
      {/* 1. Header / Navigation */}
      <header className="landing-header">
        <Link href="/" className="brand">
          <span className="brand-symbol">
            <AudioLines size={20} strokeWidth={2.2} />
          </span>
          VoiceRep
        </Link>

        <div className="landing-header-actions">
          <a href="#features" className="text-muted hover:text-ink">
            Features
          </a>
          <a href="#specifications" className="text-muted hover:text-ink">
            Specifications
          </a>
          <a
            href="https://github.com/Yash-Raw/VoiceRep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-ink"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a href="#download" className="btn btn-primary">
            Download v1.0.0 <Download size={14} />
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="broadcast-hero" aria-label="Product Overview">
        {/* Broadcast Kicker */}
        <div className="broadcast-kicker">
          <p className="eyebrow">INDEPENDENT VOICE PRODUCTION</p>
          <p className="eyebrow">RECORDED BY YOU. REIMAGINED BY VOICEREP.</p>
        </div>

        {/* Main Headline */}
        <h1 className="headline-enter">
          A voice of
          <br />
          <span className="text-accent">your own.</span>
        </h1>

        {/* Lead Subtext & CTAs */}
        <div className="broadcast-intro">
          <p>
            Instant zero-shot local voice cloning and studio narration running completely on-device.
            Zero cloud costs, zero telemetry, and verifiable content authenticity via dual-layer C2PA
            cryptographic provenance.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="#download" className="btn btn-primary">
              Download release <Download size={16} />
            </a>
            <a
              href="https://github.com/Yash-Raw/VoiceRep"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View repository <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Physical Signal Display */}
        <div className="broadcast-art" role="img" aria-label="Analog signal waveform monitor">
          <span className="broadcast-art-label">FIG. 01 / THE HUMAN SIGNAL</span>
          <span className="broadcast-art-number" aria-hidden="true">
            VR—01
          </span>
          <SignalArt />
          <div className="broadcast-art-bottom">
            <span>ORIGINAL VOICE. NEW POSSIBILITIES.</span>
            <span>100% LOCAL · AIR-GAPPED</span>
          </div>
        </div>
      </section>

      {/* 3. Product Description / Core Value */}
      <section id="features" className="broadcast-process" aria-label="Features">
        <div className="broadcast-section-header">
          <div>
            <p className="eyebrow">
              VOICEREP AT A GLANCE
              <br />
              01 — 03
            </p>
          </div>
          <h2>
            From an authorized recording.
            <br />
            To studio narration worth hearing.
          </h2>
        </div>

        <div className="broadcast-steps">
          {/* Feature 01 */}
          <article className="broadcast-step">
            <p className="eyebrow">01 / COMPLETE PRIVACY</p>
            <h3>100% On-Device & Air-Gapped.</h3>
            <p>
              Runs locally on your Mac or PC using PyTorch and Apple Silicon Metal Performance Shaders
              (MPS) or NVIDIA CUDA. Your biometric voiceprints and raw recordings never leave your local
              SSD.
            </p>
            <div className="mono text-[10px] text-[#a5ba84] mt-6 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>0 BYTES CLOUD INGRESS · ZERO TELEMETRY</span>
            </div>
          </article>

          {/* Feature 02 */}
          <article className="broadcast-step">
            <p className="eyebrow">02 / STUDIO QUALITY</p>
            <h3>Zero-Shot Diffusion Engine.</h3>
            <p>
              Replicate any voice with expressive nuance and natural pacing from a single 10-second reference
              sample. Powered by F5-TTS Conditional Flow Matching DiT and Whisper phoneme alignment.
            </p>
            <div className="mono text-[10px] text-[#c63e26] mt-6 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>36-STEP FLOW MATCHING · 24-BIT PCM WAV</span>
            </div>
          </article>

          {/* Feature 03 */}
          <article className="broadcast-step">
            <p className="eyebrow">03 / VERIFIED AUTHENTICITY</p>
            <h3>Dual-Layer C2PA Provenance.</h3>
            <p>
              Every take is embedded with an imperceptible psychoacoustic watermark and cryptographically
              signed with an X.509 C2PA manifest conforming to EU AI Act Article 50 and US EO 14110.
            </p>
            <div className="mono text-[10px] text-[#a5ba84] mt-6 flex items-center gap-1.5">
              <ShieldCheck size={13} />
              <span>CRYPTOGRAPHIC MANIFEST + WATERMARK</span>
            </div>
          </article>
        </div>
      </section>

      {/* 4. Download Release Section */}
      <section id="download" className="broadcast-process" style={{ paddingTop: 0 }} aria-label="Download">
        <div className="broadcast-section-header">
          <div>
            <p className="eyebrow">
              OFFICIAL RELEASES
              <br />
              V1.0.0 / STANDALONE
            </p>
          </div>
          <h2>
            Download VoiceRep.
            <br />
            Ready for your hardware.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card A: Native macOS App */}
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div>
                  <span className="eyebrow block mb-1">NATIVE DESKTOP APP</span>
                  <h3 className="text-2xl font-medium text-ink">macOS Apple Silicon</h3>
                </div>
                <span className="mono text-xs px-2.5 py-1 bg-[#a5ba84]/20 text-[#3f571b] dark:text-[#a5ba84] rounded border border-[#a5ba84]/40 font-semibold">
                  RECOMMENDED
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Self-contained standalone desktop package. Includes the native Tauri application with zero
                prerequisites—no Python, Node.js, Docker, PostgreSQL, or FFmpeg installation required.
              </p>

              <div className="space-y-2 mb-8 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Supports macOS 13.0+ (Ventura, Sonoma, Sequoia)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Apple Silicon Native: M1, M2, M3, M4 (MPS Accelerated)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>1-click DMG installer with automatic model weights setup</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/Yash-Raw/VoiceRep/releases/download/v1.0.0/VoiceRep_1.0.0_aarch64.dmg"
                className="btn btn-primary w-full text-sm py-3.5 mb-4 font-semibold"
              >
                <Download size={18} />
                Download VoiceRep_1.0.0_aarch64.dmg
              </a>

              {/* SHA256 Checksum block */}
              <div className="bg-canvas p-3 rounded border border-line">
                <div className="flex justify-between items-center mb-1">
                  <span className="mono text-[10px] text-muted">SHA-256 CHECKSUM</span>
                  <button
                    onClick={handleCopySha}
                    className="mono text-[10px] text-[#c63e26] hover:underline flex items-center gap-1"
                  >
                    {copiedSha ? <Check size={11} /> : <Copy size={11} />}
                    {copiedSha ? "COPIED" : "COPY"}
                  </button>
                </div>
                <div className="mono text-[11px] text-ink break-all select-all">{sha256}</div>
              </div>
            </div>
          </div>

          {/* Card B: Developer CLI & Docker */}
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div>
                  <span className="eyebrow block mb-1">DEVELOPERS & LINUX / WINDOWS</span>
                  <h3 className="text-2xl font-medium text-ink">Turnkey Source & Docker</h3>
                </div>
                <span className="mono text-xs px-2.5 py-1 bg-soft text-muted rounded border border-line font-medium">
                  OPEN SOURCE
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Run the full-stack system locally via the turnkey launcher script or Docker Compose.
                Supports Linux and Windows workstations with NVIDIA CUDA GPU acceleration.
              </p>

              {/* CLI Command Box */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="mono text-[10px] text-muted flex items-center gap-1.5">
                    <Terminal size={12} /> TURNKEY LAUNCHER COMMAND
                  </span>
                  <button
                    onClick={handleCopyCmd}
                    className="mono text-[10px] text-[#c63e26] hover:underline flex items-center gap-1"
                  >
                    {copiedCmd ? <Check size={11} /> : <Copy size={11} />}
                    {copiedCmd ? "COPIED" : "COPY"}
                  </button>
                </div>
                <pre className="mono text-[11.5px] p-4 bg-canvas border border-line rounded text-ink overflow-x-auto leading-relaxed select-all">
                  {installCmd}
                </pre>
              </div>

              <div className="space-y-2 mb-8 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Python 3.11+, Node.js 20+, and FFmpeg</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>NVIDIA CUDA 12.x or Apple Silicon MPS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Docker support: <code>docker compose up -d</code></span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/Yash-Raw/VoiceRep"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-sm py-3.5 font-semibold flex items-center justify-center gap-2"
              >
                <GithubIcon size={18} />
                Explore on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* 5. System Requirements / Specifications Grid */}
        <div id="specifications" className="border-t border-line pt-10">
          <div className="broadcast-kicker" style={{ marginBottom: "24px" }}>
            <p className="eyebrow">HARDWARE REQUIREMENTS & SPECIFICATIONS</p>
            <p className="eyebrow">TESTED & BENCHMARKED</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">ACCELERATION</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <Cpu size={16} className="text-[#c63e26]" /> Apple MPS / CUDA
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Apple Silicon (M1/M2/M3/M4) via Metal or NVIDIA RTX GPU (CUDA 12.x) with 8GB+ VRAM.
              </p>
            </div>

            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">MEMORY (RAM)</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <HardDrive size={16} className="text-[#c63e26]" /> 16GB Unified RAM
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Minimum 16GB Unified Memory. 24GB+ recommended for long-form batch narration.
              </p>
            </div>

            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">COMPLIANCE</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#c63e26]" /> C2PA / EU AI Act
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Complies with EU AI Act Article 50 and US EO 14110 for content provenance.
              </p>
            </div>

            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">PRICING</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <Lock size={16} className="text-[#c63e26]" /> $0.00 / Free AGPL-3.0
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Zero subscriptions. Zero credit cards. Zero token meters. True self-hosted ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="broadcast-footer">
        <div className="broadcast-footer-inner">
          <div className="broadcast-footer-top">
            <Link href="/" className="brand">
              <span className="brand-symbol">
                <AudioLines size={20} strokeWidth={2.2} />
              </span>
              VoiceRep
            </Link>

            <div className="broadcast-footer-links">
              <a
                href="https://github.com/Yash-Raw/VoiceRep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <GithubIcon size={14} /> Repository
              </a>
              <a
                href="https://github.com/Yash-Raw/VoiceRep/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Releases
              </a>
              <a
                href="https://github.com/Yash-Raw/VoiceRep/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGPL-3.0 License
              </a>
            </div>
          </div>

          <div className="broadcast-footer-bottom">
            <span>YOUR DEVICE. YOUR VOICE.</span>
            <span>© {new Date().getFullYear()} VOICEREP — 100% LOCAL AI VOICE CLONING</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
