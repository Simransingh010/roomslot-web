"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SpaceCard } from "@/components/explore/space-card";
import { ALL_SPACES } from "@/data/spaces";

const featuredSpaces = ALL_SPACES.slice(0, 4);

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
          <Button variant="outline" className="self-start sm:self-auto" asChild>
            <Link href="/explore">View All Spaces</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredSpaces.map((space) => (
            <motion.div key={space.id} variants={itemVariants}>
              <SpaceCard space={space} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
