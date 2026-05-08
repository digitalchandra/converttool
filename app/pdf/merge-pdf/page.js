import UploadBox from "@/components/UploadBox"
import Link from "next/link"

export const metadata = {
  title: "Merge PDF Online Free | Combine Multiple PDFs into One",
  description:
    "Merge multiple PDF files into one PDF document online for free. Fast, secure, and easy PDF merger tool with drag and drop support.",
  keywords: [
    "merge pdf",
    "combine pdf",
    "pdf merger",
    "merge pdf online",
    "combine multiple pdf files",
    "free pdf merger"
  ],
  alternates: {
    canonical: "https://converttool.io/pdf/merge-pdf"
  },
  openGraph: {
    title: "Merge PDF Online Free",
    description:
      "Combine multiple PDF files into one PDF document instantly.",
    url: "https://converttool.io/pdf/merge-pdf",
    siteName: "ConvertTool",
    type: "website"
  }
}

const steps = [
  {
    title: "Upload Your PDF Files",
    description:
      "Drag and drop multiple PDF files or click to upload PDFs from your device."
  },
  {
    title: "Arrange PDF Order",
    description:
      "Select which PDF should appear first and organize pages in your preferred order."
  },
  {
    title: "Merge PDFs Instantly",
    description:
      "Click the merge button to combine all uploaded PDF files into one document."
  },
  {
    title: "Download Combined PDF",
    description:
      "Download your merged PDF file securely and instantly."
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Merge PDF Files Online
          </h1>

          <p className="text-gray-600 text-lg">
            Combine 2 or more PDF files into one document for free.
          </p>
        </div>

        <UploadBox 
          type ="marge-pdf"
          accept={{"application/pdf":[".pdf"]}}
          multiple={true}
          label="Drag & Drop Multiple PDF Files Here"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <h2 className="font-semibold text-xl mb-2">
                {step.title}
              </h2>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>

      </div>

    </div>
  )
}