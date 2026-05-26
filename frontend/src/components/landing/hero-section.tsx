"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, Users, Shield, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh-hero" />
      
      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-[40%] w-48 h-48 bg-blue-400/5 rounded-full blur-2xl animate-float-slow" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Now live in 20+ cities across India
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Book Spaces.{" "}
              <span className="text-gradient">Run Classes.</span>{" "}
              Build Your Business.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
              Find classrooms, gyms, dance studios, and activity spaces on flexible hourly bookings across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Find Spaces
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-base">
                List Your Space
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">500+ Spaces</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Hourly Booking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Verified Hosts</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Floating Space Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative w-[380px] rounded-2xl border bg-card shadow-2xl overflow-hidden">
                {/* Space Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src="/images/cat-dance-studio.png"
                    alt="Premium Dance Studio"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    4.9
                  </div>
                  <div className="absolute top-3 left-3 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm uppercase tracking-wider">
                    Available Now
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Rhythm Dance Studio</h3>
                    <p className="text-sm text-muted-foreground font-light flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3.5 w-3.5" />
                      Sector 22, Chandigarh
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        25 people
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        6 slots left
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div>
                      <span className="text-2xl font-bold text-foreground">₹499</span>
                      <span className="text-sm text-muted-foreground font-light">/hour</span>
                    </div>
                    <Button size="sm" className="shadow-md">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Small floating badge card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-10 glass-card rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">10,000+</p>
                    <p className="text-[11px] text-muted-foreground font-light">Hours Booked</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
