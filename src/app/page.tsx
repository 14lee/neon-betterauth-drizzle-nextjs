import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOut from "./signout";
import SignInButton from "./signin-button";
import SignUpButton from "./signup-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <div className="flex gap-3">
        <SignInButton />
        <SignUpButton />
        <SignOut />
      </div>
      <p>{!session ? "Not authenticated" : session.user.name}</p>
      <Link href="/dashboard" className="bg-neutral-700 text-white p-2 rounded-md">Dashboard (only signed in users can see this page)</Link>
    </main>
  );
}
