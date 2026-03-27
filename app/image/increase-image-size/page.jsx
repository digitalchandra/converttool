import ImageSizeIncreaser from "@/components/ImageSizeIncreaser"

export default function Page(){

  return(

    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-8">
        Increase Image Size & Resolution
      </h1>

      <ImageSizeIncreaser />

      <div className="prose mt-10">

        <p>
        This tool allows you to increase image resolution and file size
        while maintaining quality.
        </p>

      </div>

    </div>
  )
}