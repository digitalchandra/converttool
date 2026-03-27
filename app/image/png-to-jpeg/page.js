import UploadBox from "@/components/UploadBox"

export const metadata = {
  title: "PNG to JPEG Converter",
  description: "Convert PNG images to JPEG online"
}

export default function Page() {

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        PNG to JPEG Converter
      </h1>

      <UploadBox type="png-to-jpeg"/>

    </div>
  )
}