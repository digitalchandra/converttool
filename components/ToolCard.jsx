import Link from "next/link"

export default function ToolCard({ title, description, link }) {

  return (

    <Link href={link}>

      <div className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer bg-white">

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600">
          {description}
        </p>

      </div>

    </Link>

  )
}