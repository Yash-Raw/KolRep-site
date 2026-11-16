"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Download,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";
import { PageHeader } from "@/components/ui/StudioUI";

export default function StudioPage() {
  const [script, setScript] = useState(
    "In the quiet of early dawn, the transmission tower hums against the cold morning wind. Every frequency tells a story of who spoke it into the wire."
  );
  const [selectedVoice, setSelectedVoice] = useState("v1");
  const [stability, setStability] = useState(0.85);
  const [speed, setSpeed] = useState(1.0);
  const [exaggeration, setExaggeration] = useState(0.15);
  const [model, setModel] = useState("f5-tts-mps");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 1200);
  };

  return (
    <div className="page studio-page">
      <PageHeader
        number="02"
        label="Voice Studio"
        title="Where words become voice."
        description="Write or paste your script, configure delivery parameters with analog faders, and synthesize studio-quality takes locally."
      />

      <div className="studio-layout">
        {/* Main Canvas */}
        <div className="studio-canvas">
          <div className="voice-selector">
            <div className="flex items-center gap-3">
              <span className="eyebrow">VOICE SELECTION</span>
              <select
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="font-medium bg-transparent border-0 focus:outline-none cursor-pointer"
              >
                <option value="v1">David S. — Documentary Baritone (Authorized)</option>
                <option value="v2">Elena R. — Editorial Warmth (Authorized)</option>
                <option value="v3">Marcus K. — Deep Broadcast Studio (Authorized)</option>
              </select>
            </div>
            <Link href="/voices" className="eyebrow hover:underline flex items-center gap-1">
              LIBRARY <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="script-label">
            <span className="eyebrow">SCRIPT CANVAS</span>
            <span className="mono text-[11px] text-muted">{script.length} characters</span>
          </div>

          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="script-editor"
            placeholder="Type or paste your narrative script here..."
          />

          <div className="studio-transport">
            <div className="flex items-center gap-2 text-xs text-muted mono">
              <span className="w-2 h-2 rounded-full bg-[#a5ba84] inline-block" />
              <span>ON-DEVICE F5-TTS ENGINE READY</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setScript("")}
                className="btn btn-secondary text-xs py-2 px-3 min-h-[38px]"
              >
                Clear
              </button>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !script.trim()}
                className="btn btn-primary text-xs py-2 px-4 min-h-[38px] flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <span className="animate-spin inline-block">⟳</span>
                    <span>Synthesizing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={15} />
                    <span>Synthesize take</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Take Player */}
          {generated && (
            <div className="studio-output p-5 border-t border-line bg-paper">
              <div className="flex items-center justify-between mb-3">
                <span className="eyebrow">MASTER TAKE #01 // 24-BIT PCM WAV</span>
                <span className="mono text-[10px] text-[#a5ba84] flex items-center gap-1">
                  <ShieldCheck size={13} /> C2PA PROVENANCE SEALED
                </span>
              </div>

              <div className="audio-transport">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="audio-play"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                </button>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-xs mb-1.5 font-medium text-[#f5f1e7]">
                    <span>Take 01 — {selectedVoice === "v1" ? "David S." : selectedVoice === "v2" ? "Elena R." : "Marcus K."}</span>
                    <span className="mono text-[10px] text-[#bdc0b2]">00:08 / 00:08</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="45"
                    className="console-range"
                  />
                  <div className="audio-time">
                    <span>24.0 kHz · Mono</span>
                    <span>Watermark ID: #VR-8492</span>
                  </div>
                </div>
                <button className="icon-button border-[#414438] text-[#f2efe7] bg-[#292c25] hover:bg-[#34382f]">
                  <Download size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Inspector Sidebar */}
        <aside className="inspector">
          <div className="inspector-heading">
            <h2>Delivery Inspector</h2>
            <span className="eyebrow">TELEMETRY</span>
          </div>

          {/* Parameter: Stability */}
          <div className="parameter">
            <div className="parameter-top">
              <label htmlFor="param-stability">Voice Stability</label>
              <span className="parameter-value">{stability.toFixed(2)}</span>
            </div>
            <input
              id="param-stability"
              type="range"
              min="0.00"
              max="1.00"
              step="0.05"
              value={stability}
              onChange={(e) => setStability(parseFloat(e.target.value))}
              className="console-range"
            />
            <div className="parameter-endpoints">
              <span>0.00 (Expressive)</span>
              <span>1.00 (Consistent)</span>
            </div>
          </div>

          {/* Parameter: Speed / Pace */}
          <div className="parameter">
            <div className="parameter-top">
              <label htmlFor="param-speed">Pace Multiplier</label>
              <span className="parameter-value">{speed.toFixed(2)}x</span>
            </div>
            <input
              id="param-speed"
              type="range"
              min="0.50"
              max="2.00"
              step="0.05"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="console-range"
            />
            <div className="parameter-endpoints">
              <span>0.50x (Slow)</span>
              <span>2.00x (Rapid)</span>
            </div>
          </div>

          {/* Parameter: Exaggeration */}
          <div className="parameter">
            <div className="parameter-top">
              <label htmlFor="param-exag">Style Exaggeration</label>
              <span className="parameter-value">{exaggeration.toFixed(2)}</span>
            </div>
            <input
              id="param-exag"
              type="range"
              min="0.00"
              max="1.00"
              step="0.05"
              value={exaggeration}
              onChange={(e) => setExaggeration(parseFloat(e.target.value))}
              className="console-range"
            />
            <div className="parameter-endpoints">
              <span>0.00 (Natural)</span>
              <span>1.00 (Pronounced)</span>
            </div>
          </div>

          {/* Engine select */}
          <div className="parameter">
            <div className="parameter-top">
              <label htmlFor="param-model">Synthesis Engine</label>
              <span className="eyebrow">MPS</span>
            </div>
            <select
              id="param-model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="model-select"
            >
              <option value="f5-tts-mps">F5-TTS (Apple MPS, 36 Steps)</option>
              <option value="f5-tts-fast">F5-TTS Fast (Apple MPS, 16 Steps)</option>
              <option value="f5-tts-master">F5-TTS Master (Apple MPS, 64 Steps)</option>
            </select>
            <p className="mono text-[10px] text-muted mt-2">Zero network egress. Runs on local GPU.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
