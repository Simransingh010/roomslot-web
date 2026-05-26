"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-cta opacity-95" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Sparkle icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-10 w-10 text-white/80" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your Next Class{" "}
            <span className="underline decoration-white/30 underline-offset-8">Starts Here.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-xl">
            Discover flexible spaces built for creators, instructors, and growing communities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="px-8 text-base gap-2 bg-white text-foreground hover:bg-white/90 shadow-xl font-semibold"
            >
              Find a Space
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              List Your Space
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
