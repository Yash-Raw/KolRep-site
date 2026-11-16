"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SlidersHorizontal,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Volume2,
  CheckCircle2,
  FileCode2,
  Activity,
  Terminal,
} from "lucide-react";

interface VoicePreset {
  id: string;
  name: string;
  role: string;
  accent: string;
  sampleScript: string;
  samplePitch: number;
}

const VOICES: VoicePreset[] = [
  {
    id: "v1",
    name: "David S.",
    role: "Documentary Baritone",
    accent: "Neutral American / Low Resonant",
    sampleScript:
      "Every sound carries an imprint of its origin. Here, the machine does not invent your character—it simply preserves what was already recorded.",
    samplePitch: 130,
  },
  {
    id: "v2",
    name: "Elena R.",
    role: "Editorial Warmth",
    accent: "Mid-Register / Natural Cadence",
    sampleScript:
      "Running locally means the microphone stays between you and your physical hardware. No telemetry. No remote servers listening in.",
    samplePitch: 210,
  },
  {
    id: "v3",
    name: "Marcus K.",
    role: "Broadcast Deep",
    accent: "Commercial & News Studio / Clear Transients",
    sampleScript:
      "Thirty-six diffusion steps through the local MPS neural engine. Fast, precise, and verified with cryptographic authenticity.",
    samplePitch: 105,
  },
];

export function StudioConsoleDemo() {
  const [selectedVoice, setSelectedVoice] = useState<VoicePreset>(VOICES[0]);
  const [stability, setStability] = useState<number>(0.85);
  const [pace, setPace] = useState<number>(1.0);
  const [exaggeration, setExaggeration] = useState<number>(0.15);
  const [steps, setSteps] = useState<number>(36);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"transport" | "provenance" | "specs">("transport");
  const [vuLevelLeft, setVuLevelLeft] = useState<number>(14);
  const [vuLevelRight, setVuLevelRight] = useState<number>(12);
  const [playbackTime, setPlaybackTime] = useState<number>(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulated Web Audio playback for authentic tactile acoustic feedback
  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const startPlayback = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Formant synthesis tone tailored to selected voice
      osc.type = "sine";
      const baseFreq = selectedVoice.samplePitch * pace;
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);

      // Add a subtle broadcast warmth vibrato / saturation
      const vibrato = ctx.createOscillator();
      vibrato.frequency.value = 5.2; // 5.2Hz human micro-tremor
      const vibratoGain = ctx.createGain();
      vibratoGain.gain.value = 3.5 * (1 - stability + 0.1);
      vibrato.connect(osc.frequency);
      vibrato.start();

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscRef.current = osc;
      gainRef.current = gain;
      setIsPlaying(true);
      setPlaybackTime(0);

      // Meter animation loop
      const interval = setInterval(() => {
        setPlaybackTime((prev) => {
          if (prev >= 6.4) {
            stopPlayback();
            return 0;
          }
          return +(prev + 0.1).toFixed(1);
        });

        // Dynamic VU levels oscillating naturally
        const baseMeter = 55 + Math.random() * 35 * (1 - stability * 0.3);
        setVuLevelLeft(Math.min(98, Math.round(baseMeter + (Math.random() * 8 - 4))));
        setVuLevelRight(Math.min(96, Math.round(baseMeter + (Math.random() * 8 - 4))));
      }, 100);

      timerRef.current = interval;
    } catch {
      // Fallback without Web Audio if restricted
      setIsPlaying(true);
      const interval = setInterval(() => {
        setPlaybackTime((prev) => {
          if (prev >= 6.4) {
            stopPlayback();
            return 0;
          }
          return +(prev + 0.1).toFixed(1);
        });
        setVuLevelLeft(Math.round(50 + Math.random() * 35));
        setVuLevelRight(Math.round(48 + Math.random() * 35));
      }, 100);
      timerRef.current = interval;
    }
  };

  const stopPlayback = () => {
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch {
        // ignore
      }
      oscRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setVuLevelLeft(12);
    setVuLevelRight(10);
  };

  useEffect(() => {
    return () => {
      stopPlayback();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <section className="broadcast-console-section" aria-label="Interactive Studio Console">
      <div className="broadcast-kicker" style={{ marginBottom: "28px" }}>
        <p className="eyebrow">FIG. 02 / HARDWARE MIXING CONSOLE</p>
        <p className="eyebrow">INTERACTIVE ON-DEVICE SYNTHESIZER DEMO</p>
      </div>

      <div className="console-chassis">
        {/* Topbar: Equipment metadata & Tab switcher */}
        <div className="console-topbar">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block animate-pulse"
              style={{ background: isPlaying ? "var(--accent)" : "#5a5e55" }}
            />
            <span className="mono text-xs uppercase tracking-wider text-[#cbd0c2]">
              VOICEREP DSP CHASSIS // MODEL: F5-TTS MPS
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("transport")}
              className={`mono text-[11px] px-3 py-1.5 rounded transition ${
                activeTab === "transport"
                  ? "bg-[#353931] text-white border border-[#4d5347]"
                  : "text-[#8e9485] hover:text-[#d3d8cb]"
              }`}
            >
              01 / AUDIO TRANSPORT
            </button>
            <button
              onClick={() => setActiveTab("provenance")}
              className={`mono text-[11px] px-3 py-1.5 rounded transition ${
                activeTab === "provenance"
                  ? "bg-[#353931] text-white border border-[#4d5347]"
                  : "text-[#8e9485] hover:text-[#d3d8cb]"
              }`}
            >
              02 / C2PA MANIFEST
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`mono text-[11px] px-3 py-1.5 rounded transition ${
                activeTab === "specs"
                  ? "bg-[#353931] text-white border border-[#4d5347]"
                  : "text-[#8e9485] hover:text-[#d3d8cb]"
              }`}
            >
              03 / HARDWARE TELEMETRY
            </button>
          </div>
        </div>

        {/* Console Body */}
        {activeTab === "transport" && (
          <div className="console-body">
            {/* Main Area: Script & Transport & VU Meter */}
            <div className="console-main">
              {/* Voice Selector strip */}
              <div className="mb-6 pb-5 border-b border-[#32362f] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="mono text-[10px] uppercase tracking-wider text-[#8e9485] block mb-1">
                    ACTIVE VOICE RECORDING
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {VOICES.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          stopPlayback();
                          setSelectedVoice(v);
                        }}
                        className={`text-xs px-3 py-2 rounded transition flex items-center gap-2 ${
                          selectedVoice.id === v.id
                            ? "bg-[#c63e26] text-white font-medium"
                            : "bg-[#252822] text-[#c7ccbe] hover:bg-[#2e322b] border border-[#3b4035]"
                        }`}
                      >
                        <span>{v.name}</span>
                        <span className="mono text-[9px] opacity-75">({v.role})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <span className="mono text-[9px] text-[#8e9485] block uppercase">PROFILE ACOUSTIC SIGNATURE</span>
                  <span className="mono text-xs text-[#d75134]">{selectedVoice.accent}</span>
                </div>
              </div>

              {/* Script Readout Box */}
              <div className="bg-[#171916] border border-[#2d3129] rounded p-5 mb-6 relative">
                <span className="mono text-[9px] uppercase tracking-wider text-[#6c7264] absolute top-3 right-4">
                  TAKE #04 // DIFFUSION SYNTHESIS
                </span>
                <p className="text-base text-[#e8e4da] leading-relaxed font-sans font-normal italic pr-24">
                  "{selectedVoice.sampleScript}"
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] mono text-[#83897b] border-t border-[#232720] pt-3">
                  <span>INPUT: 154 CHARACTERS</span>
                  <span>EST. RUNTIME: 6.4s</span>
                  <span className="text-[#a5ba84]">PROVENANCE EMBEDDED</span>
                </div>
              </div>

              {/* Hardware Transport & VU Needle Meters */}
              <div className="mt-auto pt-4 border-t border-[#32362f]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Left: Playback controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 rounded bg-[#c63e26] hover:bg-[#a82d18] text-white flex items-center justify-center transition shadow-lg shrink-0"
                      aria-label={isPlaying ? "Pause simulated audition" : "Play simulated audition"}
                    >
                      {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
                    </button>
                    <div>
                      <div className="mono text-sm font-semibold text-[#f2efe7]">
                        {isPlaying ? "AUDITIONING LOCAL TAKE" : "AUDITION SYNTHESIS"}
                      </div>
                      <div className="mono text-xs text-[#8e9485]">
                        00:0{Math.floor(playbackTime)}:
                        {Math.floor((playbackTime % 1) * 10)} / 00:06:40
                      </div>
                    </div>
                  </div>

                  {/* Right: Dual Channel VU Bar Meters */}
                  <div className="bg-[#171916] border border-[#2c3028] p-3 rounded">
                    <div className="flex justify-between items-center mono text-[9px] text-[#7d8474] mb-2 uppercase">
                      <span>CH 1 (L) / CH 2 (R)</span>
                      <span>{isPlaying ? "-6 dB PEAK" : "-INF dB"}</span>
                    </div>

                    {/* Meter L */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="mono text-[8px] text-[#8e9485] w-3">L</span>
                      <div className="flex-1 h-2 bg-[#252822] rounded-sm overflow-hidden flex">
                        <div
                          className="h-full transition-all duration-75"
                          style={{
                            width: `${isPlaying ? vuLevelLeft : 0}%`,
                            background:
                              vuLevelLeft > 85
                                ? "linear-gradient(90deg, #a5ba84 70%, #d87d3a 85%, #c63e26 100%)"
                                : "#a5ba84",
                          }}
                        />
                      </div>
                    </div>

                    {/* Meter R */}
                    <div className="flex items-center gap-2">
                      <span className="mono text-[8px] text-[#8e9485] w-3">R</span>
                      <div className="flex-1 h-2 bg-[#252822] rounded-sm overflow-hidden flex">
                        <div
                          className="h-full transition-all duration-75"
                          style={{
                            width: `${isPlaying ? vuLevelRight : 0}%`,
                            background:
                              vuLevelRight > 85
                                ? "linear-gradient(90deg, #a5ba84 70%, #d87d3a 85%, #c63e26 100%)"
                                : "#a5ba84",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar: Tactile Hardware Faders */}
            <div className="console-sidebar">
              <div className="flex items-center justify-between border-b border-[#32362f] pb-3">
                <span className="mono text-[10px] uppercase tracking-wider text-[#a5aa9d] flex items-center gap-2">
                  <SlidersHorizontal size={14} className="text-[#c63e26]" />
                  PHYSICAL FADERS
                </span>
                <span className="mono text-[9px] text-[#6b7164]">PRECISION DSP</span>
              </div>

              {/* Fader 1: Stability */}
              <div className="console-fader">
                <div className="fader-header">
                  <label htmlFor="fader-stability" className="text-xs text-[#cfd4c7]">
                    Voice Stability
                  </label>
                  <span className="fader-value">{stability.toFixed(2)}</span>
                </div>
                <input
                  id="fader-stability"
                  type="range"
                  min="0.00"
                  max="1.00"
                  step="0.05"
                  value={stability}
                  onChange={(e) => setStability(parseFloat(e.target.value))}
                  className="console-range"
                />
                <div className="flex justify-between mono text-[9px] text-[#6b7164] mt-1">
                  <span>0.00 (EXPRESSIVE)</span>
                  <span>1.00 (LOCKED)</span>
                </div>
              </div>

              {/* Fader 2: Pace */}
              <div className="console-fader">
                <div className="fader-header">
                  <label htmlFor="fader-pace" className="text-xs text-[#cfd4c7]">
                    Speech Pace
                  </label>
                  <span className="fader-value">{pace.toFixed(2)}x</span>
                </div>
                <input
                  id="fader-pace"
                  type="range"
                  min="0.50"
                  max="2.00"
                  step="0.05"
                  value={pace}
                  onChange={(e) => setPace(parseFloat(e.target.value))}
                  className="console-range"
                />
                <div className="flex justify-between mono text-[9px] text-[#6b7164] mt-1">
                  <span>0.50x (DELIBERATE)</span>
                  <span>2.00x (BRISK)</span>
                </div>
              </div>

              {/* Fader 3: Style Exaggeration */}
              <div className="console-fader">
                <div className="fader-header">
                  <label htmlFor="fader-exag" className="text-xs text-[#cfd4c7]">
                    Style Exaggeration
                  </label>
                  <span className="fader-value">{exaggeration.toFixed(2)}</span>
                </div>
                <input
                  id="fader-exag"
                  type="range"
                  min="0.00"
                  max="1.00"
                  step="0.05"
                  value={exaggeration}
                  onChange={(e) => setExaggeration(parseFloat(e.target.value))}
                  className="console-range"
                />
                <div className="flex justify-between mono text-[9px] text-[#6b7164] mt-1">
                  <span>0.00 (FLAT)</span>
                  <span>1.00 (DRAMATIC)</span>
                </div>
              </div>

              {/* Fader 4: Diffusion Steps */}
              <div className="console-fader">
                <div className="fader-header">
                  <label htmlFor="fader-steps" className="text-xs text-[#cfd4c7]">
                    Diffusion Steps
                  </label>
                  <span className="fader-value">{steps} STEPS</span>
                </div>
                <input
                  id="fader-steps"
                  type="range"
                  min="16"
                  max="64"
                  step="4"
                  value={steps}
                  onChange={(e) => setSteps(parseInt(e.target.value))}
                  className="console-range"
                />
                <div className="flex justify-between mono text-[9px] text-[#6b7164] mt-1">
                  <span>16 (RAPID)</span>
                  <span>64 (MASTER)</span>
                </div>
              </div>

              {/* Bottom hardware note */}
              <div className="mt-auto pt-4 border-t border-[#2d3129] mono text-[10px] text-[#8e9485] leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#a5ba84] mb-1">
                  <CheckCircle2 size={12} />
                  <span>HARDWARE ACCELERATION READY</span>
                </div>
                <span>Engine: Metal Performance Shaders (Apple Silicon MPS / Float16). Zero remote API calls.</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: C2PA Cryptographic Provenance Manifest */}
        {activeTab === "provenance" && (
          <div className="p-8 bg-[#181a17]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#30342c]">
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#c63e26]" />
                <div>
                  <h3 className="text-base font-medium text-[#f2efe7]">C2PA Cryptographic Provenance Manifest</h3>
                  <p className="mono text-[11px] text-[#8a9181]">
                    STANDARD: C2PA v1.4 / JUMBF ATTESTATION // VERIFIED ON-DEVICE
                  </p>
                </div>
              </div>
              <span className="mono text-xs px-3 py-1 bg-[#252822] text-[#a5ba84] border border-[#393e33] rounded">
                VALID SIGNATURE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#1e201c] p-4 rounded border border-[#30342c]">
                <span className="mono text-[10px] uppercase text-[#7a8172] block mb-2">
                  ACOUSTIC WATERMARK (LAYER 1)
                </span>
                <p className="text-xs text-[#cfd4c8] leading-relaxed mb-3">
                  Inaudible spread-spectrum psychoacoustic watermark embedded across the 24.1 kHz spectrum. Resilient to
                  MP3/AAC transcoding, sample rate conversion, and linear gain modifications.
                </p>
                <div className="mono text-[10px] text-[#d75134] bg-[#141613] p-2.5 rounded border border-[#272b23]">
                  PAYLOAD_SHA: 8f9b42c19a008e73d4b6706e2a14b9c1
                </div>
              </div>

              <div className="bg-[#1e201c] p-4 rounded border border-[#30342c]">
                <span className="mono text-[10px] uppercase text-[#7a8172] block mb-2">
                  CRYPTOGRAPHIC MANIFEST (LAYER 2)
                </span>
                <p className="text-xs text-[#cfd4c8] leading-relaxed mb-3">
                  W3C / C2PA signed assertion linking the authorized voice consent token, local engine build hash, and
                  hardware fingerprint via Ed25519 cryptography.
                </p>
                <div className="mono text-[10px] text-[#a5ba84] bg-[#141613] p-2.5 rounded border border-[#272b23]">
                  SIG_ALG: Ed25519-SHA512 // SECURE_ENCLAVE_ROOT
                </div>
              </div>
            </div>

            {/* Raw JSON-LD preview */}
            <div className="bg-[#121411] border border-[#272a23] rounded p-4">
              <div className="flex justify-between items-center mb-2 mono text-[10px] text-[#697060]">
                <span>MANIFEST_JSON_LD</span>
                <span>c2pa.voice.synthesis</span>
              </div>
              <pre className="mono text-[11px] text-[#b4baa8] overflow-x-auto leading-relaxed">
{`{
  "@context": "https://c2pa.org/standards/v1.4/manifest.jsonld",
  "label": "urn:c2pa:voicerep:f5tts:mps-sha256-4b89a22f",
  "claim_generator": "VoiceRep Studio Local Engine v1.0 (Apple Silicon MPS)",
  "assertions": [
    {
      "label": "c2pa.actions",
      "data": { "actions": [{ "action": "c2pa.synthesized", "parameters": { "model": "F5-TTS", "steps": 36 } }] }
    },
    {
      "label": "voicerep.consent",
      "data": { "voice_id": "${selectedVoice.id}", "authorized_by": "${selectedVoice.name}", "consent_verified": true }
    },
    {
      "label": "voicerep.privacy",
      "data": { "network_transfers": 0, "storage_mode": "local_offline_sqlite" }
    }
  ]
}`}
              </pre>
            </div>
          </div>
        )}

        {/* Tab 3: Hardware Architecture Telemetry */}
        {activeTab === "specs" && (
          <div className="p-8 bg-[#181a17]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#30342c]">
              <div className="flex items-center gap-3">
                <Cpu size={24} className="text-[#c63e26]" />
                <div>
                  <h3 className="text-base font-medium text-[#f2efe7]">Local Neural Synthesis Engine</h3>
                  <p className="mono text-[11px] text-[#8a9181]">
                    HARDWARE SPECIFICATION & ZERO-CLOUD RUNTIME
                  </p>
                </div>
              </div>
              <span className="mono text-xs px-3 py-1 bg-[#252822] text-[#c63e26] border border-[#393e33] rounded">
                100% AIR-GAPPED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1e201c] p-5 rounded border border-[#30342c]">
                <span className="mono text-[10px] text-[#7a8172] uppercase block mb-1">01 / NEURAL ARCHITECTURE</span>
                <h4 className="text-sm font-medium text-[#f2efe7] mb-2">F5-TTS Flow Matching</h4>
                <p className="text-xs text-[#a3a99a] leading-relaxed">
                  Non-autoregressive flow matching with ConvNeXt backbone for rapid, natural speech modeling without
                  autoregressive latency bottlenecks.
                </p>
              </div>

              <div className="bg-[#1e201c] p-5 rounded border border-[#30342c]">
                <span className="mono text-[10px] text-[#7a8172] uppercase block mb-1">02 / HARDWARE BACKEND</span>
                <h4 className="text-sm font-medium text-[#f2efe7] mb-2">Apple Silicon MPS / CUDA</h4>
                <p className="text-xs text-[#a3a99a] leading-relaxed">
                  Leverages Unified Memory Architecture (UMA) on M1/M2/M3/M4 Apple Silicon. No VRAM PCIe transfer
                  overhead; instant weights loading.
                </p>
              </div>

              <div className="bg-[#1e201c] p-5 rounded border border-[#30342c]">
                <span className="mono text-[10px] text-[#7a8172] uppercase block mb-1">03 / AUDIO MASTERING</span>
                <h4 className="text-sm font-medium text-[#f2efe7] mb-2">24kHz / 48kHz 24-bit PCM</h4>
                <p className="text-xs text-[#a3a99a] leading-relaxed">
                  Uncompressed WAV output with studio dynamic range, free from destructive perceptual cloud compression
                  artifacts.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
