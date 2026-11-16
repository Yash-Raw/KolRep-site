import React from "react";
import { Check, X, ShieldAlert, ShieldCheck } from "lucide-react";

export function ArchitectureComparison() {
  const comparisons = [
    {
      feature: "Voice Biometric Privacy",
      voicerep: "100% on-device. Audio files and neural embeddings never leave your local SSD.",
      cloud: "Uploaded to third-party data centers; stored and potentially repurposed for model retraining.",
      highlight: true,
    },
    {
      feature: "Operating Cost & Billing",
      voicerep: "Zero subscription. Infinite generations without character limits or recurring tiers.",
      cloud: "Expensive monthly subscriptions ($20 – $100+/mo) with harsh character caps and overage fees.",
      highlight: true,
    },
    {
      feature: "Offline & Air-Gap Capability",
      voicerep: "Fully functional with zero internet connection. Operates in secure air-gapped environments.",
      cloud: "Fails immediately if offline; dependent on external cloud API uptime and network stability.",
      highlight: false,
    },
    {
      feature: "Provenance & Authenticity",
      voicerep: "Dual-layer C2PA cryptographic signatures + psychoacoustic watermarks embedded into every take.",
      cloud: "Unsigned MP3/WAV files with zero verifiable ownership or cryptographic authenticity proofs.",
      highlight: true,
    },
    {
      feature: "Inference Engine & Latency",
      voicerep: "F5-TTS neural flow matching with direct Apple Silicon MPS / CUDA GPU acceleration.",
      cloud: "Remote queue latency, cold starts, network roundtrips, and throttled API concurrency.",
      highlight: false,
    },
    {
      feature: "Audio Master Quality",
      voicerep: "24-bit uncompressed studio PCM WAV (24kHz / 48kHz) preserving full acoustic dynamics.",
      cloud: "Perceptually compressed lossy audio streams (128kbps MP3 / AAC) subject to bit-rate choking.",
      highlight: false,
    },
  ];

  return (
    <section className="broadcast-comparison-section" aria-label="System Comparison">
      <div className="broadcast-kicker" style={{ marginBottom: "28px" }}>
        <p className="eyebrow">ARCHITECTURAL CONTRAST / 01 VS 02</p>
        <p className="eyebrow">LOCAL SOVEREIGNTY VS CLOUD CENTRALIZATION</p>
      </div>

      <div className="overflow-x-auto">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">EVALUATION METRIC</th>
              <th scope="col" className="comparison-highlight">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#c63e26]" />
                  VOICEREP (LOCAL BROADCAST)
                </span>
              </th>
              <th scope="col">
                <span className="flex items-center gap-2 text-muted">
                  <ShieldAlert size={16} />
                  CONVENTIONAL CLOUD SAAS
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, idx) => (
              <tr key={idx}>
                <td>{item.feature}</td>
                <td className="comparison-highlight">
                  <div className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#c63e26] shrink-0 mt-0.5" />
                    <span>{item.voicerep}</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-start gap-2.5 text-muted">
                    <X size={16} className="text-[#888c82] shrink-0 mt-0.5" />
                    <span>{item.cloud}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
