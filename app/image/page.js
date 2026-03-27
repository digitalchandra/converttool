import ToolCard from "@/components/ToolCard"

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
      title: "Image Resize",
      description: "Resize image width and height online",
      link: "/image/image-resize"
    },

    {
      title: "Image Compress",
      description: "Reduce image size without losing quality",
      link: "/image/image-compress"
    },

    {
      title: "Increase Image Size",
      description: "Increase image resolution online",
      link: "/image/increase-image-size"
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