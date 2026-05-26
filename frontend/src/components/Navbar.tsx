"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ShieldCheck, User, Settings, LogOut, Bell, Compass, Activity, Info, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Discover", href: "/demo", icon: Compass },
    { label: "Activity", href: "#", icon: Activity },
    { label: "About", href: "#", icon: Info },
    { label: "Support", href: "#", icon: PhoneCall },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Branding */}
        <div className="flex items-center gap-8">
          <Link href="/demo" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground transition-transform duration-200 hover:scale-102">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span>
              Room<span className="text-muted-foreground font-light">Slot</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Action Controls & Dropdowns */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full bg-primary" />
          </Button>

          {/* Interactive Profile Dropdown */}
          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border bg-accent hover:bg-accent/80 transition-transform duration-200 hover:scale-105 cursor-pointer focus:outline-none">
                  <User className="h-4 w-4 text-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold">Simran Singh</p>
                    <p className="text-xs text-muted-foreground font-light leading-none">
                      simran@roomslot.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                  <span>Account Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive gap-2">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            Reserve a Slot
          </Button>

          {/* Mobile Sheet Toggle */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground cursor-pointer">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2 text-xl font-bold">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <span>RoomSlot Navigation</span>
                  </SheetTitle>
                  <SheetDescription className="font-light">
                    Manage bookings, listings, and details.
                  </SheetDescription>
                </SheetHeader>
                <hr className="border-muted" />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 text-base font-semibold text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
                <hr className="border-muted mt-auto" />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 p-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Simran Singh</p>
                      <p className="text-xs text-muted-foreground font-light">simran@roomslot.com</p>
                    </div>
                  </div>
                  <Button variant="default" className="w-full">
                    Reserve a Slot
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
