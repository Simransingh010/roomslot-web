"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Search, CalendarDays, Clock, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchSection() {
  return (
    <section className="relative -mt-8 z-10 px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl border border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Chandigarh, Delhi..."
                  className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-all"
                />
              </div>
            </div>

            {/* Activity Type */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-primary" />
                Activity Type
              </label>
              <select
                className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-all appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Select type</option>
                <option value="dance">Dance Studio</option>
                <option value="classroom">Classroom</option>
                <option value="yoga">Yoga Space</option>
                <option value="gym">Gym</option>
                <option value="seminar">Seminar Hall</option>
                <option value="music">Music Room</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary" />
                Date
              </label>
              <input
                type="date"
                className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-all cursor-pointer"
              />
            </div>

            {/* Time Slot */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                Time Slot
              </label>
              <select
                className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-all appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Select time</option>
                <option value="morning">6 AM – 9 AM</option>
                <option value="mid-morning">9 AM – 12 PM</option>
                <option value="afternoon">12 PM – 3 PM</option>
                <option value="evening">3 PM – 6 PM</option>
                <option value="night">6 PM – 9 PM</option>
              </select>
            </div>

            {/* Search Button */}
            <Button size="lg" className="h-11 w-full gap-2 shadow-lg shadow-primary/20 text-sm font-semibold">
              <Search className="h-4 w-4" />
              Search Spaces
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
