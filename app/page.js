import ServiceCard from "@/components/ServiceCard"

export default function Home() {

  const tools = [
    {
      title: "PNG to JPEG",
      link: "/png-to-jpeg",
      desc: "Convert PNG images to JPEG instantly"
    },
    {
      title: "JPEG to PNG",
      link: "/jpeg-to-png",
      desc: "Convert JPEG images to PNG online"
    },
    {
      title: "WEBP to JPEG",
      link: "/webp-to-jpeg",
      desc: "Convert WEBP images to JPEG easily"
    },
    {
      title: "Image Compressor",
      link: "/image-compressor",
      desc: "Reduce image file size"
    },
    {
      title: "Image inhancer",
      link: "/increase-image-size",
      desc: "Increase image file size"
    }
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Free Image Converter
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool,index)=>(
          <ServiceCard key={index} {...tool}/>
        ))}
      </div>
    </div>
  )
}