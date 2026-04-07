import { CheckCircle,Zap, BadgeDollarSign, UserX } from "lucide-react"

export default function Benifits() {
  return (
    <>
        <h2 className="text-2xl font-bold text-left mb-8 mt-6 text-blue-500"> Benifits: </h2>
              <ul className="grid md:grid-cols-3 gap-6 mt-6">

              <li className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl shadow-sm">
                <Zap className="text-yellow-500 w-6 h-6 mt-1" />
                <div>
                  <h5 className="font-semibold text-lg">
                    Fast Image Conversion
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Convert  images within seconds with our optimized tool.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl shadow-sm">
                <BadgeDollarSign className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <h5 className="font-semibold text-lg">
                    Completely Free
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Use our converter unlimited times without any cost.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl shadow-sm">
                <UserX className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h5 className="font-semibold text-lg">
                    No Registration Required
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Start converting images instantly without creating an account.
                  </p>
                </div>
              </li>

            </ul>
    </>
  )
}
