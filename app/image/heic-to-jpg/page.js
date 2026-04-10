import UploadBox from "@/components/UploadBox"
import HowToConvert from "../../../components/HowToConvert"
import Benifits from "../../../components/Benifits"
import ConverterSidebar from "../../../components/ConverterSidebar"

export const metadata = {
  title: "HEIC to JPG Converter – Free Online Image Converter",
  description: "Convert HEIC images to JPG online free with our fast tool."
}


const steps = [
  {
    title: "Upload or Drag and Drop Your HEIC Image",
    description:
      "Upload your HEIC image using the upload box or simply drag and drop the file to start the conversion process."
  },
  {
    title: "Convert HEIC to JPG Instantly",
    description:
      "After your HEIC image is uploaded, click the convert button. Our tool will quickly convert your HEIC file into JPG format."
  },
  {
    title: "Download Your JPG Image",
    description:
      "Once the conversion is complete, download your newly converted PNG image directly to your device."
  }
]

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">

        <h1 className="text-4xl font-bold text-center mb-8">
        HEIC to JPG Converter
        </h1>

        <UploadBox type="heic-to-jpg" />

        <div className="prose max-w-none mt-12">
        <p>
          Our HEIC to JPG converter allows you to quickly convert HEIC images into JPG format online.
          Simply upload your JPG image, and the tool will instantly convert it to JPG while preserving
          image quality and transparency support. Download the converted JPG file to your device in seconds.
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
                  <ConverterSidebar currentTool="heig-to-jpg" />
        
                </div>
    </div>


  )
}