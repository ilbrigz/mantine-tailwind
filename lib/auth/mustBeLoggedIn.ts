"use server";
import { auth } from ".";
import { redirect } from "next/navigation";

// how to check if logged in using next-auth
export async function mustBeLoggedIn() {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }
  return session;
}
