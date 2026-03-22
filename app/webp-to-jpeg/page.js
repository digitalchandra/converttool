import UploadBox from "@/components/UploadBox"

export const metadata = {
  title: "WEBP to JPEG Converter",
  description: "Convert WEBP images to JPEG online"
}

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        WEBP to JPEG Converter
      </h1>

      <UploadBox type="webp-to-jpeg"/>
    </div>
  )
}