"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Wifi, Wind, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const spaces = [
  {
    title: "Rhythm Dance Studio",
    city: "Chandigarh",
    image: "/images/cat-dance-studio.png",
    price: 499,
    rating: 4.9,
    reviews: 128,
    amenities: ["Mirror Wall", "Sound System", "AC"],
    status: "Available",
    capacity: 25,
  },
  {
    title: "Excel Coaching Center",
    city: "Delhi",
    image: "/images/cat-classroom.png",
    price: 349,
    rating: 4.8,
    reviews: 86,
    amenities: ["Projector", "Wi-Fi", "Whiteboard"],
    status: "Few Slots Left",
    capacity: 40,
  },
  {
    title: "Serenity Yoga Hall",
    city: "Bangalore",
    image: "/images/cat-yoga.png",
    price: 599,
    rating: 4.9,
    reviews: 204,
    amenities: ["Mats Provided", "Natural Light", "AC"],
    status: "Available",
    capacity: 20,
  },
  {
    title: "Iron Core Fitness Studio",
    city: "Mumbai",
    image: "/images/cat-gym.png",
    price: 799,
    rating: 4.7,
    reviews: 67,
    amenities: ["Equipment", "Mirrors", "Sound"],
    status: "Available",
    capacity: 15,
  },
];

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Wi-Fi": Wifi,
  "AC": Wind,
  "Projector": Monitor,
  "Sound System": Monitor,
  "Mirror Wall": Monitor,
  "Whiteboard": Monitor,
  "Natural Light": Wind,
  "Mats Provided": Users,
  "Equipment": Users,
  "Mirrors": Monitor,
  "Sound": Monitor,
};

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

export function FeaturedSpacesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              Featured Spaces
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Top-Rated Spaces Near You
            </h2>
            <p className="mt-3 text-lg text-muted-foreground font-light max-w-lg">
              Hand-picked, verified spaces loved by instructors and creators.
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            View All Spaces
          </Button>
        </motion.div>

        {/* Space Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {spaces.map((space) => (
            <motion.div
              key={space.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Status badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={space.status === "Available" ? "success" : "warning"}
                    className="text-[10px] uppercase tracking-wider"
                  >
                    {space.status}
                  </Badge>
                </div>
                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold shadow-sm">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  {space.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {space.city}
                    <span className="mx-1">•</span>
                    <Users className="h-3 w-3" />
                    {space.capacity} people
                  </p>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5">
                  {space.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div>
                    <span className="text-lg font-bold text-foreground">₹{space.price}</span>
                    <span className="text-xs text-muted-foreground font-light">/hr</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{space.reviews} reviews</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
