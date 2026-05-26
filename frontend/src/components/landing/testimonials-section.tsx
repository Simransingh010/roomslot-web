"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, TrendingUp, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Dance Instructor",
    city: "Chandigarh",
    quote:
      "RoomSlot changed my career. I went from scrambling for rehearsal space to having three studios booked every week. The flexibility is unbeatable.",
    rating: 5,
    avatar: "PS",
    color: "bg-violet-500",
  },
  {
    name: "Arjun Patel",
    role: "UPSC Tutor",
    city: "Delhi",
    quote:
      "Finding a classroom for my coaching batches used to take days. Now I book verified spaces with a projector and AC in under 2 minutes.",
    rating: 5,
    avatar: "AP",
    color: "bg-blue-500",
  },
  {
    name: "Meera Krishnan",
    role: "Yoga Trainer",
    city: "Bangalore",
    quote:
      "My students love the serene studios I book through RoomSlot. The availability calendar is so intuitive — I manage 12 sessions a week effortlessly.",
    rating: 5,
    avatar: "MK",
    color: "bg-emerald-500",
  },
  {
    name: "Rahul Verma",
    role: "Gym Owner",
    city: "Mumbai",
    quote:
      "I listed my unused morning slots and earned ₹1.8L extra last month. RoomSlot's dashboard makes managing bookings completely stress-free.",
    rating: 5,
    avatar: "RV",
    color: "bg-amber-500",
  },
];

const metrics = [
  { label: "Booking Hours", value: "10,000+", icon: Clock },
  { label: "Average Rating", value: "4.9", icon: Star },
  { label: "Cities Active", value: "20+", icon: MapPin },
  { label: "Monthly Growth", value: "34%", icon: TrendingUp },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Loved by Instructors
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Hear From Our Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Thousands of instructors, coaches, and space owners trust RoomSlot to power their work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4 -scale-x-100" />

              {/* Quote text */}
              <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} text-white text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-[11px] text-muted-foreground font-light">
                    {testimonial.role} • {testimonial.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-1">
                  <metric.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground font-light">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
