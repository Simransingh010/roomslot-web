"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Explore Spaces", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Become a Host", href: "/become-a-host" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md transition-transform duration-200 group-hover:scale-105">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Room<span className="text-muted-foreground font-light">Slot</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground lg:text-sm"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="sm" className="hidden sm:inline-flex shadow-md shadow-primary/20 gap-1.5" asChild>
            <Link href="/explore">Find a Space</Link>
          </Button>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground cursor-pointer">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2 text-lg font-bold">
                    <Sparkles className="h-5 w-5 text-primary" />
                    RoomSlot
                  </SheetTitle>
                  <SheetDescription className="font-light text-sm">
                    Find and book activity spaces near you.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-base font-medium text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <hr className="border-border mt-auto" />
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full">Log in</Button>
                  <Button className="w-full shadow-md" asChild>
                    <Link href="/explore">Find a Space</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
