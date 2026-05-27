"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_SPACES, CITIES } from "@/data/spaces";
import type { PriceFilterValue } from "@/data/spaces";
import type { Space } from "@/types/space";
import { ExploreFilters, type ExploreFiltersState } from "@/components/explore/explore-filters";
import { SpaceCard } from "@/components/explore/space-card";

const DEFAULT_FILTERS: ExploreFiltersState = {
  query: "",
  type: "all",
  city: "",
  price: "all",
  sort: "rating",
};

function matchesPrice(price: number, filter: PriceFilterValue): boolean {
  switch (filter) {
    case "under-400":
      return price < 400;
    case "400-600":
      return price >= 400 && price <= 600;
    case "over-600":
      return price > 600;
    default:
      return true;
  }
}

function filterSpaces(
  spaces: Space[],
  filters: ExploreFiltersState,
): Space[] {
  const q = filters.query.trim().toLowerCase();

  let result = spaces.filter((space) => {
    if (filters.type !== "all" && space.type !== filters.type) return false;
    if (filters.city && space.city !== filters.city) return false;
    if (!matchesPrice(space.price, filters.price)) return false;
    if (q) {
      const haystack = `${space.title} ${space.city}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  result = [...result].sort((a, b) => {
    switch (filters.sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return b.rating - a.rating || b.reviews - a.reviews;
    }
  });

  return result;
}

export function ExploreSpacesView() {
  const [filters, setFilters] = React.useState<ExploreFiltersState>(DEFAULT_FILTERS);

  const filteredSpaces = React.useMemo(
    () => filterSpaces(ALL_SPACES, filters),
    [filters],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          Explore
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Find Your Perfect Space
        </h1>
        <p className="mt-3 text-lg text-muted-foreground font-light max-w-2xl">
          Browse dance studios, classrooms, yoga halls, gyms, and more — filter by
          type, city, and price to book by the hour.
        </p>
      </motion.div>

      <ExploreFilters
        filters={filters}
        onChange={setFilters}
        cities={CITIES}
        resultCount={filteredSpaces.length}
      />

      {filteredSpaces.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <SpaceCard space={space} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-muted/30 px-6 py-16 text-center"
        >
          <SearchX className="h-12 w-12 text-muted-foreground/60 mb-4" />
          <h2 className="text-lg font-semibold text-foreground">No spaces match</h2>
          <p className="mt-2 text-sm text-muted-foreground font-light max-w-md">
            Try clearing filters or choosing a different category or city.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setFilters(DEFAULT_FILTERS)}
          >
            Reset all filters
          </Button>
        </motion.div>
      )}
    </div>
  );
}
