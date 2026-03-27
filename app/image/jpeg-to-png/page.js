import UploadBox from "@/components/UploadBox"
import { getConverterContent } from "@/services/api"

export async function generateMetadata(){

  const data = await getConverterContent("jpeg-to-png-image-converters")

  const post = data[0]

  return {
    title: post?.title?.rendered || "JPEG to PNG Converter",
    description:
      post?.excerpt?.rendered?.replace(/<[^>]+>/g,"") ||
      "Convert JPEG images to PNG online"
  }
}

export default async function Page(){

  const data = await getConverterContent("jpeg-to-png-image-converters")

  const post = data[0]

  return (

    <div className="max-w-5xl mx-auto">

      <h1
        className="text-4xl font-bold text-center mb-8"
        dangerouslySetInnerHTML={{
          __html:post?.title?.rendered || "JPEG to PNG Converter"
        }}
      />

      <UploadBox type="jpeg-to-png" />

      <div
        className="prose max-w-none mt-12"
        dangerouslySetInnerHTML={{
          __html:post?.content?.rendered || ""
        }}
      />

    </div>

  )
}