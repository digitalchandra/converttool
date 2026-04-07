import UploadBox from "@/components/UploadBox"
import HowToConvert from "../../../components/HowToConvert"
import Benifits from "../../../components/Benifits"

export const metadata = {
  title: "PNG to JPEG Converter – Free Online Image Converter",
  description: "Convert PNG images to JPEG online free with our fast tool."
}

const steps = [
  {
    title: "Upload or Drag and Drop Your PNG Image",
    description: "Simply upload your PNG image in the upload box or drag and drop it to start the conversion."
  },
  {
    title: "Convert Your Image Instantly",
    description: " Once your PNG image is uploaded, click the green convert button. The tool will automatically convert your image within seconds."
  },
  {
    title: "Download Your Converted Image",
    description: "Once the conversion is complete, click the download button to save your converted image instantly to your device."
  }
]



export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">

        <h1 className="text-4xl font-bold text-center mb-8">
          PNG to JPEG Converter
        </h1>

        <UploadBox type="png-to-jpeg" />

        <div className="prose max-w-none mt-12">
          <p>
            Our PNG to JPEG converter allows you to quickly convert PNG images
            into JPEG format online. Upload your image and download the
            converted file instantly.
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
    </div>
  )
}