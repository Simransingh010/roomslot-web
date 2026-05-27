"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, RotateCcw } from "lucide-react";
import { AuthBrandHeader, AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function OtpVerificationScreen() {
  const searchParams = useSearchParams();
  const nextParam = searchParams.get("next");
  const nextHref = nextParam === "reset-password" ? "/reset-password" : "/role-selection";
  const nextLabel = nextParam === "reset-password" ? "Verify and reset password" : "Verify and choose role";

  return (
    <AuthShell
      badge="OTP Verification"
      title="Verify your account with a one-time code."
      description="Enter the code sent to your email or phone. This screen is wired for navigation until backend OTP delivery is added."
      asideItems={["6 digit code", "Resend option", "Next screen routing"]}
    >
      <AuthBrandHeader
        title="OTP verification"
        description="Use any code for now. Continue moves to the next frontend screen."
      />
      <CardContent>
        <form className="space-y-5">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Input
                key={index}
                inputMode="numeric"
                maxLength={1}
                aria-label={`OTP digit ${index + 1}`}
                className="h-12 text-center text-lg font-bold"
              />
            ))}
          </div>
          <Button className="w-full" asChild>
            <Link href={nextHref}>
              {nextLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button type="button" variant="outline" className="w-full">
            <RotateCcw className="h-4 w-4" />
            Resend OTP
          </Button>
        </form>
      </CardContent>
    </AuthShell>
  );
}
