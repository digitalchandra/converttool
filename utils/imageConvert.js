import sharp from "sharp"
import heicConvert from "heic-convert"

export async function convertImage(buffer, type) {

  // PNG → JPEG
  if (type === "png-to-jpeg") {
    return await sharp(buffer).jpeg().toBuffer()
  }

  // JPEG → PNG
  if (type === "jpeg-to-png") {
    return await sharp(buffer).png().toBuffer()
  }

  // WEBP → JPEG
  if (type === "webp-to-jpg") {
    return await sharp(buffer).jpeg().toBuffer()
  }

  // WEBP → PNG
  if (type === "webp-to-png") {
    return await sharp(buffer).png().toBuffer()
  }

  // PNG → WEBP
  if (type === "png-to-webp") {
    return await sharp(buffer).webp().toBuffer()
  }

  // JPG → WEBP
  if (type === "jpg-to-webp") {
    return await sharp(buffer).webp().toBuffer()
  }

  // SVG → PNG
  if (type === "svg-to-png") {
    return await sharp(buffer).png().toBuffer()
  }


// GIF to JPG 
  if (type === "gif-to-jpg") {
    return await sharp(buffer, { pages: 1 })
      .jpeg()
      .toBuffer()
  }
// Heic to Jpg 
  if (type === "heic-to-jpg") {

    const outputBuffer = await heicConvert({
      buffer: buffer,
      format: "JPEG",
      quality: 1
    })
  
    return outputBuffer
  }

    // Image compression
    if (type === "compress") {
      return await sharp(buffer).jpeg({ quality: 60 }).toBuffer()
    }
  

  return null
}