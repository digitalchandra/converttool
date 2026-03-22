import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ReactNode } from "react"

export const metadata = {
  title: "Free Image Converter - PNG, JPG, WEBP Online | ConvertTool",
description: "Convert PNG to JPG, JPG to PNG, and WEBP images online for free. No signup, no installation, fast and secure image converter."
}

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">

      <body className="bg-gray-50">

        <Header />

        <main className="max-w-7xl mx-auto px-4 py-10">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  )
}