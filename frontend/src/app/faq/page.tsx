import Link from "next/link";
import { ArrowRight, HelpCircle, LifeBuoy, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of spaces can I book on RoomSlot?",
    answer:
      "You can find classrooms, dance studios, gyms, activity rooms, practice spaces, and other venues suitable for classes, workshops, coaching, and community sessions.",
  },
  {
    question: "Can I book recurring slots?",
    answer:
      "Yes. RoomSlot is designed for both one-time hourly bookings and recurring sessions, subject to host availability and booking rules.",
  },
  {
    question: "How are spaces verified?",
    answer:
      "Listings are reviewed for core details like location, amenities, capacity, pricing, and suitability before they are presented for booking.",
  },
  {
    question: "Who sets the hourly price?",
    answer:
      "Hosts set their own rates. RoomSlot displays available pricing and any applicable fees before checkout so bookers can compare clearly.",
  },
  {
    question: "How do payouts work for hosts?",
    answer:
      "Hosts receive payouts for completed bookings based on the agreed commercial terms. The exact flow is reviewed during host onboarding.",
  },
  {
    question: "What if I need help before a booking?",
    answer:
      "You can contact the RoomSlot team with questions about space fit, recurring requirements, host onboarding, or booking support.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
              FAQ
            </Badge>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Answers for bookers, hosts, and teams using RoomSlot.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-light text-muted-foreground">
              Find quick answers about booking spaces, listing venues, pricing, verification, and support.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-4">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <HelpCircle className="mb-3 h-5 w-5 text-primary" />
                  <CardTitle>Common Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-light leading-6 text-muted-foreground">
                    These cover the main questions people ask before booking or listing a space.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <LifeBuoy className="mb-3 h-5 w-5 text-primary" />
                  <CardTitle>Need more detail?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Contact Support
                      <MessageSquare className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-6">
                <Accordion>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Still deciding where to start?</h2>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                See the booking flow or browse available spaces near you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" asChild>
                <Link href="/how-it-works">How It Works</Link>
              </Button>
              <Button asChild>
                <Link href="/explore">
                  Explore Spaces
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
