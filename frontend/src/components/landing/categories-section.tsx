"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Dance Studios",
    count: 85,
    image: "/images/cat-dance-studio.png",
  },
  {
    name: "Classrooms",
    count: 120,
    image: "/images/cat-classroom.png",
  },
  {
    name: "Yoga Spaces",
    count: 64,
    image: "/images/cat-yoga.png",
  },
  {
    name: "Gyms",
    count: 92,
    image: "/images/cat-gym.png",
  },
  {
    name: "Seminar Halls",
    count: 48,
    image: "/images/cat-seminar.png",
  },
  {
    name: "Music Rooms",
    count: 37,
    image: "/images/cat-music.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CategoriesSection() {
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
            Browse by Category
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Find the Perfect Space for Your Activity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            From dance floors to lecture halls — discover spaces designed for every kind of class, session, or workshop.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-white/80 font-light">
                  {category.count} spaces available
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
