"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Compass,
  LayoutDashboard,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/planner", label: "AI Planner", icon: Sparkles },
  { href: "/destinations", label: "Destinations", icon: MapPin },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <Link href="/" className="flex items-center gap-3 px-2" onClick={onNavigate}>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-cyan/40 to-aurora-violet/40 ring-1 ring-white/20">
          <Compass className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="font-display text-lg leading-tight text-gradient-premium">
            Nordic Explorer
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            AI · Private Travel
          </p>
        </div>
      </Link>

      <Separator className="my-6 bg-white/10" />

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-2xl border border-white/15 bg-white/[0.08] shadow-glow"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="glass-panel mt-auto p-4">
        <p className="text-xs text-muted-foreground">Concierge line</p>
        <p className="mt-1 font-display text-lg">+47 800 NORDIC</p>
        <p className="mt-2 text-[11px] text-muted-foreground">
          24/7 for Explorer Black members
        </p>
      </div>
    </>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "glass-panel-strong fixed left-0 top-0 z-40 flex h-full w-72 flex-col border-r border-white/10 p-6 transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
        <SidebarContent onNavigate={() => setMobileOpen(false)} />
      </aside>

      <aside className="hidden w-72 shrink-0 p-4 lg:block">
        <div className="glass-panel-strong sticky top-4 flex h-[calc(100vh-2rem)] flex-col rounded-3xl p-6">
          <SidebarContent />
        </div>
      </aside>
    </>
  );
}
