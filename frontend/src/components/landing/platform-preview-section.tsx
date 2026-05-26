"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, LayoutDashboard, CalendarCheck, Bell } from "lucide-react";

const features = [
  { icon: Smartphone, label: "Mobile Booking", position: "top-[10%] left-[5%]" },
  { icon: LayoutDashboard, label: "Host Dashboard", position: "top-[15%] right-[5%]" },
  { icon: CalendarCheck, label: "Calendar Sync", position: "bottom-[20%] left-[8%]" },
  { icon: Bell, label: "Instant Alerts", position: "bottom-[15%] right-[8%]" },
];

export function PlatformPreviewSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Platform Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Manage Everything From One Place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Whether you&apos;re booking or hosting — the RoomSlot platform gives you complete control across all devices.
          </p>
        </motion.div>

        {/* Device Mockups */}
        <div className="relative max-w-4xl mx-auto">
          {/* Feature badges */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
              className={`absolute ${feature.position} z-20 hidden lg:flex`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">{feature.label}</span>
              </motion.div>
            </motion.div>
          ))}

          {/* Dashboard (back layer) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/images/dashboard-mockup.png"
                alt="RoomSlot Dashboard Preview"
                width={900}
                height={550}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Mobile (front layer, overlapping) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 sm:right-8 z-20 w-48 sm:w-56"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src="/images/mobile-mockup.png"
                  alt="RoomSlot Mobile App"
                  width={250}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
