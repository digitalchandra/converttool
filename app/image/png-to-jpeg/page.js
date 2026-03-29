import UploadBox from "@/components/UploadBox"
import {getConverterContent} from "@/services/api"
import parse from "html-react-parser"


export async function generateMetadata() {
  const data = await getConverterContent("png-to-jpeg-image-converters")
  
  const  post = data[0];
  return {
    title: post?.title?.rendered || "PNG to JPEG Converter – Free Online Image Converter",
    description:
      post?.excerpt?.rendered?.replace(/<[^>]+>/g,"") ||
      "Convert PNG images to JPEG online"
  }
}


export default async function Page() {

  const data = await getConverterContent("png-to-jpeg-image-converters")

  const post = data[0];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
      <h1 className="text-4xl font-bold text-center mb-8">
          {parse(post?.title?.rendered || "PNG to JPEG Converter")}
        </h1>
            <UploadBox type="png-to-jpeg" />

        <div className="prose max-w-none mt-12">
          {parse(post?.content?.rendered || "")}
        </div>
      </div>
    </div>
  )
}