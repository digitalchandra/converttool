import ToolCard from "@/components/ToolCard"

export const metadata = {
  title: "Image Resize Tools",
  description: "Free online image resize tools"
}

export default function Page(){
    const tools = [

        {
            title: "Image Resize",
            description: "Resize image width and height online",
            link: "/imageresize/image-resize"
          },
      
          {
            title: "Image Compress",
            description: "Reduce image size without losing quality",
            link: "/imageresize/image-compress"
          },
      
          {
            title: "Increase Image Size",
            description: "Increase image resolution online",
            link: "/imageresize/increase-image-size"
          }

    ]

    return(
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