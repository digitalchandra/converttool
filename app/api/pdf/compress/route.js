import { NextResponse } from "next/server"

export async function POST(req) {

  try {

    const data = await req.formData()
    const file = data.get("file")

    const bytes = await file.arrayBuffer()

    // Placeholder compression
    const buffer = Buffer.from(bytes)

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=compressed.pdf"
      }
    })

  } catch (err) {

    return NextResponse.json({ error: err.message })
  }
}