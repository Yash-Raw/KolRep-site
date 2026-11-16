"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  AudioLines,
  ChevronRight,
  History,
  Menu,
  Mic2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Activity },
  { href: "/studio", label: "Voice studio", icon: Sparkles },
  { href: "/voices", label: "Voice library", icon: Mic2 },
  { href: "/history", label: "Recording history", icon: History },
  { href: "/verify", label: "Verify audio", icon: ShieldCheck },
  { href: "/settings", label: "Settings", icon: SlidersHorizontal },
];

function Brand({ href }: { href: string }) {
  return (
    <Link href={href} className="brand">
      <span className="brand-symbol">
        <AudioLines size={22} strokeWidth={2.2} />
      </span>
      VoiceRep
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    navRef.current?.querySelector<HTMLElement>("button, a")?.focus();

    const keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        navRef.current?.querySelectorAll<HTMLElement>("a, button") || []
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", keydown);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("resize", resize);
      previous?.focus();
    };
  }, [open]);

  // Section 3.A Header for the Landing Page
  if (pathname === "/") {
    return (
      <header className="landing-header">
        <Brand href="/" />
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

  const current = navItems.find((item) => pathname.startsWith(item.href));

  return (
    <>
      {open && (
        <button
          className="nav-backdrop"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        ref={navRef}
        id="application-navigation"
        className="application-nav"
        data-open={open}
        aria-label="Workspace navigation"
        role={open ? "dialog" : undefined}
        aria-modal={open || undefined}
      >
        <button
          className="nav-close"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        >
          <X size={20} />
        </button>
        <Brand href="/dashboard" />
        <nav aria-label="Main navigation">
          <div className="nav-group">
            <p className="nav-group-label">WORKSPACE</p>
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              >
                <item.icon size={17} strokeWidth={1.5} />
                {item.label}
              </Link>
            ))}
          </div>
          <div className="nav-group">
            <p className="nav-group-label">UTILITIES</p>
            {navItems.slice(4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              >
                <item.icon size={17} strokeWidth={1.5} />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="nav-footer">
          <div className="nav-local">
            <i />
            Local workspace
          </div>
          <p>
            Your device. Your voice.
            <br />
            Made for independent creation.
          </p>
          <p className="mono">VOICEREP / V1.0</p>
        </div>
      </aside>

      <header className="app-topbar">
        <div className="app-breadcrumb">
          <button
            ref={triggerRef}
            className="mobile-menu"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="application-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
          <span>Workspace</span>
          <ChevronRight size={12} />
          <span>{current?.label || "Opening workspace"}</span>
        </div>
        <span className="topbar-note mono">LOCAL VOICE PRODUCTION</span>
      </header>
    </>
  );
}
