"use client"

import { useState } from "react"

export default function ImageSizeIncreaser(){

  const [file,setFile] = useState(null)
  const [width,setWidth] = useState("")
  const [height,setHeight] = useState("")
  const [preview,setPreview] = useState(null)

  const handleUpload = async () => {

    const formData = new FormData()
    formData.append("file",file)
    formData.append("width",width)
    formData.append("height",height)

    const res = await fetch("/api/increase-image",{
      method:"POST",
      body:formData
    })

    const blob = await res.blob()

    setPreview(URL.createObjectURL(blob))
  }

  return(

    <div className="border p-6 rounded-xl text-center">

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <div className="flex gap-4 mt-4 justify-center">

        <input
          type="number"
          placeholder="Width"
          className="border p-2"
          value={width}
          onChange={(e)=>setWidth(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height"
          className="border p-2"
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
        />

      </div>

      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Increase Size
      </button>

      {preview && (
        <div className="mt-6">

          <img
            src={preview}
            className="max-w-full mx-auto"
          />

          <a
            href={preview}
            download="increased-image.jpg"
            className="block mt-4 text-blue-600"
          >
            Download
          </a>

        </div>
      )}

    </div>

  )
}