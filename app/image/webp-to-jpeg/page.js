import UploadBox from "@/components/UploadBox"
import {getConverterContent} from "@/services/api"
import parse from "html-react-parser"


export async function generateMetadata() {
  const data = await getConverterContent("webp-to-jpg-image-converters")
  
  const  post = data[0];
  return {
    title: post?.title?.rendered || "WEBP to JPG Converter – Free Online Image Converter",
    description:
      post?.excerpt?.rendered?.replace(/<[^>]+>/g,"") ||
      "Convert WEBP images to JPG online"
  }
}


export default async function Page() {

  const data = await getConverterContent("webp-to-jpg-image-converters")

  const post = data[0];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
      <h1 className="text-4xl font-bold text-center mb-8">
          {parse(post?.title?.rendered || "WEBP to PNG Converter")}
        </h1>
            <UploadBox type="webp-to-jpg" />

        <div className="prose max-w-none mt-12">
          {parse(post?.content?.rendered || "")}
        </div>
      </div>
    </div>
  )
}