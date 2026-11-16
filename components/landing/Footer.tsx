import Link from "next/link";
import { AudioLines } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
            <Link href="/dashboard">Workspace</Link>
            <Link href="/studio">Voice studio</Link>
            <Link href="/history">Recording archive</Link>
            <Link href="/verify">Audio verification</Link>
          </div>
        </div>

        <div className="broadcast-footer-bottom">
          <span>YOUR DEVICE. YOUR VOICE.</span>
          <span>© {currentYear} VOICEREP — LOCAL VOICE REPLICATION</span>
        </div>
      </div>
    </footer>
  );
}
