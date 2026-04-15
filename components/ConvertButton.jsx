"use client"

import { useState } from "react"

export default function ConvertButton({ file, type, onComplete }) {

  const [loading, setLoading] = useState(false)

  const handleConvert = async () => {

    if (!file) {
      alert("Please upload an image first")
      return
    }

    setLoading(true)

    try {

      const formData = new FormData()
      formData.append("file", file)
      formData.append("type", type)

      const res = await fetch("/api/convert", {
        method: "POST",
        body: formData
      })

      // check if request failed
      if (!res.ok) {
        throw new Error("Server error during conversion")
      }
    

      // safely parse JSON
      const blob = await res.blob()
      const url= URL.createObjectURL(blob)

      if (onComplete) {
        onComplete(url)
      } else {
        throw new Error("Invalid response from server")
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

      {loading ? "Converting..." : "Convert Image"}

    </button>

  )

}