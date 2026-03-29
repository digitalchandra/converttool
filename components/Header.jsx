"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ConvertTool
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/image" className="hover:text-blue-600">
            Image Tools
          </Link>

          <Link href="/pdf" className="hover:text-blue-600">
            PDF Tools
          </Link>

          <Link href="/utility" className="hover:text-blue-600">
            Developer Tools
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
            <Link href="/image" onClick={() => setMenuOpen(false)}>
              Image Tools
            </Link>

            <Link href="/pdf" onClick={() => setMenuOpen(false)}>
              PDF Tools
            </Link>

            <Link href="/utility" onClick={() => setMenuOpen(false)}>
              Developer Tools
            </Link>
          </nav>
        </div>
      )}

    </header>
  )
}