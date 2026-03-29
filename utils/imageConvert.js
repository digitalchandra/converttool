import sharp from "sharp"

export async function convertImage(buffer,type){

    if(type === "png-to-jpeg"){
        return await sharp(buffer).jpeg().toBuffer()
    }

    if(type === "jpeg-to-png"){
        return await sharp(buffer).png().toBuffer()
    }

    if(type === "webp-to-jpeg"){
        return await sharp(buffer).jpeg().toBuffer()
    }

    if(type === "compress"){
        return await sharp(buffer).jpeg({quality:60}).toBuffer()
    }

    // ⭐ Increase Image Size / Quality
  if (type === "increase-size") {

    const { width, height, quality = 100 } = options

    return await sharp(buffer)
      .resize(width, height, {
        fit: "fill"
      })
      .jpeg({
        quality: quality
      })
      .toBuffer()
  }

}