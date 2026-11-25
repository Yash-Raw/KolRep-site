"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AudioLines,
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

  const sha256 = "472476d4cd7d63213152d2682218d6bc456c532a970223f1a411216588ffb3ac";
  const installCmd =
    "git clone https://github.com/Yash-Raw/KolRep.git\ncd KolRep && pip install -r backend/requirements.txt\n(cd frontend && npm install) && ./run-local.sh";

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
          KolRep
        </Link>

        <div className="landing-header-actions">
          <a href="#features" className="text-muted hover:text-ink">
            Features
          </a>
          <a href="#specifications" className="text-muted hover:text-ink">
            Specifications
          </a>
          <a
            href="https://github.com/Yash-Raw/KolRep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-ink"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a href="https://github.com/Yash-Raw/KolRep/releases/download/v1.0.0/KolRep_1.0.0_aarch64.dmg" className="btn btn-primary">
            Download v1.0.0 <Download size={14} />
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="broadcast-hero" aria-label="Product Overview">
        {/* Broadcast Kicker */}
        <div className="broadcast-kicker">
          <p className="eyebrow">INDEPENDENT VOICE PRODUCTION</p>
          <p className="eyebrow">RECORDED BY YOU. REIMAGINED BY KOLREP.</p>
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
            Instant zero-shot local voice cloning and studio narration running on your own hardware.
            Zero cloud voice APIs, zero telemetry, and dual-layer cryptographic provenance with
            in-band acoustic watermarking.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="#download" className="btn btn-primary">
              Download release <Download size={16} />
            </a>
            <a
              href="https://github.com/Yash-Raw/KolRep"
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
            KR—01
          </span>
          <SignalArt />
          <div className="broadcast-art-bottom">
            <span>ORIGINAL VOICE. NEW POSSIBILITIES.</span>
            <span>100% LOCAL · OFFLINE-READY</span>
          </div>
        </div>
      </section>

      {/* 3. Product Description / Core Value */}
      <section id="features" className="broadcast-process" aria-label="Features">
        <div className="broadcast-section-header">
          <div>
            <p className="eyebrow">
              KOLREP AT A GLANCE
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
            <h3>100% On-Device Inference.</h3>
            <p>
              Runs locally on your Mac or Linux machine using PyTorch with Apple Silicon Metal
              (MPS), NVIDIA CUDA, or CPU fallback. After a one-time ~1.05 GB model weight download,
              your recordings and voice profiles stay strictly on your local SSD.
            </p>
            <div className="mono text-[10px] text-[#a5ba84] mt-6 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>ZERO CLOUD VOICE APIS · ZERO TELEMETRY</span>
            </div>
          </article>

          {/* Feature 02 */}
          <article className="broadcast-step">
            <p className="eyebrow">02 / STUDIO QUALITY</p>
            <h3>Zero-Shot Diffusion Engine.</h3>
            <p>
              Replicate an authorized voice with expressive nuance and natural pacing from a single
              6–12 second reference sample. Powered by F5-TTS Conditional Flow Matching DiT and
              Whisper ASR reference transcription.
            </p>
            <div className="mono text-[10px] text-[#c63e26] mt-6 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>36-STEP FLOW MATCHING · 24 KHZ 256K MP3</span>
            </div>
          </article>

          {/* Feature 03 */}
          <article className="broadcast-step">
            <p className="eyebrow">03 / VERIFIED PROVENANCE</p>
            <h3>Dual-Layer Provenance.</h3>
            <p>
              Generated takes are signed with a local X.509 ECDSA P-256 provenance manifest
              (SHA-256 audio hash binding) and embedded with an in-band QIM acoustic watermark on
              clips 6 seconds or longer, inspectable via the built-in verifier.
            </p>
            <div className="mono text-[10px] text-[#a5ba84] mt-6 flex items-center gap-1.5">
              <ShieldCheck size={13} />
              <span>X.509 ECDSA MANIFEST + QIM WATERMARK</span>
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
            Download KolRep.
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
                Self-contained standalone desktop package. Includes the native Tauri v2 application
                with zero runtime prerequisites—no Python, Node.js, Docker, PostgreSQL, Redis, or
                FFmpeg installation required.
              </p>

              <div className="space-y-2 mb-8 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Supports macOS 12.0+ (Monterey, Ventura, Sonoma, Sequoia)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Apple Silicon Native: M1, M2, M3, M4 (MPS Accelerated)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Drag-to-Applications DMG with guided first-run model download (~1.05 GB)</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/Yash-Raw/KolRep/releases/download/v1.0.0/KolRep_1.0.0_aarch64.dmg"
                className="btn btn-primary w-full text-sm py-3.5 mb-4 font-semibold"
              >
                <Download size={18} />
                Download KolRep_1.0.0_aarch64.dmg
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
              <p className="text-[11px] text-muted mt-3 leading-relaxed">
                Unsigned open-source release: on first launch, right-click <code>KolRep.app</code> &rarr;{" "}
                <strong>Open</strong> to approve via macOS Gatekeeper.
              </p>
            </div>
          </div>

          {/* Card B: Developer CLI & Docker */}
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div>
                  <span className="eyebrow block mb-1">DEVELOPERS &amp; LINUX / SELF-HOSTED</span>
                  <h3 className="text-2xl font-medium text-ink">Source &amp; Docker Compose</h3>
                </div>
                <span className="mono text-xs px-2.5 py-1 bg-soft text-muted rounded border border-line font-medium">
                  OPEN SOURCE
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Run the full-stack Next.js and FastAPI platform locally from source or via Docker
                Compose. Supports macOS (MPS) and Linux (NVIDIA CUDA or CPU) workstations.
              </p>

              {/* CLI Command Box */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="mono text-[10px] text-muted flex items-center gap-1.5">
                    <Terminal size={12} /> SOURCE LAUNCHER COMMANDS
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
                  <span>Python 3.11+, Node.js 20.9+ (22 recommended), FFmpeg, PostgreSQL &amp; Redis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Apple Silicon MPS, NVIDIA CUDA (native Python), or CPU fallback</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Docker support: <code>docker compose up -d --build</code> (CPU container)</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/Yash-Raw/KolRep"
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
            <p className="eyebrow">HARDWARE REQUIREMENTS &amp; SPECIFICATIONS</p>
            <p className="eyebrow">RECOMMENDED CONFIGURATION</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">ACCELERATION</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <Cpu size={16} className="text-[#c63e26]" /> MPS / CUDA / CPU
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Apple Silicon (M1–M4) via Metal MPS, NVIDIA CUDA GPU (native Python), or automatic
                CPU fallback.
              </p>
            </div>

            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">MEMORY &amp; DISK</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <HardDrive size={16} className="text-[#c63e26]" /> 16GB RAM · 2.5GB+ Disk
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                16GB RAM recommended for smooth diffusion synthesis, plus at least 2.5GB free disk
                space for local model weights.
              </p>
            </div>

            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">PROVENANCE</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#c63e26]" /> X.509 + QIM Watermark
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Local X.509 ECDSA P-256 signed metadata with SHA-256 audio hash binding and in-band
                QIM watermarking.
              </p>
            </div>

            <div className="p-5 border border-line bg-paper rounded">
              <span className="mono text-[10px] text-muted uppercase block mb-1">LICENSING</span>
              <h4 className="text-base font-medium mb-2 flex items-center gap-2">
                <Lock size={16} className="text-[#c63e26]" /> $0.00 / AGPL-3.0 Code
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Zero subscriptions or cloud bills. KolRep code is AGPL-3.0; default F5-TTS weights
                are CC-BY-NC-4.0 (non-commercial).
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
              KolRep
            </Link>

            <div className="broadcast-footer-links">
              <a
                href="https://github.com/Yash-Raw/KolRep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <GithubIcon size={14} /> Repository
              </a>
              <a
                href="https://github.com/Yash-Raw/KolRep/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Releases
              </a>
              <a
                href="https://github.com/Yash-Raw/KolRep/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGPL-3.0 License
              </a>
              <a
                href="https://x.com/yash_chaur6225"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </div>
          </div>

          <div className="broadcast-footer-bottom">
            <span>YOUR DEVICE. YOUR VOICE.</span>
            <span>© {new Date().getFullYear()} KOLREP — 100% LOCAL AI VOICE CLONING</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
