import Link from "next/link"

export const metadata = {
  title: "Coming Soon – Image Converter Tool",
  description: "This image converter tool is coming soon. Stay tuned for new features."
}

export default function Page() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      
      <div className="text-center max-w-xl">

        <h1 className="text-4xl font-bold mb-4">
          Tool Coming Soon
        </h1>

        <p className="text-gray-600 mb-6">
          This image converter tool is currently under development. 
          We are working hard to launch it soon. Please check back later.
        </p>

        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  )
}