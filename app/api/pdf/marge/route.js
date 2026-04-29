import {PDFDocument} from "pdf-lib"
import { NextResponse } from "next/server"
import { validateFile } from "@/utils/security"


export async function POST(req) {
    try{
        const data = req.formData()
        const files = data.get("file")
        const pdf = await PDFDocument.load(bytes)
        const newPdf = await PDFDocument.create()
        const [page] = await  newPdf.copyPages(pdf, [0])
        newPdf.addPage(page)
        const bytes = await file.arrayBuffer()
    

        if(files.lenght <2){
            return NextResponse.json({error:"Upload At Last 2 PDFs"})
        }

        const mergePdf = await PDFDocument.create()

        for(const file of files){
            validateFile(file, ["application/pdf"])

           

            const pages = await margePdf.copyPages(pdf, pdf.getPageIndices())

            pages.forEach(p => margePdf.save(p));
        }
        const pdfBytes = await mergePdf.save()
        return new NextResponse(pdfBytes,{
            headers:{
                "Content -Type" : "application/pdf",
                "Content-Disposition" : "attachment; filename=marge.pdf"
            }
        })
      
    }  catch(err){
        return NextResponse.json({error : err.message})
    }
    
}