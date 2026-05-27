import { Sparkles, ShieldCheck, Users, Clock3, Target, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Trust & Verification",
    description:
      "Every space listing is reviewed so instructors and creators can book with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Booking",
    description:
      "Hourly booking options make it easy to run classes and sessions without long-term lock-ins.",
    icon: Clock3,
  },
  {
    title: "Community First",
    description:
      "We build for teachers, coaches, and space owners who power local communities every day.",
    icon: Users,
  },
];

const stats = [
  { label: "Instructors & creators", value: "10,000+" },
  { label: "Verified spaces", value: "1,200+" },
  { label: "Cities served", value: "35+" },
  { label: "Avg. booking completion", value: "98%" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
              About RoomSlot
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl">
              Helping people discover, book, and grow with the right spaces.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light max-w-3xl">
              RoomSlot connects instructors, communities, and space owners through a simple booking
              experience designed for classes, workshops, and recurring sessions.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item) => (
              <Card key={item.label} className="border-border/50 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground font-light">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                What Drives Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Built with clarity, reliability, and care
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="border-border/50 bg-card shadow-sm">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-light">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mx-auto max-w-7xl rounded-2xl border border-border/50 bg-card p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                  Our Mission
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Make space access effortless for every class and community.
                </h3>
                <p className="mt-4 text-muted-foreground font-light">
                  From dance teachers to academic coaches, we believe everyone should be able to
                  find the right venue quickly and transparently. We focus on reducing booking
                  friction so people can spend more time teaching and creating.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/50 p-4 bg-background/50">
                  <Target className="h-5 w-5 text-primary mb-2" />
                  <p className="font-semibold text-foreground">Clear discovery</p>
                  <p className="text-sm text-muted-foreground font-light mt-1">
                    Filter by city, activity type, and pricing in seconds.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 p-4 bg-background/50">
                  <HeartHandshake className="h-5 w-5 text-primary mb-2" />
                  <p className="font-semibold text-foreground">Host growth</p>
                  <p className="text-sm text-muted-foreground font-light mt-1">
                    Help owners increase utilization with quality bookings.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 p-4 bg-background/50">
                  <Sparkles className="h-5 w-5 text-primary mb-2" />
                  <p className="font-semibold text-foreground">Simple experience</p>
                  <p className="text-sm text-muted-foreground font-light mt-1">
                    Keep booking flow intuitive on mobile and desktop.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 p-4 bg-background/50">
                  <Users className="h-5 w-5 text-primary mb-2" />
                  <p className="font-semibold text-foreground">Local impact</p>
                  <p className="text-sm text-muted-foreground font-light mt-1">
                    Support educators and creators building neighborhood communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
