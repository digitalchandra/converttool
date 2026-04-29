import { PDFDocument } from "pdf-lib";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        const data = await req.formData()
        const file = data.get("file")

        const bytes = await file.arrayBuffer()

        const pdf =await PDFDocument.create()

        const image = await pdf.embedJpg(bytes)

        const page = pdf.addPage([image.width,  image.height])

        page.drawImage(image,{
            x:0,
            y:0,
            width: image.width,
            height:image.height
        })
        const pdfBytes = await pdf.save()

        return new NextResponse(pdfBytes,{
            headers:{
            "Content-Type": "application/pdf",
            "Content-Disposition": "attahment; filename=image.pdf"
            }
        })



    } catch(err){
        return NextResponse.json({error:err.message})
    }
}