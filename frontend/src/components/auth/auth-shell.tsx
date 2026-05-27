import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AuthShellProps = {
  badge: string;
  title: string;
  description: string;
  children: React.ReactNode;
  asideTitle?: string;
  asideDescription?: string;
  asideItems?: string[];
};

export function AuthShell({
  badge,
  title,
  description,
  children,
  asideTitle = "RoomSlot account",
  asideDescription = "One account for booking spaces, hosting venues, and managing recurring sessions.",
  asideItems = ["Book verified spaces", "Manage host listings", "Track session details"],
}: AuthShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-mesh-hero px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1 text-xs">
                {badge}
              </Badge>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light text-muted-foreground">
                {description}
              </p>
              <Card className="mt-8 max-w-xl border-border/50 shadow-sm">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <CardTitle>{asideTitle}</CardTitle>
                  <p className="text-sm font-light leading-6 text-muted-foreground">
                    {asideDescription}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {asideItems.map((item) => (
                      <li key={item} className="rounded-lg border border-border/50 bg-background p-3 text-sm font-medium text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="mx-auto w-full max-w-md border-border/50 shadow-sm">
              {children}
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function AuthBrandHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardHeader>
      <Link href="/" className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Sparkles className="h-5 w-5" />
      </Link>
      <CardTitle>{title}</CardTitle>
      <p className="text-sm font-light text-muted-foreground">{description}</p>
    </CardHeader>
  );
}
