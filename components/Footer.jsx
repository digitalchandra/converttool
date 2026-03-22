import Link from "next/link"

export default function Footer(){

  return (

    <footer className="bg-gray-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Logo */}
        <div>

          <h2 className="text-xl font-bold text-white mb-3">
            ConvertTool
          </h2>

          <p className="text-sm">
            Free online tools to convert images. 
            Convert PNG, JPG, WEBP and compress images easily.
          </p>

        </div>


        {/* Tools */}

        <div>

          <h3 className="font-semibold text-white mb-3">
            Image Tools
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/png-to-jpeg">PNG to JPEG</Link>
            </li>

            <li>
              <Link href="/jpeg-to-png">JPEG to PNG</Link>
            </li>

            <li>
              <Link href="/webp-to-jpeg">WEBP to JPEG</Link>
            </li>

            <li>
              <Link href="/image-compressor">Image Compressor</Link>
            </li>

          </ul>

        </div>


        {/* Company */}

        <div>

          <h3 className="font-semibold text-white mb-3">
            Company
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>

          </ul>

        </div>

      </div>


      <div className="text-center border-t border-gray-700 py-6 text-sm">

        © {new Date().getFullYear()} ConvertTool.io  
        All rights reserved.

      </div>

    </footer>

  )
}