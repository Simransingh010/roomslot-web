import Link from "next/link";
import { ArrowRight, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
                Login
              </Badge>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Welcome back to RoomSlot.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light text-muted-foreground">
                Access bookings, saved spaces, host tools, and recurring session details from one place.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {["Manage bookings", "Track host activity"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4 shadow-sm">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <p className="text-sm font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="mx-auto w-full max-w-md border-border/50 shadow-sm">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <CardTitle>Log in to your account</CardTitle>
                <p className="text-sm font-light text-muted-foreground">
                  Enter your email and password to continue.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Email
                    <Input type="email" placeholder="you@example.com" icon={<Mail />} />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-foreground">
                    Password
                    <Input type="password" placeholder="Enter password" icon={<Lock />} />
                  </label>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <label className="flex items-center gap-2 text-muted-foreground">
                      <input type="checkbox" className="h-4 w-4 rounded border-input accent-primary" />
                      Remember me
                    </label>
                    <Link href="/contact" className="font-medium text-primary hover:underline">
                      Need help?
                    </Link>
                  </div>
                  <Button type="button" className="w-full">
                    Log in
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-6 text-center text-sm font-light text-muted-foreground">
                  New to RoomSlot?{" "}
                  <Link href="/signup" className="font-medium text-primary hover:underline">
                    Create an account
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
