import { NextResponse } from "next/server"
import { convertImage } from "@/utils/imageConvert"
import { v4 as uuid } from "uuid"
import fs from "fs"
import path from "path"

export async function POST(req) {
  try {

    const data = await req.formData()

    const file = data.get("file")
    const type = data.get("type")

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    if (!type) {
      return NextResponse.json({ error: "No conversion type provided" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const converted = await convertImage(buffer, type)

    if (!converted) {
      return NextResponse.json({ error: "Image conversion failed" }, { status: 500 })
    }

    // ✅ decide file extension
    let ext = "jpg"

    if (type === "jpeg-to-png") ext = "png"
    if (type === "png-to-jpeg") ext = "jpg"
    if (type === "webp-to-jpeg") ext = "jpg"
    if (type === "jpg-to-webp") ext = "webp"
    if (type === "png-to-webp") ext = "webp"
    if (type === "svg-to-png") ext = "png"
    if (type === "webp-to-png") ext = "png"
    if (type === "webp-to-jpeg") ext = "jpg"
    if (type === "heic-to-jpg") ext ="jpg"

    const name = uuid() + "." + ext

    const filePath = path.join(process.cwd(), "public", name)

    fs.writeFileSync(filePath, converted)

    return NextResponse.json({
      url: `/${name}`
    })

  } catch (error) {

    console.error("Conversion Error:", error)

    return NextResponse.json(
      { error: "Server error during conversion" },
      { status: 500 }
    )
  }
}