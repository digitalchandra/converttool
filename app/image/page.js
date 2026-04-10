import ToolCard from "@/components/ToolCard"

export const metadata = {
  title: "Free Image Converter Tools",
  description: "Convert PNG, JPG, WEBP, SVG, HEIC images online for free."
}

export default function Page() {

  const tools = [
    {
      title: "PNG to JPEG",
      description: "Convert PNG images to JPEG format",
      link: "/image/png-to-jpeg"
    },
    {
      title: "JPEG to PNG",
      description: "Convert JPEG images to PNG format",
      link: "image/jpeg-to-png"
    },
    {
      title: "WEBP to JPG",
      description: "Convert WEBP images to JPG format",
      link: "/image/webp-to-jpg"
    },
    {
      title: "WEBP to PNG",
      description: "Convert WEBP images to PNG format",
      link: "/image/webp-to-png"
    },
    {
      title: "HEIC to JPG",
      description: "Convert HEIC images to JPG format",
      link: "/image/heic-to-jpg"
    },
    {
      title:"GIF to JPG",
      description:"Convert GIF images to JPG format",
      link: "/image/gif-to-jpg"
    },
    {
      title:"JPG to WEBP",
      description:"Convert JPG images to WEBP format",
      link:"/image/jpg-to-webp"
    },
    {
      title:"PNG to WEBP",
      description:"Convert PNG images to WEBP format",
      link:"/image/png-to-webp"
    },
    {
      title:"SVG to PNG",
      description:"Convert SVG images to PNG format",
      link :"/image/svg-to-png"
    }
  ]

  return (
    <div>

      {/* HERO */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Free Online Image Converter
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Convert PNG, JPG, WEBP, HEIC, SVG and more image formats instantly. 
          Fast, secure and completely free.
        </p>

      </section>


      {/* TOOLS */}
      <section className="max-w-7xl mx-auto py-16 px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Image Converter Tools
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {tools.map((tool, index) => (

            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />

          ))}

        </div>

      </section>

    </div>
  )
}