import UploadBox from "@/components/UploadBox"
import HowToConvert from "../../../components/HowToConvert"
import Benifits from "../../../components/Benifits"
import ConverterSidebar from "../../../components/ConverterSidebar"
export const metadata = {
  title: "WEBP to JPG Converter – Free Online Image Converter",
  description: "Convert WEBP images to JPG online free with our fast tool."
}


const steps = [
  {
    title: "Upload or Drag and Drop Your WEBP Image",
    description:
      "Upload your WEBP image using the upload box or simply drag and drop the file to start the conversion process."
  },
  {
    title: "Convert WEBP to JPG Instantly",
    description:
      "After your WEBP image is uploaded, click the convert button. Our tool will quickly convert your WEBP file into JPG format."
  },
  {
    title: "Download Your JPG Image",
    description:
      "Once the conversion is complete, download your newly converted JPG image directly to your device."
  }
]

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">

        <h1 className="text-4xl font-bold text-center mb-8">
        WEBP to JPEG Converter
        </h1>

        <UploadBox type="webp-to-jpg" />

        <div className="prose max-w-none mt-12">
        <p>
          Our WEBP to JPG converter allows you to quickly convert WEBP images into JPG format online.
          Simply upload your WEBP image, and the tool will instantly convert it to JPG while preserving
          image quality and transparency support. Download the converted JPG file to your device in seconds.
        </p>

            <HowToConvert
              title="How to Convert JPG to JPEG"
              steps={steps}
            />
            <HowToConvert/>
            <Benifits>
            </Benifits>
        
        </div>

      </div>
        {/* RIGHT SIDE - SIDEBAR */}
               <div className="lg:col-span-1">
                    <ConverterSidebar currentTool="webp-to-jpg" />
                </div>
    </div>

  )
}