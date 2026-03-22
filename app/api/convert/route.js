import { NextResponse } from "next/server"
import { convertImage } from "@/utils/imageConvert"
import { v4 as uuid } from "uuid"
import fs from "fs"
import path from "path"

export async function POST(req){

  const data = await req.formData()

  const file = data.get("file")
  const type = data.get("type")

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const converted = await convertImage(buffer,type)

  const name = uuid()+".jpg"

  const filePath = path.join(process.cwd(),"public",name)

  fs.writeFileSync(filePath,converted)

  return NextResponse.json({
    url:`/${name}`
  })
}