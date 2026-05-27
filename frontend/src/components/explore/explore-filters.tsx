"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  SlidersHorizontal,
  X,
  Compass,
  Flame,
  GraduationCap,
  Flower2,
  Dumbbell,
  Users,
  Music,
  ChevronDown,
  Tag,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EXPLORE_CATEGORIES, PRICE_FILTERS, SORT_OPTIONS } from "@/data/spaces";
import type { PriceFilterValue } from "@/data/spaces";
import type { SpaceSort, SpaceType } from "@/types/space";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<
  SpaceType | "all",
  React.ComponentType<{ className?: string }>
> = {
  all: Compass,
  dance: Flame,
  classroom: GraduationCap,
  yoga: Flower2,
  gym: Dumbbell,
  seminar: Users,
  music: Music,
};

export interface ExploreFiltersState {
  query: string;
  type: SpaceType | "all";
  city: string;
  price: PriceFilterValue;
  sort: SpaceSort;
}

interface ExploreFiltersProps {
  filters: ExploreFiltersState;
  onChange: (filters: ExploreFiltersState) => void;
  cities: string[];
  resultCount: number;
}

export function ExploreFilters({
  filters,
  onChange,
  cities,
  resultCount,
}: ExploreFiltersProps) {
  const hasActiveFilters =
    filters.query !== "" ||
    filters.type !== "all" ||
    filters.city !== "" ||
    filters.price !== "all";

  const update = (patch: Partial<ExploreFiltersState>) => {
    onChange({ ...filters, ...patch });
  };

  const clearFilters = () => {
    onChange({
      query: "",
      type: "all",
      city: "",
      price: "all",
      sort: filters.sort,
    });
  };

  return (
    <div className="space-y-6">
      {/* Category Horizontal Ribbon with sliding motion */}
      <div className="relative">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden isolate">
          {EXPLORE_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.type];
            const isActive = filters.type === category.type;
            return (
              <button
                key={category.type}
                type="button"
                className={cn(
                  "relative flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
                  isActive
                    ? "text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40 bg-card border border-border/50"
                )}
                onClick={() => update({ type: category.type })}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      isActive ? "scale-110" : "group-hover:scale-105"
                    )}
                  />
                )}
                <span>{category.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Filter Control Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-7 shadow-lg border border-border/40 relative overflow-hidden bg-card/65 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <SlidersHorizontal className="h-4 w-4" />
            </div>
            <h2 className="text-xs font-bold text-foreground tracking-wider uppercase">
              Filter spaces
            </h2>
          </div>
          {hasActiveFilters && (
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary tracking-wide uppercase shadow-sm"
            >
              Filters Active
            </motion.span>
          )}
        </div>

        {/* 4-column balanced layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Search Query field */}
          <div className="flex flex-col gap-1.5 group">
            <label className="text-[11px] font-bold text-muted-foreground/80 group-focus-within:text-primary uppercase tracking-wider transition-colors">
              Search
            </label>
            <Input
              icon={
                <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              }
              placeholder="Studio, gym, hall..."
              value={filters.query}
              onChange={(e) => update({ query: e.target.value })}
              className="h-11 bg-background/50 border-border/60 hover:border-border/80 focus-visible:ring-primary focus-visible:border-primary shadow-xs transition-all"
            />
          </div>

          {/* Location / City Select field */}
          <div className="flex flex-col gap-1.5 group">
            <label className="text-[11px] font-bold text-muted-foreground/80 group-focus-within:text-primary uppercase tracking-wider transition-colors">
              Location
            </label>
            <div className="relative flex h-11 w-full items-center rounded-md border border-border/60 bg-background/50 hover:bg-accent/10 hover:border-border/80 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/25 focus-within:ring-offset-0 shadow-xs transition-all">
              <MapPin className="absolute left-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none" />
              <select
                className="w-full bg-transparent pl-9.5 pr-10 h-full text-sm appearance-none cursor-pointer focus:outline-none text-foreground font-medium"
                value={filters.city}
                onChange={(e) => update({ city: e.target.value })}
              >
                <option value="">All cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary pointer-events-none transition-transform duration-250 group-focus-within:rotate-180" />
            </div>
          </div>

          {/* Price Range select field */}
          <div className="flex flex-col gap-1.5 group">
            <label className="text-[11px] font-bold text-muted-foreground/80 group-focus-within:text-primary uppercase tracking-wider transition-colors">
              Price Range
            </label>
            <div className="relative flex h-11 w-full items-center rounded-md border border-border/60 bg-background/50 hover:bg-accent/10 hover:border-border/80 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/25 focus-within:ring-offset-0 shadow-xs transition-all">
              <Tag className="absolute left-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none" />
              <select
                className="w-full bg-transparent pl-9.5 pr-10 h-full text-sm appearance-none cursor-pointer focus:outline-none text-foreground font-medium"
                value={filters.price}
                onChange={(e) =>
                  update({ price: e.target.value as PriceFilterValue })
                }
              >
                {PRICE_FILTERS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary pointer-events-none transition-transform duration-250 group-focus-within:rotate-180" />
            </div>
          </div>

          {/* Sort By select field */}
          <div className="flex flex-col gap-1.5 group">
            <label className="text-[11px] font-bold text-muted-foreground/80 group-focus-within:text-primary uppercase tracking-wider transition-colors">
              Sort By
            </label>
            <div className="relative flex h-11 w-full items-center rounded-md border border-border/60 bg-background/50 hover:bg-accent/10 hover:border-border/80 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/25 focus-within:ring-offset-0 shadow-xs transition-all">
              <ArrowUpDown className="absolute left-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none" />
              <select
                className="w-full bg-transparent pl-9.5 pr-10 h-full text-sm appearance-none cursor-pointer focus:outline-none text-foreground font-medium"
                value={filters.sort}
                onChange={(e) => update({ sort: e.target.value as SpaceSort })}
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary pointer-events-none transition-transform duration-250 group-focus-within:rotate-180" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer result information & clear filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="text-sm text-muted-foreground font-light">
          Showing{" "}
          <span className="font-semibold text-foreground tracking-tight">
            {resultCount}
          </span>{" "}
          {resultCount === 1 ? "space" : "spaces"} matching your preferences
        </p>
        {hasActiveFilters && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full px-4.5 py-1.5 font-semibold text-xs border border-transparent hover:border-destructive/20 cursor-pointer shadow-none transition-all"
            onClick={clearFilters}
          >
            <X className="h-3.5 w-3.5" />
            Clear all filters
          </Button>
        )}
      </div>
    </div>
  );
}
