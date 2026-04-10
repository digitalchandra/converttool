import ServiceCard from "@/components/ServiceCard"

export default function Home() {

const imageConverters = [
{ title:"PNG to JPG", link:"/image/png-to-jpg", desc:"Convert PNG images to JPG format instantly."},
{ title:"JPG to PNG", link:"/image/jpeg-to-png", desc:"Convert JPG images to PNG online."},
{ title:"WEBP to JPG", link:"/image/webp-to-jpg", desc:"Convert WEBP images to JPG easily."},
]

const imageResizer = [
{ title:"Image Compressor", link:"/image-compressor", desc:"Reduce image file size online."},
{ title:"Increase Image Size", link:"/increase-image-size", desc:"Increase image resolution easily."},
]

const pdfTools = [
{ title:"PDF to Image", link:"/pdf-to-image", desc:"Convert PDF pages into images."},
{ title:"Image to PDF", link:"/image-to-pdf", desc:"Convert images into PDF files."},
]

const devTools = [
{ title:"JSON Formatter", link:"/json-formatter", desc:"Format and beautify JSON data."},
{ title:"Base64 Encoder", link:"/base64-encoder", desc:"Encode text to Base64 online."},
]

return (

<div className="bg-gray-50">

{/* HERO SECTION */}

<section className="text-center py-20 bg-white">

<h1 className="text-5xl font-bold mb-6">
Free Online Image & PDF Converter Tools
</h1>

<p className="text-gray-600 max-w-2xl mx-auto mb-10">
Convert images, resize photos, compress files, convert PDF documents
and use helpful developer tools online. Fast, secure and completely free.
</p>

<div className="flex flex-wrap justify-center gap-4">

<a href="/image" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Image Converter
</a>

<a href="/imageresize" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Image Resizer
</a>

<a href="/pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
PDF Tools
</a>

<a href="/utility" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Developer Tools
</a>

</div>

</section>

{/* IMAGE CONVERTER */}

<section className="max-w-6xl mx-auto py-16 px-6">

<h2 className="text-3xl font-bold mb-8">
Image Converter
</h2>

<div className="grid md:grid-cols-3 gap-6">

{imageConverters.map((tool,index)=>(
<ServiceCard key={index} {...tool}/>
))}

</div>

</section>


{/* IMAGE RESIZER */}

<section className="max-w-6xl mx-auto py-16 px-6">

<h2 className="text-3xl font-bold mb-8">
Image Resizer Tools
</h2>

<div className="grid md:grid-cols-3 gap-6">

{imageResizer.map((tool,index)=>(
<ServiceCard key={index} {...tool}/>
))}

</div>

</section>


{/* PDF TOOLS */}

<section className="max-w-6xl mx-auto py-16 px-6">

<h2 className="text-3xl font-bold mb-8">
PDF Converter
</h2>

<div className="grid md:grid-cols-3 gap-6">

{pdfTools.map((tool,index)=>(
<ServiceCard key={index} {...tool}/>
))}

</div>

</section>


{/* DEV TOOLS */}

<section className="max-w-6xl mx-auto py-16 px-6">

<h2 className="text-3xl font-bold mb-8">
Development Tools
</h2>

<div className="grid md:grid-cols-3 gap-6">

{devTools.map((tool,index)=>(
<ServiceCard key={index} {...tool}/>
))}

</div>

</section>


{/* WHY USE OUR TOOLS */}

<section className="bg-white py-16">

<h2 className="text-3xl font-bold text-center mb-12">
Why Use Our Tools
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

<div>
<h3 className="font-semibold text-xl mb-2">Fast</h3>
<p className="text-gray-600">Convert files instantly in seconds.</p>
</div>

<div>
<h3 className="font-semibold text-xl mb-2">Secure</h3>
<p className="text-gray-600">Files are processed securely.</p>
</div>

<div>
<h3 className="font-semibold text-xl mb-2">Free</h3>
<p className="text-gray-600">All tools are completely free.</p>
</div>

<div>
<h3 className="font-semibold text-xl mb-2">Online</h3>
<p className="text-gray-600">Works on mobile and desktop.</p>
</div>

</div>

</section>


{/* SEO CONTENT */}

<section className="max-w-5xl mx-auto py-16 px-6">

<h2 className="text-3xl font-bold mb-6">
Free Online Image Converter and PDF Tools
</h2>

<p className="text-gray-700 mb-4">
Our online tools allow you to convert images, resize photos, compress files,
and convert PDF documents quickly and easily. Whether you need to convert
PNG to JPG, JPG to PNG, WEBP to JPG, or compress large images,
our tools are designed to provide fast and reliable results.
</p>

<p className="text-gray-700 mb-4">
All conversions happen directly in your browser which means your files stay
private and secure. No installation or signup is required.
</p>

</section>

</div>

)

}