"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import ConvertButton from "./ConvertButton"

export default function UploadBox({
  type,
  accept = { "image/*": [] },
  multiple = false,
  label = "Drag & Drop file here",
  showPreview = true,
}) {

  const [files, setFiles] = useState([])
  const [preview, setPreview] = useState(null)
  const [download, setDownload] = useState(null)

  const onDrop = (acceptedFiles) => {

    if (!acceptedFiles || acceptedFiles.length === 0) return

    setFiles(multiple ? acceptedFiles : [acceptedFiles[0]])

    // Only preview for images
    if (showPreview && acceptedFiles[0].type.startsWith("image")) {
      setPreview(URL.createObjectURL(acceptedFiles[0]))
    } else {
      setPreview(null)
    }

    setDownload(null)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple,
  })

  return (
    <div className="text-center">

      {/* Upload Box */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-16 bg-white cursor-pointer hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        <p>{label}</p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded mb-2"
            >
              <span>
                {i + 1}. {f.name}
              </span>

              <span className="text-xs text-gray-500">
                {(f.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Preview (only for images) */}
      {preview && (
        <div className="mt-6">
          <p className="font-semibold">Preview</p>
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-contain mx-auto mt-2"
          />
        </div>
      )}

      {/* Convert Button */}
      <ConvertButton
        file={multiple ? files : files[0]}
        type={type}
        onComplete={setDownload}
      />

      {/* Download */}
      {download && (
        <div className="mt-8">

          <a
            href={download}
            download
            className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Download File
          </a>

        </div>
      )}

    </div>
  )
}