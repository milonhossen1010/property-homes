import { NextResponse } from "next/server";

export function POST(req) {
  
  return NextResponse.json({
    name: "Im a Post Request."
  })
}

export function GET() {
  return NextResponse.json({
    name: "I'm get request"
  })
}