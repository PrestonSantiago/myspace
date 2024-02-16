import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { use } from "react";

export async function GET(request: Request) {
  const users = await prisma.user.findMany();

  console.log(users);

  return NextResponse.json(users);
}
