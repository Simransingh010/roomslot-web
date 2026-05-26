"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Terminal, MessageSquare, Globe, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const footerGroups = [
    {
      title: "Platform",
      links: [
        { label: "Book a Slot", href: "#" },
        { label: "Pricing Options", href: "#" },
        { label: "Corporate Spaces", href: "#" },
        { label: "Partner Program", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Safety Rules", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "System Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Contact Sales", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t bg-card text-card-foreground mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/demo" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span>
                Room<span className="text-muted-foreground font-light">Slot</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-6 max-w-xs">
              Secure, lightning-fast room bookings and automated time slot verification systems built for modern professionals.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-accent text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-200"
                aria-label="Twitter"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-accent text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-200"
                aria-label="GitHub"
              >
                <Terminal className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-accent text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Groups */}
          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-foreground">
              Subscribe to Updates
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-6">
              Get real-time notification alerts, features releases, and promotion updates directly in your inbox.
            </p>
            {isSubscribed ? (
              <div className="p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold animate-fade-in flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-1">
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-accent"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="default" size="sm" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        <hr className="my-8 border-muted" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} RoomSlot Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            Crafted with <Heart className="h-3 w-3 text-red-500 fill-current" /> by Antigravity IDE
          </p>
        </div>
      </div>
    </footer>
  );
}
