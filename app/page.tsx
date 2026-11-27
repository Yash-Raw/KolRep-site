"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AudioLines,
  ArrowUpRight,
  Box,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
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
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedDocker, setCopiedDocker] = useState(false);

  const installCmd =
    "git clone https://github.com/Yash-Raw/KolRep.git\ncd KolRep && pip install -r backend/requirements.txt\n(cd frontend && npm install) && ./run-local.sh";
  const dockerCmd =
    "git clone https://github.com/Yash-Raw/KolRep.git\ncd KolRep && docker compose up -d --build";

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(installCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleCopyDocker = () => {
    navigator.clipboard.writeText(dockerCmd);
    setCopiedDocker(true);
    setTimeout(() => setCopiedDocker(false), 2000);
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
          <a href="#install" className="btn btn-primary">
            Run locally <Terminal size={14} />
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
            <a href="#install" className="btn btn-primary">
              Run locally <Terminal size={16} />
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

      {/* 4. Local Installation Section */}
      <section id="install" className="broadcast-process" style={{ paddingTop: 0 }} aria-label="Local Installation">
        <div className="broadcast-section-header">
          <div>
            <p className="eyebrow">
              SELF-HOSTED SETUP
              <br />
              100% LOCAL / OPEN SOURCE
            </p>
          </div>
          <h2>
            Run KolRep locally.
            <br />
            Ready for your hardware.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card A: Native Source Launcher */}
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div>
                  <span className="eyebrow block mb-1">NATIVE HARDWARE ACCELERATION</span>
                  <h3 className="text-2xl font-medium text-ink">Run from Source</h3>
                </div>
                <span className="mono text-xs px-2.5 py-1 bg-[#a5ba84]/20 text-[#3f571b] dark:text-[#a5ba84] rounded border border-[#a5ba84]/40 font-semibold">
                  RECOMMENDED
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Run the full-stack Next.js studio and FastAPI neural engine directly on your
                workstation with native Apple Silicon Metal (MPS) or NVIDIA CUDA acceleration.
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
                  <span>Apple Silicon MPS (M1–M4), NVIDIA CUDA, or automatic CPU fallback</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Runs locally at <code>http://localhost:3000</code> with zero cloud APIs</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/Yash-Raw/KolRep"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-sm py-3.5 font-semibold flex items-center justify-center gap-2"
              >
                <GithubIcon size={18} />
                View Setup on GitHub
              </a>
            </div>
          </div>

          {/* Card B: Docker Compose */}
          <div className="panel p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div>
                  <span className="eyebrow block mb-1">CONTAINERIZED STACK</span>
                  <h3 className="text-2xl font-medium text-ink">Docker Compose</h3>
                </div>
                <span className="mono text-xs px-2.5 py-1 bg-soft text-muted rounded border border-line font-medium">
                  OPEN SOURCE
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Spin up PostgreSQL, Redis, the FastAPI backend, and the Next.js studio in one
                command with automated migrations and persistent local model caching.
              </p>

              {/* Docker Command Box */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="mono text-[10px] text-muted flex items-center gap-1.5">
                    <Box size={12} /> DOCKER COMPOSE COMMANDS
                  </span>
                  <button
                    onClick={handleCopyDocker}
                    className="mono text-[10px] text-[#c63e26] hover:underline flex items-center gap-1"
                  >
                    {copiedDocker ? <Check size={11} /> : <Copy size={11} />}
                    {copiedDocker ? "COPIED" : "COPY"}
                  </button>
                </div>
                <pre className="mono text-[11.5px] p-4 bg-canvas border border-line rounded text-ink overflow-x-auto leading-relaxed select-all">
                  {dockerCmd}
                </pre>
              </div>

              <div className="space-y-2 mb-8 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Docker Desktop or Docker Engine with Compose v2</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Pre-wired PostgreSQL, Redis, Alembic migrations &amp; persistent model cache</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-[#c63e26]" />
                  <span>Loopback-only bindings (<code>127.0.0.1</code>) for private local execution</span>
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
