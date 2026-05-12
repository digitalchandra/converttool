import ServiceCard from "@/components/ServiceCard";
import { Rabbit,ShieldPlus } from "lucide-react";

export default function Home() {
  const imageConverters = [
    {
      title: "PNG to JPG",
      link: "/image/png-to-jpeg",
      desc: "Convert PNG images to JPG format instantly.",
    },
    {
      title: "JPG to PNG",
      link: "/image/jpeg-to-png",
      desc: "Convert JPG images to PNG online.",
    },
    {
      title: "WEBP to JPG",
      link: "/image/webp-to-jpg",
      desc: "Convert WEBP images to JPG easily.",
    },
  ];

  const imageResizer = [
    {
      title: "Image Compressor",
      link: "/imageresize/image-compress",
      desc: "Reduce image file size online.",
    },
    {
      title: "Increase Image Size",
      link: "/imageresize/increase-image-size",
      desc: "Increase image resolution easily.",
    },
    {
        title: "Image Resize ",
        link: "/imageresize/image-resize",
        desc: "Increase image resolution easily.",
      },
  ];

  const pdfTools = [
    {
      title: "PDF to Image",
      link: "/pdf/pdf-to-image",
      desc: "Convert PDF pages into images.",
    },
    {
      title: "Microsoft Word to PDF",
      link: "/pdf/word-pdf",
      desc: "Convert Micfosoft Word File into PDF files.",
    },
    {
      title: "Image to PDF",
      link: "/pdf/image-to-pdf",
      desc: "Convert images into PDF files.",
    },
  ];

  const devTools = [
    {
      title: "Online Notepad ",
      link: "/utility/onlinenotepad",
      desc: "Easy and free online Notepad ",
    },
    {
      title: "JSON Formatter",
      link: "/json-formatter",
      desc: "Format and beautify JSON data.",
    },
    {
      title: "Base64 Encoder",
      link: "/base64-encoder",
      desc: "Encode text to Base64 online.",
    },
  ];

  return (
    <div className="bg-white-50">
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">

{/* Background Blur Effects */}
<div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
<div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

<div className="relative max-w-6xl mx-auto px-6 text-center">

  {/* Small Badge */}
  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
    🚀 Fast • Secure • Free Online Tools
  </div>

  {/* Heading */}
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
    Free Online <span className="text-blue-600">Image & PDF</span>
    <br />
    Converter Tools
  </h1>

  {/* Description */}
  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
    Convert images, resize photos, compress files, edit PDFs,
    and use powerful developer utilities online.
    Simple, fast, secure, and completely free.
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-5">

    <a
      href="/image"
      className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl"
    >
      🖼️ Image Converter
    </a>

    <a
      href="/imageresize"
      className="bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition text-gray-800 px-7 py-4 rounded-xl font-semibold"
    >
      📏 Image Resizer
    </a>

    <a
      href="/pdf"
      className="bg-white border border-gray-200 hover:border-red-400 hover:shadow-lg transition text-gray-800 px-7 py-4 rounded-xl font-semibold"
    >
      📄 PDF Tools
    </a>

    <a
      href="/utility"
      className="bg-white border border-gray-200 hover:border-green-400 hover:shadow-lg transition text-gray-800 px-7 py-4 rounded-xl font-semibold"
    >
      ⚡ Developer Tools
    </a>

  </div>

  {/* Stats */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">

    <div>
      <h3 className="text-3xl font-bold text-blue-600">100%</h3>
      <p className="text-gray-600 mt-1">Free Tools</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-blue-600">Fast</h3>
      <p className="text-gray-600 mt-1">Processing</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-blue-600">Secure</h3>
      <p className="text-gray-600 mt-1">File Handling</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-blue-600">Mobile</h3>
      <p className="text-gray-600 mt-1">Friendly</p>
    </div>

  </div>

</div>
</section>
      {/* IMAGE CONVERTER */}

      <section className=" bg-gray-50 max-w-6xl mx-auto py-16 px-6 ">
        <h2 className="text-3xl font-bold mb-8">Image Converter</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {imageConverters.map((tool, index) => (
            <ServiceCard key={index} {...tool} />
          ))}
        </div>
      </section>

      {/* IMAGE RESIZER */}

      <section className="bg-gray-50 mt-12 max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">Image Resizer Tools</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {imageResizer.map((tool, index) => (
            <ServiceCard key={index} {...tool} />
          ))}
        </div>
      </section>

      {/* PDF TOOLS */}

      <section className="bg-gray-50 mt-12 max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">PDF Converter</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pdfTools.map((tool, index) => (
            <ServiceCard key={index} {...tool} />
          ))}
        </div>
      </section>

      {/* DEV TOOLS */}

      <section className="bg-gray-50 mt-12 max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">Development Tools</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {devTools.map((tool, index) => (
            <ServiceCard key={index} {...tool} />
          ))}
        </div>
      </section>

      {/* WHY USE OUR TOOLS */}

    {/* WHY USE OUR TOOLS */}

<section className="bg-gradient-to-b from-blue-50 to-white py-20 mt-14">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-extrabold text-gray-900">
        Why Use Our Tools
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        Fast, secure, and easy-to-use online tools for converting your files anytime, anywhere.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Fast */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <Rabbit size={32} />
        </div>

        <h3 className="font-bold text-2xl mb-3 text-gray-800">
          Fast
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Convert files instantly within seconds with high-speed processing.
        </p>
      </div>

      {/* Secure */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
          <ShieldPlus size={32} />
        </div>

        <h3 className="font-bold text-2xl mb-3 text-gray-800">
          Secure
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Your files are processed safely and automatically deleted after conversion.
        </p>
      </div>

      {/* Free */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
          💸
        </div>

        <h3 className="font-bold text-2xl mb-3 text-gray-800">
          Free
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Use all tools completely free without registration or hidden charges.
        </p>
      </div>

      {/* Online */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
          🌐
        </div>

        <h3 className="font-bold text-2xl mb-3 text-gray-800">
          Online
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Works perfectly on mobile, tablet, and desktop directly from your browser.
        </p>
      </div>

    </div>
  </div>
</section>

{/* SEO CONTENT */}

      {/* SEO CONTENT */}

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Free Online Image Converter and PDF Tools
        </h2>

        <p className="text-gray-700 mb-4">
          Our online tools allow you to convert images, resize photos, compress
          files, and convert PDF documents quickly and easily. Whether you need
          to convert PNG to JPG, JPG to PNG, WEBP to JPG, or compress large
          images, our tools are designed to provide fast and reliable results.
        </p>

        <p className="text-gray-700 mb-4">
          All conversions happen directly in your browser which means your files
          stay private and secure. No installation or signup is required.
        </p>
      </section>
    </div>
  );
}
