"use client"

import Link from "next/link"

export default function Header() {

  return (

    <header className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">

        <Link href="/" className="text-2xl font-bold text-blue-600">
          ConvertTool
        </Link>

        <nav className="flex gap-6 text-gray-700">

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

      </div>

    </header>
  )
}