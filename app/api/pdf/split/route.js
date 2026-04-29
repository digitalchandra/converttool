import {PDFDocument} from "pdf-lib"
import { NextResponse } from "next/server"



export async function POST(req) {
    try{
        const data = req.formData()

        const file = data.get("file")

        const bytes = await file.arrayBuffer()

        const pdf = await PDFDocument.load(bytes)

        const newPdf = await PDFDocument.create()

        const [page] = await  newPdf.copyPages(pdf, [0])

        newPdf.addPage(page)

        const pdfBytes = await newPdf.save()

        return new NextResponse(pdfBytes,{
            headers:{
                "Content-Type": "application/pdf"
            }
        })
    } catch(err){
        return NextResponse.json({ error: err.message })
    }  
}