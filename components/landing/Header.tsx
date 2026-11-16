import Link from "next/link";
import { ArrowUpRight, AudioLines } from "lucide-react";

export function Header() {
  return (
    <header className="landing-header">
      <Link href="/" className="brand">
        <span className="brand-symbol">
          <AudioLines size={20} strokeWidth={2.2} />
        </span>
        VoiceRep
      </Link>

      <div className="landing-header-actions">
        <Link href="/voices">Voice library</Link>
        <Link href="/verify">Verify audio</Link>
        <Link href="/studio" className="btn btn-primary">
          Open studio <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}
