"use client"

import { useState } from "react"

export default function ConvertButton({ file, type, onComplete }) {

  const [loading, setLoading] = useState(false)

  const handleConvert = async () => {

    if (!file || (Array.isArray(file) && file.length === 0)) {
      alert(
        type === "marge-pdf"
          ? "Please upload PDF files first"
          : "Please upload an image first"
      )
      return
    }

    setLoading(true)

    try {

      const formData = new FormData()

      // Multiple files support
      if (Array.isArray(file)) {

        file.forEach((f) => {
          formData.append("files", f)
        })

      } else {

        formData.append("file", file)

      }

      formData.append("type", type)

      // Dynamic API Route
      const apiRoute =
        type === "merge-pdf"
          ? "/api/merge-pdf"
          : "/api/convert"

      const res = await fetch(apiRoute, {
        method: "POST",
        body: formData
      })

      if (!res.ok) {
        throw new Error("Server error during conversion")
      }

      // Receive converted file as blob
      const blob = await res.blob()

      const url = URL.createObjectURL(blob)

      if (onComplete) {
        onComplete(url)
      }

    } catch (error) {

      console.error("Conversion Error:", error)

      alert("Conversion failed. Please try again.")

    } finally {

      setLoading(false)

    }

  }

  return (

    <button
      onClick={handleConvert}
      disabled={loading}
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition disabled:opacity-50"
    >

      {
        loading
          ? "Processing..."
          : type === "merge-pdf"
          ? "Merge PDF"
          : "Convert Image"
      }

    </button>

  )

}