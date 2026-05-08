import { PDFDocument } from "pdf-lib"
import { NextResponse } from "next/server"
import { validateFile } from "@/utils/security"

export async function POST(req) {
  try {

    const data = await req.formData()

    const files = data.getAll("files")

    if (!files || files.length < 2) {
      return NextResponse.json(
        { error: "Please upload at least 2 PDF files." },
        { status: 400 }
      )
    }

    const mergedPdf = await PDFDocument.create()

    for (const file of files) {

      validateFile(file, ["application/pdf"])

      const bytes = await file.arrayBuffer()

      const pdf = await PDFDocument.load(bytes)

      const pages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      )

      pages.forEach((page) => {
        mergedPdf.addPage(page)
      })
    }

    const pdfBytes = await mergedPdf.save()

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="merged.pdf"'
      }
    })

  } catch (err) {

    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    )
  }
}