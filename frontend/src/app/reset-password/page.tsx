import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { AuthBrandHeader, AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      badge="Reset Password"
      title="Set a new password for your account."
      description="Create a new password after OTP verification. Backend validation can connect to this screen later."
      asideItems={["New password", "Confirm password", "Return to login"]}
    >
      <AuthBrandHeader
        title="Reset password"
        description="Continue returns to login until backend password reset is connected."
      />
      <CardContent>
        <form className="space-y-4">
          <label className="space-y-2 text-sm font-medium text-foreground">
            New password
            <Input type="password" placeholder="Create new password" icon={<Lock />} />
          </label>
          <label className="space-y-2 text-sm font-medium text-foreground">
            Confirm password
            <Input type="password" placeholder="Confirm new password" icon={<Lock />} />
          </label>
          <Button className="w-full" asChild>
            <Link href="/login">
              Update Password
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </form>
      </CardContent>
    </AuthShell>
  );
}
