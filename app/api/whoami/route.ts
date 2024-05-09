import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

// how to make a simple route to get authenticated user
export const GET = auth(async ({ auth }) => {
  return NextResponse.json({ user: auth?.user?.name });
});

export const runtime = "edge";
