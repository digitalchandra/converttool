import ToolCard from "@/components/ToolCard"
import { link } from "fs"
import { title } from "process"

export const metadata = {
  title: "Image Converter Tools",
  description: "Free online image converter tools"
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
      link: "/image/jpeg-to-png"
    },

    {
      title: "WEBP to JPEG",
      description: "Convert WEBP images to JPEG format",
      link: "/image/webp-to-jpeg"
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
      title:"GIF to JPG ",
      description:"Convert GIF images to JPG format",
      link: "/image/gif-to-jpg"
    },
    {
      title:"JPG to WEBP ",
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

    <div className="max-w-7xl mx-auto py-12 px-4">

      <h1 className="text-3xl font-bold mb-10">
        Image Converter Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {tools.map((tool, index) => (

          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />

        ))}

      </div>

    </div>

  )
}