"use client";

import { signIn } from "@/server/user";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn();
    router.refresh();
  };

  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={handleSignIn}
    >
      Sign In
    </button>
  );
} 
