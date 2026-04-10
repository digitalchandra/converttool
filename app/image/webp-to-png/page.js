import UploadBox from "@/components/UploadBox"
import HowToConvert from "../../../components/HowToConvert"
import Benifits from "../../../components/Benifits"
import ConverterSidebar from "../../../components/ConverterSidebar"
export const metadata = {
  title: "PNG to JPEG Converter – Free Online Image Converter",
  description: "Convert PNG images to JPEG online free with our fast tool."
}


const steps = [
  {
    title: "Upload or Drag and Drop Your JPG Image",
    description:
      "Upload your JPG image using the upload box or simply drag and drop the file to start the conversion process."
  },
  {
    title: "Convert JPG to PNG Instantly",
    description:
      "After your JPG image is uploaded, click the convert button. Our tool will quickly convert your JPG file into PNG format."
  },
  {
    title: "Download Your PNG Image",
    description:
      "Once the conversion is complete, download your newly converted PNG image directly to your device."
  }
]

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">

        <h1 className="text-4xl font-bold text-center mb-8">
        WEBP to PNG Converter
        </h1>

        <UploadBox type="webp-to-png" />

        <div className="prose max-w-none mt-12">
        <p>
          Our JPG to PNG converter allows you to quickly convert JPG images into PNG format online.
          Simply upload your JPG image, and the tool will instantly convert it to PNG while preserving
          image quality and transparency support. Download the converted PNG file to your device in seconds.
        </p>

            <HowToConvert
              title="How to Convert PNG to JPEG"
              steps={steps}
            />
            <HowToConvert/>
            <Benifits>
            </Benifits>
        
        </div>

      </div>
        {/* RIGHT SIDE - SIDEBAR */}
               <div className="lg:col-span-1">
                    <ConverterSidebar currentTool="webp-to-png" />
                </div>
    </div>


  )
}