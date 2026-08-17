import Link from "next/link";

export const metadata = {
  title: "Image to PDF Converter (Coming Soon) | ConvertTool",
  description:
    "Convert JPG, PNG, WEBP, BMP, and GIF images into PDF online. Our free Image to PDF Converter is currently under development and will be available soon.",
};

export default function Page() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="text-center">

          <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold mb-5">
            🚀 Coming Soon
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Image to PDF Converter
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Convert JPG, PNG, WEBP, BMP and GIF images into high-quality PDF
            documents online. Fast, secure and completely free.
          </p>

        </div>

        {/* Upload Box */}

        <div className="mt-12">

          <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-white p-10 text-center">

            <div className="text-6xl mb-5">
                📄
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Upload Your Images
            </h2>

            <p className="text-gray-500 mb-6">
              Drag & Drop your JPG, PNG, WEBP or GIF images here.
            </p>

            <button
              disabled
              className="bg-blue-600 text-white px-8 py-3 rounded-xl cursor-not-allowed opacity-70"
            >
              Choose Images
            </button>

            <p className="text-sm text-gray-400 mt-5">
              Feature currently under development.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Upcoming Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              High Quality PDF
            </h3>

            <p className="text-gray-600">
              Convert multiple images into a single PDF while preserving image
              quality.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Fast Conversion
            </h3>

            <p className="text-gray-600">
              Generate PDF files in seconds directly from your browser.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Secure & Private
            </h3>

            <p className="text-gray-600">
              Your files will remain private and automatically removed after
              processing.
            </p>
          </div>

        </div>

      </section>

      {/* Supported Formats */}

      <section className="max-w-5xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-2xl p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Supported Image Formats
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "JPG",
              "JPEG",
              "PNG",
              "WEBP",
              "GIF",
              "BMP",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="bg-blue-600 rounded-2xl text-white p-10 text-center">

          <h2 className="text-3xl font-bold mb-4">
            We're Building Something Amazing
          </h2>

          <p className="text-blue-100 mb-8">
            Our Image to PDF Converter will be available soon with fast,
            secure, and free conversions.
          </p>

          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>

        </div>

      </section>

    </main>
  );
}