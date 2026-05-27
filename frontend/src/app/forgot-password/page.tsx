import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AuthBrandHeader, AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      badge="Forgot Password"
      title="Recover access to your RoomSlot account."
      description="Enter the email linked to your account. The next screen collects the verification OTP."
      asideItems={["Enter email", "Verify OTP", "Reset password"]}
    >
      <AuthBrandHeader
        title="Forgot password"
        description="Continue moves to OTP verification while backend delivery is pending."
      />
      <CardContent>
        <form className="space-y-4">
          <label className="space-y-2 text-sm font-medium text-foreground">
            Email
            <Input type="email" placeholder="you@example.com" icon={<Mail />} />
          </label>
          <Button className="w-full" asChild>
            <Link href="/otp-verification?next=reset-password">
              Send OTP
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </form>
        <p className="mt-6 text-center text-sm font-light text-muted-foreground">
          Remembered it?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Back to login
          </Link>
        </p>
      </CardContent>
    </AuthShell>
  );
}
