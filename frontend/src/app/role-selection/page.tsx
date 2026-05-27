import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Layers3 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roles = [
  {
    title: "Instructor",
    description: "Book spaces for classes, workshops, practice sessions, and recurring batches.",
    icon: GraduationCap,
    href: "/explore",
  },
  {
    title: "Host",
    description: "List your classroom, studio, gym, or activity room and manage bookings.",
    icon: Building2,
    href: "/become-a-host",
  },
  {
    title: "Both",
    description: "Book spaces when needed and host your own available slots from one account.",
    icon: Layers3,
    href: "/explore",
  },
];

export default function RoleSelectionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
              Role Selection
            </Badge>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Choose how you want to use RoomSlot.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-light text-muted-foreground">
              Select a role to continue through the frontend flow. This choice can be stored in the backend later.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <Card key={role.title} className="flex flex-col border-border/50 shadow-sm" hoverEffect>
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-between gap-6">
                      <p className="text-sm font-light leading-6 text-muted-foreground">{role.description}</p>
                      <Button asChild>
                        <Link href={role.href}>
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
