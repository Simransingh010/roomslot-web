import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { AuthBrandHeader, AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <AuthShell
      badge="Login"
      title="Welcome back to RoomSlot."
      description="Access bookings, saved spaces, host tools, and recurring session details from one place."
    >
      <AuthBrandHeader
        title="Log in to your account"
        description="Frontend-only flow for now. Continue moves you to role selection."
      />
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
            <Link href="/forgot-password" className="font-medium text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full" asChild>
            <Link href="/role-selection">
              Log in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </form>
        <p className="mt-6 text-center text-sm font-light text-muted-foreground">
          New to RoomSlot?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </CardContent>
    </AuthShell>
  );
}
