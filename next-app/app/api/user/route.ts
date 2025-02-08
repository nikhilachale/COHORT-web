import { authOptions } from "@/app/lib/auth"; // ✅ Fix: Use `authOptions`
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions); // ✅ Fix: Correct parameter

  return NextResponse.json({ session });
} 