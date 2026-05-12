"use client"

import { useState } from "react"
import {
  Copy,
  Trash2,
  Link2Off,
  Code2,
  Eraser,
  FileText
} from "lucide-react"

import ConverterSidebar from "@/components/ConverterSidebar"

export default function OnlineNotepad() {

  const [text, setText] = useState("")

  // Remove URLs
  const removeLinks = () => {
    const cleaned = text.replace(/https?:\/\/\S+/g, "")
    setText(cleaned)
  }

  // Remove HTML
  const removeHTML = () => {
    const cleaned = text.replace(/<[^>]*>/g, "")
    setText(cleaned)
  }

  // Remove Extra Spaces
  const removeSpaces = () => {
    const cleaned = text.replace(/\s+/g, " ").trim()
    setText(cleaned)
  }

  // Copy Text
  const copyText = async () => {
    await navigator.clipboard.writeText(text)
    alert("Copied Successfully")
  }

  // Clear
  const clearText = () => {
    setText("")
  }

  // Download TXT
  const downloadText = () => {

    const blob = new Blob([text], {
      type: "text/plain"
    })

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "notes.txt"
    a.click()

    URL.revokeObjectURL(url)
  }

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length

  const lines =
    text === ""
      ? 0
      : text.split("\n").length

  return (

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

      {/* LEFT SIDE */}

      <div className="lg:col-span-3">

        {/* HERO */}

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl mb-8">

          <div className="flex items-center gap-3 mb-4">
            <FileText size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              Online Notepad
            </h1>
          </div>

          <p className="text-lg text-blue-100 max-w-3xl leading-8">
            Write notes, clean text, remove links,
            remove HTML tags and edit content instantly
            using this free online developer notepad tool.
          </p>

        </div>

        {/* TOOLBAR */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5 mb-6">

          <div className="flex flex-wrap gap-3">

            <button
              onClick={removeLinks}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-2xl font-medium"
            >
              <Link2Off size={18} />
              Remove Links
            </button>

            <button
              onClick={removeHTML}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-3 rounded-2xl font-medium"
            >
              <Code2 size={18} />
              Remove HTML
            </button>

            <button
              onClick={removeSpaces}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-5 py-3 rounded-2xl font-medium"
            >
              <Eraser size={18} />
              Remove Spaces
            </button>

            <button
              onClick={copyText}
              className="flex items-center gap-2 bg-black hover:bg-gray-800 transition text-white px-5 py-3 rounded-2xl font-medium"
            >
              <Copy size={18} />
              Copy
            </button>

            <button
              onClick={downloadText}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-3 rounded-2xl font-medium"
            >
              <FileText size={18} />
              Download
            </button>

            <button
              onClick={clearText}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl font-medium"
            >
              <Trash2 size={18} />
              Clear
            </button>

          </div>

        </div>

        {/* TEXTAREA */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

          <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">

            <h2 className="font-semibold text-lg">
              Text Editor
            </h2>

            <div className="text-sm text-gray-500">
              Auto Clean Utility
            </div>

          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write or paste your content here..."
            className="w-full h-[650px] resize-none outline-none p-6 text-lg leading-8 bg-gray-50"
          />

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">

            <p className="text-gray-500 text-sm mb-2">
              Characters
            </p>

            <h3 className="text-3xl font-bold">
              {text.length}
            </h3>

          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">

            <p className="text-gray-500 text-sm mb-2">
              Words
            </p>

            <h3 className="text-3xl font-bold">
              {words}
            </h3>

          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">

            <p className="text-gray-500 text-sm mb-2">
              Lines
            </p>

            <h3 className="text-3xl font-bold">
              {lines}
            </h3>

          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">

            <p className="text-gray-500 text-sm mb-2">
              Reading Time
            </p>

            <h3 className="text-3xl font-bold">
              {Math.ceil(words / 200) || 0}m
            </h3>

          </div>

        </div>

        {/* SEO CONTENT */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-10 prose max-w-none">

          <h2>
            Free Online Notepad Tool
          </h2>

          <p>
            This free online notepad tool helps developers,
            bloggers, students and office workers clean and
            edit text instantly in the browser.
          </p>

          <h2>
            Remove Links & HTML Tags Easily
          </h2>

          <p>
            You can remove URLs, remove HTML tags,
            clear extra spaces and copy cleaned text instantly.
            No installation or signup required.
          </p>

          <h2>
            Fast & Secure
          </h2>

          <p>
            Everything works directly in your browser.
            Your notes are never uploaded to servers,
            making this tool fast, secure and privacy friendly.
          </p>

        </div>

      </div>

      {/* SIDEBAR */}

      <div className="lg:col-span-1">

        <ConverterSidebar currentTool="onlinenotepad" />

      </div>

    </div>
  )
}