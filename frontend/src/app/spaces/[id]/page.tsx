"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  Check,
  Calendar,
  Clock,
  CreditCard,
  Heart,
  Share2,
  Tv,
  Wifi,
  Wind,
  Volume2,
  Sparkles,
  Lock,
  ChevronRight,
  ShieldCheck,
  Utensils,
  Coffee,
  CheckCircle2,
  Hourglass,
  Music,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ALL_SPACES } from "@/data/spaces";
import { SPACE_TYPE_LABELS, type SpaceType } from "@/types/space";

const GALLERY_IMAGES: Record<SpaceType, string[]> = {
  dance: [
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
  ],
  classroom: [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
  ],
  yoga: [
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600",
  ],
  gym: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1571731956622-9a03e77a7b1b?auto=format&fit=crop&q=80&w=600",
  ],
  seminar: [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
  ],
  music: [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
  ],
};

const DETAILED_DESCRIPTIONS: Record<SpaceType, string> = {
  dance:
    "This state-of-the-art dance studio is specifically engineered for professional dancers, instructors, choreographers, and fitness groups. Equipped with premium sprung hardwood flooring to protect joints, full-length double-tiered glass mirrors, and a premium surround sound system supporting wireless Bluetooth connectivity. The venue is fully air-conditioned, beautifully illuminated with dynamic dimmable track lighting, and features a private changing cabin, cubby storage, and an elegant seating lounge.",
  classroom:
    "Elevate your lectures, corporate seminars, tutoring bootcamps, or creative workshops in this modern classroom. It features highly comfortable ergonomic executive chairs, spacious adjustable writing tables, a powerful digital presentation projector with an automated ceiling screen, a high-grade writing whiteboard, and enterprise-grade super-fast Wi-Fi. Designed with quiet acoustic-absorbent panels to ensure crisp speaking clarity.",
  yoga:
    "Step into a peaceful sanctuary custom-crafted for yoga, meditative healing, Pilates, and serene mindfulness sessions. Boasting large floor-to-ceiling windows that filter soft natural light, polished cedar panels, and natural air-filtering green houseplants. Premium cork yoga mats, foam blocks, thick straps, and round meditation cushions are fully provided. Set with soothing dimmable ambient lamps and a Bluetooth audio setup.",
  gym:
    "A heavy-duty, fully-equipped private gym workspace designed for intensive personal training sessions, fitness videography, or small fitness groups. Equipped with solid shock-absorbent rubber flooring, advanced power racks, Olympic barbell sets, solid heavy-weight dumbbells, iron kettlebells, and a double-pulley cable machine. Air-conditioned with a premium loud sound system to fuel workouts, complete with vibrant colored neon lights.",
  seminar:
    "Host high-impact corporate conferences, academic symposiums, product launches, or grand presentations in this state-of-the-art auditorium theater. Built with an elevated presenter stage, ultra-high-definition digital projection systems, multi-frequency wireless microphones, high-fidelity boundary speakers, and rows of comfortable padded seating with integrated writing trays. Engineered with acoustic paneling.",
  music:
    "A premium, fully isolated soundproof acoustic music room tailored for professional musicians, bands, vocalists, or recording sessions. Equipped with multi-layered studio wall isolation, a beautiful polished acoustic piano, a professional five-piece acoustic drum set, standard studio microphones, solid guitar amplification stacks, and flat-response monitor speakers. Air-conditioned and lit with cozy mood lights.",
};

const MOCK_REVIEWS = [
  {
    name: "Arjun Mehta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    rating: 5.0,
    date: "May 20, 2026",
    comment:
      "This space exceeded all expectations! The acoustics were incredible and everything was clean. The sound system was exceptionally easy to set up. Definitely booking again.",
  },
  {
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 4.8,
    date: "April 14, 2026",
    comment:
      "Excellent location, very spacious, and highly professional host. The air conditioning was powerful and the room was beautifully lit with ample natural light. Highly recommend for workshops.",
  },
  {
    name: "Rohan Das",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    rating: 4.5,
    date: "March 29, 2026",
    comment:
      "Super convenient slot booking process. The equipment was state-of-the-art and in perfect working order. Ideal for choreographers or instructors looking for high-quality spaces.",
  },
];

const MOCK_RULES = [
  {
    title: "Footwear Guidelines",
    desc: "Strictly no outdoor shoes are permitted on the active studio/practice floor. Please carry clean indoor sneakers, dance slippers, or practice barefoot as per the space parameters.",
  },
  {
    title: "Capacity Adherence",
    desc: "Guest count must not exceed the maximum room limits specified for safety reasons. Over-occupying the room will trigger immediate booking cancellation without refund.",
  },
  {
    title: "Equipment Handling & Cleanliness",
    desc: "All training mats, weights, audio equipment, and furniture must be wiped down and returned to their storage racks before your slot ends. Return the room in its original state.",
  },
  {
    title: "Noise Control Regulations",
    desc: "Keep volume settings within reasonable limits. Do not open the doors while playing loud music to avoid disturbing other clients renting adjacent studios.",
  },
  {
    title: "Cancellation & Rescheduling",
    desc: "Enjoy a full 100% refund for bookings cancelled 24 hours prior to the slot start. Bookings cancelled within 24 hours are non-refundable and cannot be rescheduled.",
  },
];

function DumbbellIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
      <path d="M6.5 12.5 12.5 6.5" />
      <path d="m11.5 17.5 6-6" />
    </svg>
  );
}

const AMENITY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "Mirror Wall": Tv,
  "Sound System": Volume2,
  AC: Wind,
  Projector: Tv,
  "Wi-Fi": Wifi,
  Whiteboard: Check,
  "Mats Provided": Sparkles,
  "Natural Light": Coffee,
  Equipment: DumbbellIcon,
  Mirrors: Tv,
  Sound: Volume2,
  Soundproof: Lock,
  Piano: Music,
  Stage: Volume2,
  "Sprung Floor": Sparkles,
  Plants: Coffee,
  "Locker Room": Lock,
  "Drum Kit": Music,
  Amps: Volume2,
  "Mic System": Volume2,
};

interface Slot {
  id: string;
  time: string;
  category: "Morning" | "Afternoon" | "Evening";
}

const AVAILABLE_SLOTS: Slot[] = [
  { id: "m1", time: "08:00 AM - 10:00 AM", category: "Morning" },
  { id: "m2", time: "10:00 AM - 12:00 PM", category: "Morning" },
  { id: "a1", time: "12:00 PM - 02:00 PM", category: "Afternoon" },
  { id: "a2", time: "02:00 PM - 04:00 PM", category: "Afternoon" },
  { id: "a3", time: "04:00 PM - 06:00 PM", category: "Afternoon" },
  { id: "e1", time: "06:00 PM - 08:00 PM", category: "Evening" },
  { id: "e2", time: "08:00 PM - 10:00 PM", category: "Evening" },
];

export default function SpaceDetailPage({
  params,
}: {
  params: React.Usable<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const spaceId = resolvedParams.id;

  const space = ALL_SPACES.find((s) => s.id === spaceId);

  // States
  const [selectedSlots, setSelectedSlots] = React.useState<string[]>([]);
  const [isSaved, setIsSaved] = React.useState(false);
  const [bookingDate, setBookingDate] = React.useState("2026-05-27");
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [bookingStep, setBookingStep] = React.useState<"summary" | "processing" | "success">("summary");

  if (!space) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-xl font-bold text-foreground">Space not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The space you are looking for does not exist or has been removed.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/explore">Back to Explore</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const images = GALLERY_IMAGES[space.type] || [space.image];
  const description = DETAILED_DESCRIPTIONS[space.type] || "No description available.";
  const hoursSelected = selectedSlots.length * 2;
  const roomRent = space.price * hoursSelected;
  const cleaningFee = hoursSelected > 0 ? 99 : 0;
  const platformFee = hoursSelected > 0 ? 49 : 0;
  const totalCost = roomRent + cleaningFee + platformFee;

  const handleSlotToggle = (slotId: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slotId) ? prev.filter((id) => id !== slotId) : [...prev, slotId]
    );
  };

  const handleReservationSubmit = () => {
    if (selectedSlots.length === 0) return;
    setBookingStep("summary");
    setIsBookingOpen(true);
  };

  const handleConfirmPayment = () => {
    setBookingStep("processing");
    setTimeout(() => {
      setBookingStep("success");
    }, 2000);
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
    if (bookingStep === "success") {
      setSelectedSlots([]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 gradient-mesh pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground tracking-wider uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-primary" />
              Back to explore
            </Link>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Explore</span>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{space.city}</span>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-foreground truncate max-w-[120px] sm:max-w-none">
                {space.title}
              </span>
            </div>
          </div>

          {/* Place Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge
                  variant={space.status === "Available" ? "success" : "warning"}
                  className="text-[10px] uppercase font-bold tracking-wider"
                >
                  {space.status}
                </Badge>
                <Badge variant="secondary" className="text-[10px] font-semibold">
                  {SPACE_TYPE_LABELS[space.type]}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {space.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-foreground">{space.rating}</span>
                  <span className="font-light">({space.reviews} verified reviews)</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1 font-light">
                  <MapPin className="h-4 w-4 text-primary" />
                  {space.city}, India
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1 font-light">
                  <Users className="h-4 w-4 text-primary" />
                  Capacity up to {space.capacity} guests
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-start md:self-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className={`gap-1.5 rounded-xl text-xs font-semibold border-border/60 hover:bg-accent/40 cursor-pointer ${
                  isSaved ? "border-rose-300 text-rose-500 bg-rose-50/50" : ""
                }`}
              >
                <Heart className={`h-4 w-4 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
                {isSaved ? "Saved" : "Save"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 rounded-xl text-xs font-semibold border-border/60 hover:bg-accent/40 cursor-pointer"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Oyo / Airbnb style Premium Image Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 rounded-2xl overflow-hidden shadow-md border border-border/30 bg-muted mb-8 h-[240px] sm:h-[350px] md:h-[420px]">
            {/* Main Featured Photo (Left) */}
            <div className="relative md:col-span-2 h-full overflow-hidden group">
              <Image
                src={images[0]}
                alt={`${space.title} Interior`}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>
            {/* Secondary Photos (Right Grid) */}
            <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2.5 h-full">
              {images.slice(1, 5).map((img, i) => (
                <div key={i} className="relative h-full overflow-hidden group">
                  <Image
                    src={img}
                    alt={`${space.title} Detail ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column: Place Details Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Custom Tabs Navigation (Overview, Availability, Reviews, Rules) */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start overflow-x-auto">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="availability">Availability Slots</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews ({space.reviews})</TabsTrigger>
                  <TabsTrigger value="rules">Rules & Policies</TabsTrigger>
                </TabsList>

                {/* Tab content: Overview */}
                <TabsContent value="overview">
                  <Card className="border-border/40 bg-card/45 shadow-sm backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-base font-extrabold uppercase tracking-wide text-foreground">
                        About this space
                      </CardTitle>
                      <CardDescription className="text-sm font-light leading-relaxed pt-2">
                        {description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <hr className="border-border/30" />
                      {/* Amenities Block */}
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                          What this space offers
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {space.amenities.map((amenity) => {
                            const Icon = AMENITY_ICONS[amenity] || Check;
                            return (
                              <div
                                key={amenity}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-border/30 bg-muted/20"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  <Icon className="h-4.5 w-4.5" />
                                </div>
                                <span className="text-sm font-medium text-foreground">
                                  {amenity}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <hr className="border-border/30" />
                      {/* Booking Trust Facts */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-xs font-bold text-foreground">RoomSlot Verified</h5>
                            <p className="text-[11px] text-muted-foreground font-light mt-0.5">
                              Every detail and photo is personally audited for accuracy.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-xs font-bold text-foreground">Secured Checkin</h5>
                            <p className="text-[11px] text-muted-foreground font-light mt-0.5">
                              Dedicated keys or keypad passcode provided at checkout.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-xs font-bold text-foreground">Host Assistance</h5>
                            <p className="text-[11px] text-muted-foreground font-light mt-0.5">
                              On-premise manager available for instant setup help.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab content: Availability Slots selection */}
                <TabsContent value="availability">
                  <Card className="border-border/40 bg-card/45 shadow-sm backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-base font-extrabold uppercase tracking-wide text-foreground">
                        Select Booking Slots
                      </CardTitle>
                      <CardDescription className="text-sm font-light pt-1">
                        Choose one or multiple slots below. Bookings are made in 2-hour increments.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-muted/40 p-3.5 rounded-xl border border-border/30">
                        <Calendar className="h-5 w-5 text-primary shrink-0" />
                        <div className="flex-1">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                            Booking Date
                          </label>
                          <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            min="2026-05-26"
                            className="block w-full bg-transparent border-0 text-sm font-bold text-foreground p-0 focus:ring-0 cursor-pointer"
                          />
                        </div>
                        <div className="text-xs text-muted-foreground font-light">
                          Select slot capsules below to activate pricing calculator
                        </div>
                      </div>

                      {/* Slot groups */}
                      {["Morning", "Afternoon", "Evening"].map((category) => {
                        const slots = AVAILABLE_SLOTS.filter(
                          (s) => s.category === category
                        );
                        return (
                          <div key={category} className="space-y-3">
                            <h4 className="text-xs font-bold text-foreground/80 tracking-wide uppercase border-l-2 border-primary pl-2">
                              {category} Slots
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {slots.map((slot) => {
                                const isSelected = selectedSlots.includes(slot.id);
                                return (
                                  <button
                                    key={slot.id}
                                    type="button"
                                    onClick={() => handleSlotToggle(slot.id)}
                                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                                      isSelected
                                        ? "border-primary bg-primary/5 text-primary shadow-xs ring-1 ring-primary"
                                        : "border-border/50 bg-card hover:bg-accent/20 text-foreground"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <Clock
                                        className={`h-4 w-4 ${
                                          isSelected ? "text-primary" : "text-muted-foreground"
                                        }`}
                                      />
                                      <span className="text-sm font-bold tracking-tight">
                                        {slot.time}
                                      </span>
                                    </div>
                                    <div
                                      className={`h-5 w-5 rounded-full flex items-center justify-center border transition-all ${
                                        isSelected
                                          ? "border-primary bg-primary text-primary-foreground"
                                          : "border-border/60 bg-transparent"
                                      }`}
                                    >
                                      {isSelected && <Check className="h-3 w-3" />}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab content: Reviews */}
                <TabsContent value="reviews">
                  <Card className="border-border/40 bg-card/45 shadow-sm backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-base font-extrabold uppercase tracking-wide text-foreground">
                        Verified Guest Ratings
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                        {/* Rating block */}
                        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-muted/40 border border-border/40 shrink-0 text-center">
                          <span className="text-4xl font-extrabold text-foreground tracking-tighter">
                            {space.rating}
                          </span>
                          <div className="flex items-center gap-0.5 mt-1.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`h-4.5 w-4.5 ${
                                  s <= Math.round(space.rating)
                                    ? "text-amber-500 fill-amber-500"
                                    : "text-muted-foreground/35"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] text-muted-foreground font-light mt-2 uppercase tracking-wide">
                            {space.reviews} total reviews
                          </span>
                        </div>

                        {/* Breakdown sliders */}
                        <div className="flex-1 w-full space-y-2.5">
                          {[
                            { name: "Cleanliness", score: 4.9 },
                            { name: "Acoustics & Setup", score: 4.8 },
                            { name: "Location & Access", score: 4.7 },
                            { name: "Value for Money", score: 4.8 },
                          ].map((b) => (
                            <div key={b.name} className="space-y-1">
                              <div className="flex justify-between text-xs font-semibold">
                                <span className="text-muted-foreground">{b.name}</span>
                                <span className="text-foreground">{b.score}</span>
                              </div>
                              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${(b.score / 5.0) * 100}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-5 pt-2">
                      <hr className="border-border/30" />
                      {/* Review Items */}
                      <div className="space-y-6">
                        {MOCK_REVIEWS.map((review, i) => (
                          <div key={i} className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border/40">
                                  <Image
                                    src={review.avatar}
                                    alt={review.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h5 className="text-sm font-bold text-foreground">
                                    {review.name}
                                  </h5>
                                  <p className="text-[10px] text-muted-foreground font-light">
                                    {review.date}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                                <Star className="h-3 w-3 fill-primary text-primary" />
                                {review.rating}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground/90 font-light leading-relaxed pl-13">
                              "{review.comment}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab content: Rules */}
                <TabsContent value="rules">
                  <Card className="border-border/40 bg-card/45 shadow-sm backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-base font-extrabold uppercase tracking-wide text-foreground">
                        Space Guidelines & Booking Policies
                      </CardTitle>
                      <CardDescription className="text-sm font-light pt-1">
                        Please review these house guidelines and cancellation policies before submitting.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion className="w-full">
                        {MOCK_RULES.map((rule, idx) => (
                          <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger>{rule.title}</AccordionTrigger>
                            <AccordionContent>{rule.desc}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column: Sticky Pricing & Booking Card Widget */}
            <div className="lg:sticky lg:top-22 space-y-4">
              <Card className="border-border/50 bg-card shadow-lg relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-primary" />
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="text-2xl font-extrabold text-foreground">
                        ₹{space.price}
                      </span>
                      <span className="text-xs text-muted-foreground font-light">/hour</span>
                    </div>
                    {space.price > 500 && (
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-[9px] uppercase tracking-wider font-extrabold">
                        Premium Studio
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pb-4">
                  {/* Selector stats info */}
                  <div className="border border-border/50 rounded-xl overflow-hidden bg-muted/10">
                    <div className="p-3 border-b border-border/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-xs font-bold text-foreground">Date Selected</span>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {bookingDate}
                      </span>
                    </div>
                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-xs font-bold text-foreground">Hours Reserved</span>
                      </div>
                      <span className="text-xs font-extrabold text-primary">
                        {hoursSelected > 0 ? `${hoursSelected} hours` : "0 hrs (None selected)"}
                      </span>
                    </div>
                  </div>

                  {hoursSelected > 0 ? (
                    /* Pricing Calculation Breakdown */
                    <div className="space-y-2 pt-2 border-t border-border/30">
                      <div className="flex justify-between text-xs font-medium text-muted-foreground">
                        <span>
                          ₹{space.price} x {hoursSelected} hours
                        </span>
                        <span className="text-foreground">₹{roomRent}</span>
                      </div>
                      <div className="flex justify-between text-xs font-medium text-muted-foreground">
                        <span>Cleaning fee</span>
                        <span className="text-foreground">₹{cleaningFee}</span>
                      </div>
                      <div className="flex justify-between text-xs font-medium text-muted-foreground">
                        <span>Platform service charge</span>
                        <span className="text-foreground">₹{platformFee}</span>
                      </div>
                      <hr className="border-border/30 mt-2" />
                      <div className="flex justify-between items-baseline pt-1">
                        <span className="text-sm font-bold text-foreground">Estimated Total</span>
                        <span className="text-lg font-black text-foreground">₹{totalCost}</span>
                      </div>
                    </div>
                  ) : (
                    /* Prompt helper */
                    <div className="flex flex-col items-center justify-center px-4 py-6 border border-dashed border-border/70 rounded-xl bg-muted/15 text-center">
                      <Hourglass className="h-8 w-8 text-primary/40 mb-2 animate-pulse" />
                      <span className="text-xs font-bold text-foreground">No slots selected</span>
                      <p className="text-[11px] text-muted-foreground font-light mt-1 max-w-[190px]">
                        Please select one or more availability capsules under the slots tab to estimate rent.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleReservationSubmit}
                    disabled={hoursSelected === 0}
                    className="w-full h-11 rounded-xl shadow-md shadow-primary/10 gap-1.5 font-bold tracking-wide uppercase text-xs cursor-pointer bg-gradient-to-r from-primary to-violet-600 hover:from-primary/95 hover:to-violet-500 transition-all duration-300"
                  >
                    <CreditCard className="h-4 w-4" />
                    Reserve slots now
                  </Button>
                </CardFooter>
              </Card>

              {/* Security guarantee cards */}
              <div className="flex items-center gap-3 p-3.5 border border-border/40 rounded-xl bg-card/40 backdrop-blur-md">
                <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-[11px] text-muted-foreground font-medium leading-normal">
                  <strong className="text-foreground font-bold">100% Payment Safe Guarantee</strong>. RoomSlot protects all bookings with secured escrow processing and quick rescheduling tools.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Premium Booking & checkout process Dialog (Shadcn Dialog) */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-[460px] bg-card/95 backdrop-blur-2xl border-border/40 shadow-2xl p-6 relative overflow-hidden rounded-2xl">
          {bookingStep === "summary" && (
            <div className="space-y-5">
              <DialogHeader className="text-left">
                <DialogTitle className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                  Confirm Booking Details
                </DialogTitle>
                <DialogDescription className="text-xs font-light text-muted-foreground pt-1">
                  Double check your room slots and cost breakdown before making the transaction.
                </DialogDescription>
              </DialogHeader>

              <div className="border border-border/45 rounded-xl p-4 bg-muted/20 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-extrabold text-foreground">{space.title}</h4>
                    <span className="text-[11px] text-muted-foreground font-light flex items-center gap-0.5 mt-0.5">
                      <MapPin className="h-3 w-3 text-primary shrink-0" /> {space.city}, India
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-[9px] uppercase tracking-wide font-bold">
                    {SPACE_TYPE_LABELS[space.type]}
                  </Badge>
                </div>

                <hr className="border-border/30" />

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-muted-foreground font-light block">Reserved Date</span>
                    <strong className="text-foreground font-bold">{bookingDate}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-light block">Total Duration</span>
                    <strong className="text-foreground font-bold">{hoursSelected} hours</strong>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-border/30 text-xs">
                  <span className="text-muted-foreground font-light block pb-1">Selected Slot Times:</span>
                  {selectedSlots.map((sid) => {
                    const slot = AVAILABLE_SLOTS.find((s) => s.id === sid);
                    return (
                      <div
                        key={sid}
                        className="flex items-center gap-1.5 text-foreground font-bold px-2.5 py-1 bg-background/80 rounded-md border border-border/30"
                      >
                        <Clock className="h-3 w-3 text-primary" />
                        {slot?.time}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Charges Summary */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-muted-foreground font-light">
                  <span>Room Rent ({hoursSelected} hours)</span>
                  <span className="font-bold text-foreground">₹{roomRent}</span>
                </div>
                <div className="flex justify-between text-muted-foreground font-light">
                  <span>Cleaning maintenance</span>
                  <span className="font-bold text-foreground">₹{cleaningFee}</span>
                </div>
                <div className="flex justify-between text-muted-foreground font-light">
                  <span>Platform escrow fee</span>
                  <span className="font-bold text-foreground">₹{platformFee}</span>
                </div>
                <hr className="border-border/30" />
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-sm font-bold text-foreground">Total Checkout Amount</span>
                  <span className="text-lg font-black text-primary">₹{totalCost}</span>
                </div>
              </div>

              <DialogFooter className="pt-2">
                <Button
                  variant="outline"
                  onClick={handleBookingClose}
                  className="rounded-xl font-bold uppercase tracking-wider text-[10px] cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirmPayment}
                  className="rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-sm shadow-primary/10 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                >
                  Proceed to pay ₹{totalCost}
                </Button>
              </DialogFooter>
            </div>
          )}

          {bookingStep === "processing" && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <h3 className="text-base font-extrabold text-foreground">Processing Transaction</h3>
              <p className="text-xs text-muted-foreground font-light max-w-[280px]">
                Please do not close this modal or refresh the page. We are securing your booking slots on RoomSlot...
              </p>
            </div>
          )}

          {bookingStep === "success" && (
            <div className="space-y-5 text-center py-6">
              <div className="flex items-center justify-center">
                <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-md shadow-emerald-500/10">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black tracking-tight text-foreground">
                  Booking Confirmed!
                </h3>
                <p className="text-xs text-muted-foreground font-light mt-2 max-w-[320px] mx-auto">
                  Your reservation is successful. Checkin keys and detailed entry directions have been sent to your email!
                </p>
              </div>

              <div className="border border-emerald-500/20 rounded-xl p-4 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs text-left max-w-sm mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Reserved Room:</span>
                  <strong className="text-foreground font-bold">{space.title}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Selected Date:</span>
                  <strong className="text-foreground font-bold">{bookingDate}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-light">Booked Hours:</span>
                  <strong className="text-foreground font-bold">{hoursSelected} hours</strong>
                </div>
                <div className="flex justify-between border-t border-emerald-500/20 pt-2 mt-1">
                  <span className="text-muted-foreground font-bold">Total Paid:</span>
                  <strong className="text-foreground font-extrabold text-emerald-600 dark:text-emerald-400">
                    ₹{totalCost}
                  </strong>
                </div>
              </div>

              <DialogFooter className="sm:justify-center">
                <DialogClose asChild>
                  <Button
                    onClick={handleBookingClose}
                    className="w-full rounded-xl font-bold uppercase tracking-wider text-[10px] bg-emerald-600 hover:bg-emerald-500 text-white shadow-md cursor-pointer"
                  >
                    Done & Back to explore
                  </Button>
                </DialogClose>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
