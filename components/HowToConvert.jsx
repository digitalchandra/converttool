import { CheckCircle } from "lucide-react"

export default function HowToConvert({ title, steps = [] }) {
  return (
    <div className="mt-12">

      <h2 className="text-2xl font-bold mb-8 text-blue-500">
        {title}
      </h2>

      <ul className="grid md:grid-cols-2 gap-4 mt-8">

        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">

            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />

            <div>
              <h5 className="text-lg font-semibold">
                {step.title}
              </h5>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>

          </li>
        ))}

      </ul>

    </div>
  )
}