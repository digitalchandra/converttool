import ToolCard from "@/components/ToolCard";

export const metaData ={
    title:"PDF conversion Tools",
    description :" Free online Pdf conversion tools where you can convert 100% free"
}

export default function Page(){
    const tools =[
        {
        title: "PDF to Word",
        description: "Convert PDF to Microsoft Docs format",
        link: "/pdf/pdf-to-word"
        },

        {
            title: "PNG to JPEG",
            description: "Convert PNG images to JPEG format",
            link: "/image/png-to-jpeg"
            },

    ]

    return(

            <div className="max-w-7xl mx-auto py-12 px-4">
        
              <h1 className="text-3xl font-bold mb-10">
                PDF convert Tools
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