"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (

    <header className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ConvertTool
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700">

          <Link href="/png-to-jpeg" className="hover:text-blue-600">
            PNG → JPEG
          </Link>

          <Link href="/jpeg-to-png" className="hover:text-blue-600">
            JPEG → PNG
          </Link>

          <Link href="/webp-to-jpeg" className="hover:text-blue-600">
            WEBP → JPEG
          </Link>

          <Link href="/image-compressor" className="hover:text-blue-600">
            Compressor
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700">

          <Link href="/png-to-jpeg" className="block">
            PNG → JPEG
          </Link>

          <Link href="/jpeg-to-png" className="block">
            JPEG → PNG
          </Link>

          <Link href="/webp-to-jpeg" className="block">
            WEBP → JPEG
          </Link>

          <Link href="/image-compressor" className="block">
            Image Compressor
          </Link>

        </div>

      )}

    </header>
  )
}