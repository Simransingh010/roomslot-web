"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, MessageSquare, Terminal, Globe, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Find Spaces", href: "/explore" },
      { label: "List Your Space", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Blog", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 md:grid-cols-3">
          {/* Brand Column (spans 2 cols) */}
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Room<span className="text-muted-foreground font-light">Slot</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-6 max-w-xs">
              Built for India&apos;s next generation of independent educators and creators.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: MessageSquare, label: "Twitter" },
                { icon: Terminal, label: "GitHub" },
                { icon: Globe, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
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
        </div>

        <hr className="my-10 border-border/50" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} RoomSlot Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
