"use client";

import { PageHeader } from "@/components/ui/StudioUI";

export default function SettingsPage() {
  return (
    <div className="page settings-page">
      <PageHeader
        number="05"
        label="System Settings"
        title="Hardware & Engine Parameters."
        description="Local inference device selection, storage paths, and cryptographic signing keys."
      />

      <div className="settings-sections">
        <div className="settings-section">
          <h3 className="text-base font-medium mb-3">Inference Backend</h3>
          <p className="text-xs text-muted mb-4">
            Select the local hardware acceleration framework used by the F5-TTS diffusion engine.
          </p>
          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2">
              <input type="radio" name="backend" defaultChecked />
              <span>Apple Silicon MPS (Metal Performance Shaders) — Float16</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="backend" />
              <span>CPU (PyTorch Fallback) — Int8 Quantized</span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h3 className="text-base font-medium mb-3">Provenance Keys & C2PA</h3>
          <p className="text-xs text-muted mb-4">
            Manage your local Ed25519 hardware key used to sign speech synthesis manifests.
          </p>
          <div className="mono text-[11px] text-muted bg-canvas p-3 rounded border border-line">
            KEY_FINGERPRINT: ed25519:mps-secure-enclave:4b89a22f...
          </div>
        </div>
      </div>
    </div>
  );
}
