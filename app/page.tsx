import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SignalArt } from "@/components/ui/SignalArt";
import { Footer } from "@/components/landing/Footer";
import { StudioConsoleDemo } from "@/components/landing/StudioConsoleDemo";
import { ArchitectureComparison } from "@/components/landing/ArchitectureComparison";

export default function LandingPage() {
  return (
    <div className="landing">
      {/* 3.B Hero Section */}
      <section className="broadcast-hero" aria-label="Hero">
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
            Your voice has a character. Keep it. Create expressive narration from an authorized
            recording, in a studio that runs entirely on your own device.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/studio" className="btn btn-primary">
              Enter the workspace <ArrowUpRight size={17} />
            </Link>
            <Link href="/voices" className="btn btn-secondary">
              Explore your voices <ArrowRight size={16} />
            </Link>
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
            <span>100% LOCAL</span>
          </div>
        </div>
      </section>

      {/* 3.C The Production Process */}
      <section className="broadcast-process" aria-label="Production Process">
        <div className="broadcast-section-header">
          <div>
            <p className="eyebrow">
              A SIMPLE PRODUCTION PROCESS
              <br />
              01 — 03
            </p>
          </div>
          <h2>
            From a recording.
            <br />
            To something worth hearing.
          </h2>
        </div>

        <div className="broadcast-steps">
          {/* Step 01 */}
          <article className="broadcast-step">
            <p className="eyebrow">01 / THE SOURCE</p>
            <h3>Start with your voice.</h3>
            <p>
              Record or upload an authorized voice sample. VoiceRep builds an acoustic profile locally
              in seconds without sending your biometric data to any cloud.
            </p>
            <Link href="/voices" className="text-link">
              Build your voice library <ArrowUpRight size={16} />
            </Link>
          </article>

          {/* Step 02 */}
          <article className="broadcast-step">
            <p className="eyebrow">02 / THE SESSION</p>
            <h3>Give the script a life.</h3>
            <p>
              Bring your words into the studio canvas. Fine-tune stability, pace, and style
              exaggeration with tactile faders, then synthesize studio-grade takes on-device.
            </p>
            <Link href="/studio" className="text-link">
              Take it to the studio <ArrowUpRight size={16} />
            </Link>
          </article>

          {/* Step 03 */}
          <article className="broadcast-step">
            <p className="eyebrow">03 / THE RECORD</p>
            <h3>Keep the story clear.</h3>
            <p>
              Every take is embedded with an imperceptible acoustic watermark and signed with
              dual-layer C2PA cryptographic provenance to certify ethical authorization.
            </p>
            <Link href="/verify" className="text-link">
              Inspect an audio file <ArrowUpRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      {/* Interactive Studio Console Simulator */}
      <StudioConsoleDemo />

      {/* 3.D Core Pillars / Architecture Highlights Strip */}
      <section className="broadcast-metrics-section" aria-label="Core Pillars">
        <div className="broadcast-kicker" style={{ marginBottom: "28px" }}>
          <p className="eyebrow">CORE ARCHITECTURE / 01 — 04</p>
          <p className="eyebrow">PHYSICAL INSTRUMENT TELEMETRY</p>
        </div>

        <div className="metrics-strip">
          {/* Panel 01 */}
          <div className="metric">
            <span className="metric-tag">01 / LOCAL INFERENCE</span>
            <div className="flex items-center gap-2 mb-2">
              <Cpu size={18} className="text-[#c63e26]" />
              <h3 className="metric-title" style={{ margin: 0 }}>
                Zero Cloud Latency
              </h3>
            </div>
            <p className="metric-desc">
              Runs locally on PyTorch/F5-TTS with Apple Silicon (MPS) acceleration. Instant streaming
              synthesis with zero network roundtrips.
            </p>
            <div className="metric-telemetry">
              <i />
              <span>MPS FP16 ACCELERATED</span>
            </div>
          </div>

          {/* Panel 02 */}
          <div className="metric">
            <span className="metric-tag">02 / COMPLETE PRIVACY</span>
            <div className="flex items-center gap-2 mb-2">
              <Lock size={18} className="text-[#c63e26]" />
              <h3 className="metric-title" style={{ margin: 0 }}>
                100% Air-Gapped
              </h3>
            </div>
            <p className="metric-desc">
              Zero telemetries, no third-party APIs, and zero biometric cloud storage. Your voice model
              and raw recordings stay on your drive forever.
            </p>
            <div className="metric-telemetry">
              <i />
              <span>0 BYTES CLOUD INGRESS</span>
            </div>
          </div>

          {/* Panel 03 */}
          <div className="metric">
            <span className="metric-tag">03 / C2PA AUTHENTICITY</span>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} className="text-[#c63e26]" />
              <h3 className="metric-title" style={{ margin: 0 }}>
                Dual-Layer Provenance
              </h3>
            </div>
            <p className="metric-desc">
              Cryptographically signed metadata manifests paired with inaudible acoustic watermarking
              to verify authorized, tamper-proof voice provenance.
            </p>
            <div className="metric-telemetry">
              <i />
              <span>C2PA v1.4 SIGNED</span>
            </div>
          </div>

          {/* Panel 04 */}
          <div className="metric">
            <span className="metric-tag">04 / HIGH FIDELITY</span>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-[#c63e26]" />
              <h3 className="metric-title" style={{ margin: 0 }}>
                Studio Quality
              </h3>
            </div>
            <p className="metric-desc">
              36-step neural diffusion synthesizer delivering broadcast-grade cadence, micro-inflections,
              and rich harmonic presence.
            </p>
            <div className="metric-telemetry">
              <i />
              <span>24kHz STUDIO PCM WAV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Comparison Section */}
      <ArchitectureComparison />

      {/* 3.E Broadcast Footer */}
      <Footer />
    </div>
  );
}
