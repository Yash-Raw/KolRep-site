"use client";

import Link from "next/link";
import { ArrowRight, History, Mic2, Plus, ShieldCheck, Sparkles } from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/ui/StudioUI";
import { SignalArt } from "@/components/ui/SignalArt";

export default function DashboardPage() {
  return (
    <div className="page dashboard-page">
      <PageHeader
        number="00"
        label="Workspace"
        title="Good things start with a voice."
        description="Your voices, recordings, and creative tools. Ready when you are."
        actions={
          <Link href="/voices" className="btn btn-secondary">
            <Plus size={15} /> Clone a voice
          </Link>
        }
      />

      <section className="overview-hero">
        <div className="overview-hero-copy">
          <p className="eyebrow">THE VOICE STUDIO</p>
          <h2>
            Your next recording
            <br />
            starts right here.
          </h2>
          <Link href="/studio" className="btn btn-primary">
            Open voice studio <ArrowRight size={16} />
          </Link>
        </div>
        <SignalArt />
      </section>

      <div className="metrics-strip">
        <div className="metric">
          <p className="eyebrow">VOICE PROFILES</p>
          <span className="metric-value">3</span>
          <p className="metric-note">3 ready for the studio</p>
        </div>
        <div className="metric">
          <p className="eyebrow">RECORDINGS</p>
          <span className="metric-value">49</span>
          <p className="metric-note">Completed generations</p>
        </div>
        <div className="metric">
          <p className="eyebrow">CHARACTERS VOICED</p>
          <span className="metric-value">14,280</span>
          <p className="metric-note">Characters rendered to speech</p>
        </div>
        <div className="metric">
          <p className="eyebrow">AUTHENTICITY</p>
          <span className="metric-value">C2PA</span>
          <p className="metric-note">Dual-layer watermarked audio</p>
        </div>
      </div>

      <div className="overview-bottom">
        <section>
          <SectionTitle>Find your flow</SectionTitle>
          <Link href="/voices" className="workflow-row">
            <Mic2 size={20} strokeWidth={1.5} />
            <div>
              <strong>Voice library</strong>
              <p>Collect your original voices</p>
            </div>
            <ArrowRight size={16} />
          </Link>
          <Link href="/studio" className="workflow-row">
            <Sparkles size={20} strokeWidth={1.5} />
            <div>
              <strong>Voice studio</strong>
              <p>Turn your script into narration</p>
            </div>
            <ArrowRight size={16} />
          </Link>
          <Link href="/verify" className="workflow-row">
            <ShieldCheck size={20} strokeWidth={1.5} />
            <div>
              <strong>Verify audio</strong>
              <p>Inspect C2PA manifests & provenance</p>
            </div>
            <ArrowRight size={16} />
          </Link>
        </section>

        <section>
          <SectionTitle aside={<Link href="/history" className="eyebrow hover:underline">VIEW ALL ↗</Link>}>
            Recent recordings
          </SectionTitle>
          <div className="take-row">
            <span className="eyebrow">01</span>
            <div>
              <p>Synthesized 154 characters · Documentary Baritone</p>
              <time>Today, 02:14 AM</time>
            </div>
            <span className="text-xs text-muted capitalize">Completed</span>
          </div>
          <div className="take-row">
            <span className="eyebrow">02</span>
            <div>
              <p>Synthesized 420 characters · Editorial Warmth</p>
              <time>Yesterday, 11:32 PM</time>
            </div>
            <span className="text-xs text-muted capitalize">Completed</span>
          </div>
        </section>
      </div>
    </div>
  );
}
