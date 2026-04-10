"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import ConvertButton from "./ConvertButton"

export default function UploadBox({ type }) {

  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [download, setDownload] = useState(null)

  const onDrop = (acceptedFiles) => {
    const selected = acceptedFiles[0]
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
    setDownload(null)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] }
  })

  return (
    <div className="text-center">

      {/* Upload Box */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-16 bg-white cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>Drag & Drop image here</p>
      </div>

      {/* Preview */}
      {preview && (
        <div className="mt-6">
          <p className="font-semibold">Original Image</p>
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-contain mx-auto mt-2"
          />
        </div>
      )}

      {/* Convert Button */}
      <ConvertButton
        file={file}
        type={type}
        onComplete={setDownload}
      />

      {/* Converted Result */}
      {download && (
        <div className="mt-8">

          <p className="font-semibold">Converted Image</p>

          <img
            src={download}
            alt="converted"
            className="w-32 h-32 object-contain mx-auto mt-2"
          />

          <a
            href={download}
            download
            className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Download Image
          </a>

        </div>
      )}

    </div>
  )
}