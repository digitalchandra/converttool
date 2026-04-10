import Link from "next/link"
import { imageTools } from "@/data/imageTools"

export default function ConverterSidebar({ currentTool }) {

  const tools = imageTools.filter(
    (tool) => tool.slug !== currentTool
  )

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">

      <h3 className="text-lg font-semibold mb-4">
        Other Image Converters
      </h3>

      <ul className="space-y-2">

        {tools.map((tool, index) => (

          <li key={index}>

            <Link
              href={`/image/${tool.slug}`}
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {tool.title}
            </Link>

          </li>

        ))}

      </ul>

    </div>
  )
}