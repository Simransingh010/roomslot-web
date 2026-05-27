import Link from "next/link";
import { ArrowRight, BarChart3, CalendarDays, Check, IndianRupee, ShieldCheck, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  "Set hourly pricing and availability rules",
  "Accept one-time and recurring bookings",
  "Reach instructors, coaches, and creators",
  "Manage bookings from a simple dashboard",
  "Receive secure payouts after completed sessions",
  "Get listing guidance from the RoomSlot team",
];

const hostSteps = [
  {
    title: "Submit your space",
    description: "Share location, photos, amenities, capacity, available times, and preferred pricing.",
  },
  {
    title: "Get verified",
    description: "Our team reviews the listing details and helps you make the page clear for bookers.",
  },
  {
    title: "Start earning",
    description: "Approve suitable bookings, host sessions, and track utilization across your calendar.",
  },
];

const metrics = [
  { value: "35+", label: "cities served" },
  { value: "1,200+", label: "verified spaces" },
  { value: "98%", label: "booking completion" },
];

export default function BecomeAHostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
                Become a Host
              </Badge>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Turn unused classroom, studio, or gym hours into reliable revenue.
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-light text-muted-foreground">
                List your space on RoomSlot and get discovered by instructors and creators who need flexible, well-equipped venues.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Hosting
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Fees</Link>
                </Button>
              </div>
            </div>
            <Card className="border-border/50 shadow-sm">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IndianRupee className="h-5 w-5" />
                </div>
                <CardTitle>Host dashboard preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                  <p className="text-sm font-light text-muted-foreground">This month</p>
                  <p className="mt-1 text-3xl font-bold text-foreground">₹2.4L</p>
                  <p className="mt-1 text-sm font-light text-muted-foreground">from 146 booked hours</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-border/50 p-3">
                      <p className="font-bold text-foreground">{metric.value}</p>
                      <p className="mt-1 text-xs font-light text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Why Host
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                A booking system built for space owners
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { title: "Higher utilization", icon: BarChart3, copy: "Fill quiet daytime and weekday slots with instructors who book by the hour." },
                { title: "Controlled availability", icon: CalendarDays, copy: "Keep your own operating rules while making open slots easy to reserve." },
                { title: "Trusted demand", icon: ShieldCheck, copy: "Reach verified bookers with clear activity needs and transparent expectations." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-border/50 shadow-sm" hoverEffect>
                    <CardHeader>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-light leading-6 text-muted-foreground">{item.copy}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Included
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Everything needed to launch and manage bookings.
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-lg border border-border/50 bg-background p-4">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-light text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Onboarding
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Go live in three practical steps
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {hostSteps.map((step, index) => (
                <Card key={step.title} className="border-border/50 shadow-sm">
                  <CardHeader>
                    <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-light leading-6 text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg border border-border/50 bg-card p-8 shadow-sm sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Have a space to list?</h2>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Share your details and the RoomSlot team will help you evaluate fit.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Contact Us
                <Users className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
