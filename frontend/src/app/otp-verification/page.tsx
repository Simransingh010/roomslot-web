import { Suspense } from "react";
import { OtpVerificationScreen } from "@/components/auth/otp-verification-screen";

export default function OtpVerificationPage() {
  return (
    <Suspense fallback={null}>
      <OtpVerificationScreen />
    </Suspense>
  );
}
