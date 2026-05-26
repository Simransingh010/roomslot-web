"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Clock, BookOpen } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Nearby Spaces",
    description:
      "Browse hundreds of verified spaces near you — classrooms, studios, gyms, and more. Filter by location, type, and availability.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Choose Time Slots",
    description:
      "Pick hourly slots that work for you. See real-time availability, compare prices, and find the perfect fit for your schedule.",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: BookOpen,
    title: "Book & Start Teaching",
    description:
      "Confirm your booking instantly with secure payments. Show up, unlock, and start your class — it's that simple.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Three Steps to Your Next Class
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Finding and booking the right space takes less than 2 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number badge */}
              <div className="relative z-10 mb-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} shadow-sm`}>
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-md">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
