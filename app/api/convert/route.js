export const runtime = "nodejs"
import { convertImage } from "@/utils/imageConvert"

export async function POST(req) {
  try {

    const data = await req.formData()

    const file = data.get("file")
    const type = data.get("type")

    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 })
    }

    if (!type) {
      return new Response(JSON.stringify({ error: "No conversion type provided" }), { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const converted = await convertImage(buffer, type)

    if (!converted) {
      return new Response(JSON.stringify({ error: "Image conversion failed" }), { status: 500 })
    }

    let contentType = "image/jpeg"

    if (type === "jpeg-to-png") contentType = "image/png"
    if (type === "png-to-jpeg") contentType = "image/jpeg"
    if (type === "webp-to-jpeg") contentType = "image/jpeg"
    if (type === "jpg-to-webp") contentType = "image/webp"
    if (type === "png-to-webp") contentType = "image/webp"
    if (type === "svg-to-png") contentType = "image/png"
    if (type === "webp-to-png") contentType = "image/png"
    if (type === "heic-to-jpg") contentType = "image/jpeg"

    return new Response(converted, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": "attachment"
      }
    })

  } catch (error) {

    console.error("Conversion Error:", error)

    return new Response(
      JSON.stringify({ error: "Server error during conversion" }),
      { status: 500 }
    )
  }
}