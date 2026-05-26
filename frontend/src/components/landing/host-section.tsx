"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Flexible pricing — set your own rates",
  "Slot-based scheduling with calendar sync",
  "Automated booking management",
  "Get discovered by instructors & coaches",
  "Secure payments with instant payouts",
  "Dashboard with analytics & insights",
];

export function HostSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/images/dashboard-mockup.png"
                alt="RoomSlot Host Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Floating earnings badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass-card rounded-xl px-5 py-3.5 shadow-lg border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-lg font-bold text-emerald-600">
                  ₹
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">₹2.4L earned</p>
                  <p className="text-[11px] text-muted-foreground font-light">This month</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">
              For Space Owners
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Turn Empty Hours{" "}
              <span className="text-gradient">Into Revenue</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              List your unused classroom, studio, or gym on RoomSlot. Reach thousands of instructors and coaches looking for spaces in your city.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mt-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-foreground">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-light">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg" className="px-8 gap-2 shadow-lg shadow-primary/20">
                Become a Host
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
