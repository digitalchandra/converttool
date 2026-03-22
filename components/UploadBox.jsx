"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import ConvertButton from "./ConvertButton"

export default function UploadBox({ type }) {

  const [file, setFile] = useState(null)
  const [download, setDownload] = useState(null)

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0])
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
        className="border-2 border-dashed border-gray-300 rounded-xl p-16 bg-white cursor-pointer hover:border-blue-500"
      >

        <input {...getInputProps()} />

        <div className="flex flex-col items-center">

          <div className="text-5xl mb-4">⬆</div>

          <p className="text-lg font-semibold">
            Drag & Drop image here
          </p>

          <p className="text-gray-500 text-sm">
            or click to upload
          </p>

        </div>

      </div>

      {/* File Name */}

      {file && (
        <p className="mt-4 text-sm text-gray-600">
          Selected: {file.name}
        </p>
      )}

      {/* Convert Button */}

      <ConvertButton
        file={file}
        type={type}
        onComplete={setDownload}
      />

      {/* Download */}

      {download && (

        <div className="mt-6">

          <a
            href={download}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Download Image
          </a>

        </div>

      )}

    </div>
  )
}