"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SPACE_TYPE_LABELS, type Space } from "@/types/space";
import { cn } from "@/lib/utils";

interface SpaceCardProps {
  space: Space;
  className?: string;
}

export function SpaceCard({ space, className }: SpaceCardProps) {
  return (
    <Link href={`/spaces/${space.id}`} className="block h-full">
      <article
        className={cn(
          "group rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer h-full flex flex-col",
          className
        )}
      >
        <div className="relative h-48 overflow-hidden shrink-0">
          <Image
            src={space.image}
            alt={space.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge
              variant={space.status === "Available" ? "success" : "warning"}
              className="text-[10px] uppercase tracking-wider font-bold"
            >
              {space.status}
            </Badge>
            <Badge variant="secondary" className="text-[10px] font-semibold">
              {SPACE_TYPE_LABELS[space.type]}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 dark:bg-black/80 backdrop-blur-xs px-2 py-1 text-xs font-bold shadow-xs">
            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
            {space.rating}
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {space.title}
            </h3>
            <p className="text-xs text-muted-foreground font-light flex items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0 text-primary" />
              {space.city}
              <span className="mx-1">•</span>
              <Users className="h-3 w-3 shrink-0 text-primary" />
              {space.capacity} people
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {space.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border/30"
              >
                {amenity}
              </span>
            ))}
            {space.amenities.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                +{space.amenities.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-border/40">
            <div>
              <span className="text-base font-extrabold text-foreground">₹{space.price}</span>
              <span className="text-xs text-muted-foreground font-light">/hr</span>
            </div>
            <span className="text-[11px] text-muted-foreground font-light">{space.reviews} reviews</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
