import Link from "next/link";
import { ArrowRight, Building2, Mail, MapPin, MessageSquare, Send, UserRound } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const contactOptions = [
  {
    title: "Booker support",
    description: "Questions about finding spaces, availability, recurring slots, or booking details.",
    icon: MessageSquare,
  },
  {
    title: "Host onboarding",
    description: "List a classroom, studio, gym, or activity space and understand host requirements.",
    icon: Building2,
  },
  {
    title: "Partnerships",
    description: "For institutions, academies, and teams that need space access across locations.",
    icon: UserRound,
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
              Contact
            </Badge>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Talk to RoomSlot about bookings, hosting, or partnerships.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-light text-muted-foreground">
              Share what you need and the right team member will help with next steps.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  Reach Us
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Choose the conversation that fits.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Card key={option.title} className="border-border/50 shadow-sm">
                      <CardHeader className="flex-row items-start gap-4 space-y-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle>{option.title}</CardTitle>
                          <p className="mt-2 text-sm font-light leading-6 text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <Mail className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold text-foreground">hello@roomslot.in</p>
                </div>
                <div className="rounded-lg border border-border/50 bg-card p-4">
                  <MapPin className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Serving cities across India</p>
                </div>
              </div>
            </div>

            <Card className="border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <p className="text-sm font-light text-muted-foreground">
                  This form is ready for UI capture and can be connected to backend handling when available.
                </p>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-medium text-foreground">
                      Name
                      <Input placeholder="Your name" />
                    </label>
                    <label className="space-y-2 text-sm font-medium text-foreground">
                      Phone
                      <Input placeholder="+91" />
                    </label>
                  </div>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Email
                    <Input placeholder="you@example.com" type="email" />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Topic
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>Book a space</option>
                      <option>List my space</option>
                      <option>Recurring bookings</option>
                      <option>Partnerships</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Message
                    <textarea
                      className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tell us what you need"
                    />
                  </label>
                  <Button type="button" className="w-full sm:w-auto">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Looking for a space right now?</h2>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Explore available listings while we review your request.
              </p>
            </div>
            <Button asChild>
              <Link href="/explore">
                Browse Spaces
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
