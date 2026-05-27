import Link from "next/link";
import { ArrowRight, Building2, Lock, Mail, Sparkles, UserRound } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const accountTypes = [
  {
    title: "Book spaces",
    description: "Find venues for classes, workshops, coaching, and recurring sessions.",
    icon: UserRound,
  },
  {
    title: "Host spaces",
    description: "List classrooms, studios, gyms, and activity rooms for hourly bookings.",
    icon: Building2,
  },
];

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
                Sign Up
              </Badge>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Create your RoomSlot account.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light text-muted-foreground">
                Start booking flexible spaces or list your venue for instructors, coaches, and creators across India.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {accountTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <Card key={type.title} className="border-border/50 shadow-sm">
                      <CardHeader>
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle>{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-light leading-6 text-muted-foreground">{type.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="mx-auto w-full max-w-md border-border/50 shadow-sm">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <CardTitle>Get started</CardTitle>
                <p className="text-sm font-light text-muted-foreground">
                  Create an account for booking or hosting.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Full name
                    <Input placeholder="Your name" icon={<UserRound />} />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Email
                    <Input type="email" placeholder="you@example.com" icon={<Mail />} />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Account type
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>I want to book spaces</option>
                      <option>I want to list my space</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Password
                    <Input type="password" placeholder="Create password" icon={<Lock />} />
                  </label>
                  <Button type="button" className="w-full">
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-6 text-center text-sm font-light text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-primary hover:underline">
                    Log in
                  </Link>
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
