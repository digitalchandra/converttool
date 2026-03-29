"use client"

import { useState } from "react"
import * as pdfjsLib from "pdfjs-dist"

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"

export default function PdfToImage() {

  const [images, setImages] = useState([])

  const handleFile = async (e) => {

    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = async () => {

      const typedarray = new Uint8Array(reader.result)

      const pdf = await pdfjsLib.getDocument(typedarray).promise

      let imgList = []

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

        const page = await pdf.getPage(pageNum)

        const viewport = page.getViewport({ scale: 2 })

        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")

        canvas.width = viewport.width
        canvas.height = viewport.height

        await page.render({
          canvasContext: context,
          viewport
        }).promise

        const image = canvas.toDataURL("image/jpeg", 1)

        imgList.push(image)
      }

      setImages(imgList)
    }

    reader.readAsArrayBuffer(file)
  }

  return (
    <div className="max-w-4xl mx-auto py-12">

      <h1 className="text-3xl font-bold text-center mb-8">
        PDF to JPEG Converter
      </h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFile}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {images.map((img, i) => (
          <div key={i} className="border p-4 rounded">

            <img src={img} alt="converted" />

            <a
              href={img}
              download={`page-${i + 1}.jpeg`}
              className="block mt-3 bg-blue-600 text-white text-center py-2 rounded"
            >
              Download JPEG
            </a>

          </div>
        ))}

      </div>

    </div>
  )
}