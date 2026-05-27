import Link from "next/link";
import { ArrowRight, Lock, Mail, Phone, UserRound } from "lucide-react";
import { AuthBrandHeader, AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <AuthShell
      badge="Register"
      title="Create your RoomSlot account."
      description="Start booking flexible spaces or list your venue for instructors, coaches, and creators across India."
      asideItems={["Create profile", "Verify OTP", "Choose role"]}
    >
      <AuthBrandHeader
        title="Register"
        description="Enter your details. Continue sends you to OTP verification for now."
      />
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
            Phone
            <Input placeholder="+91" icon={<Phone />} />
          </label>
          <label className="space-y-2 text-sm font-medium text-foreground">
            Password
            <Input type="password" placeholder="Create password" icon={<Lock />} />
          </label>
          <Button className="w-full" asChild>
            <Link href="/otp-verification?next=role-selection">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </form>
        <p className="mt-6 text-center text-sm font-light text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      </CardContent>
    </AuthShell>
  );
}
