import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Clock3, CreditCard, MapPin, Search, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Search by location and activity",
    description:
      "Find classrooms, studios, gyms, and practice rooms that match your class format, city, budget, and schedule.",
    icon: Search,
  },
  {
    title: "Compare verified spaces",
    description:
      "Review photos, amenities, pricing, capacity, cancellation rules, and host details before you choose a slot.",
    icon: MapPin,
  },
  {
    title: "Book hourly or recurring slots",
    description:
      "Reserve one-time sessions or repeat bookings with clear availability and secure payment confirmation.",
    icon: CalendarCheck,
  },
  {
    title: "Arrive and run your class",
    description:
      "Get booking details, host instructions, and support so your session starts without back-and-forth coordination.",
    icon: CheckCircle2,
  },
];

const highlights = [
  { label: "Verified listings", icon: ShieldCheck },
  { label: "Hourly availability", icon: Clock3 },
  { label: "Secure payments", icon: CreditCard },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
              How It Works
            </Badge>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Book the right space for every class, workshop, or session.
                </h1>
                <p className="mt-6 max-w-3xl text-lg font-light text-muted-foreground">
                  RoomSlot keeps discovery, booking, payments, and host coordination in one simple flow for instructors and creators.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Booking Flow
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                From search to session in four steps
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="border-border/50 shadow-sm" hoverEffect>
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-muted-foreground">0{index + 1}</span>
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-light leading-6 text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Built For Reuse
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Manage one-off and recurring bookings without manual coordination.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {["Transparent prices", "Host instructions", "Booking support"].map((item) => (
                <div key={item} className="rounded-lg border border-border/50 bg-background p-5 shadow-sm">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-semibold text-foreground">{item}</p>
                  <p className="mt-2 text-sm font-light leading-6 text-muted-foreground">
                    Designed to reduce follow-ups before every session.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg border border-border/50 bg-card p-8 shadow-sm sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Ready to find your next space?</h2>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Browse verified spaces by activity type, capacity, and city.
              </p>
            </div>
            <Button asChild>
              <Link href="/explore">
                Explore Spaces
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
