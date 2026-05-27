import Link from "next/link";
import { ArrowRight, Check, HelpCircle, IndianRupee, ReceiptText, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Bookers",
    price: "Free to browse",
    description: "Search spaces, compare amenities, and pay only when you reserve a slot.",
    features: ["No browsing fee", "Transparent hourly prices", "Secure checkout", "Booking support"],
  },
  {
    name: "Hosts",
    price: "Commission on bookings",
    description: "List your space with no setup fee and pay a platform fee only on completed bookings.",
    features: ["No upfront listing fee", "Host dashboard", "Calendar and pricing controls", "Payout support"],
  },
  {
    name: "Teams",
    price: "Custom",
    description: "For academies, franchises, and institutions that need recurring space access at scale.",
    features: ["Bulk booking support", "Multi-location planning", "Custom invoicing", "Priority coordination"],
  },
];

const feeNotes = [
  "Hourly space rates are set by each host and shown before checkout.",
  "Applicable taxes, payment charges, and cancellation terms are displayed during booking.",
  "Hosts can review final commercial terms before listings go live.",
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
              Pricing / Fees
            </Badge>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transparent pricing for bookers, hosts, and growing teams.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-light text-muted-foreground">
              RoomSlot keeps the booking cost clear before payment and helps hosts understand what they earn from every confirmed slot.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className="flex flex-col border-border/50 shadow-sm" hoverEffect>
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IndianRupee className="h-5 w-5" />
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="pt-3 text-2xl font-bold text-foreground">{plan.price}</p>
                  <p className="text-sm font-light leading-6 text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.name === "Teams" ? "outline" : "default"} asChild>
                    <Link href={plan.name === "Bookers" ? "/explore" : "/contact"}>
                      {plan.name === "Bookers" ? "Find a Space" : "Talk to Us"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Fee Clarity
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                What affects the final booking price?
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {feeNotes.map((note) => (
                <div key={note} className="flex items-start gap-4 rounded-lg border border-border/50 bg-background p-5 shadow-sm">
                  <ReceiptText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-light leading-6 text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-border/50 shadow-sm">
              <CardHeader>
                <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                <CardTitle>No hidden discovery charges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-light leading-6 text-muted-foreground">
                  Bookers can search and compare spaces freely. Any payable amount is shown before checkout.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm">
              <CardHeader>
                <HelpCircle className="mb-3 h-5 w-5 text-primary" />
                <CardTitle>Need a custom setup?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-light leading-6 text-muted-foreground">
                  For recurring bookings, school networks, or large host portfolios, contact us for custom terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
