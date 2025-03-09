"use client";

import { signUp } from "@/server/user";
import { useRouter } from "next/navigation";

export default function SignUpButton() {
  const router = useRouter();

  const handleSignUp = async () => {
    await signUp();
    router.refresh();
  };

  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={handleSignUp}
    >
      Sign Up
    </button>
  );
} 
