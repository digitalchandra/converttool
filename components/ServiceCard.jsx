import Link from "next/link"

export default function ServiceCard({title, desc, link}) {

  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-600">
          {desc}
        </p>

      </div>
    </Link>
  )
}