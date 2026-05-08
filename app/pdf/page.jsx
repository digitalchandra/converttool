import ToolCard from "@/components/ToolCard";

export const metadata = {
  title: "Free PDF Converter Tools - Convert PDF Online (Word, Image, Merge)",
  description:
    "Use our free online PDF tools to convert PDF to Word, Word to PDF, merge PDF files, and convert PDF to images instantly. Fast, secure, and 100% free PDF converter.",
  keywords: [
    "PDF converter",
    "PDF to Word",
    "Word to PDF",
    "Merge PDF",
    "PDF to Image",
    "Image to PDF",
    "Free PDF tools online"
  ],
};

export default function Page() {
  const tools = [
    {
      title: "PDF to Word",
      description:
        "Convert PDF files to editable Word documents quickly and accurately.",
      link: "/pdf/pdf-to-word",
    },
    {
      title: "Word to PDF",
      description:
        "Convert Microsoft Word documents to high-quality PDF files instantly.",
      link: "/pdf/word-pdf",
    },
    {
      title: "Merge PDF",
      description:
        "Combine multiple PDF files into one document easily and securely.",
      link: "/pdf/merge-pdf",
    },
    {
      title: "PDF to Image",
      description:
        "Convert PDF pages into high-quality JPG or PNG images.",
      link: "/pdf/pdf-to-image",
    },
    {
      title: "Image to PDF",
      description:
        "Convert JPG, PNG, or other images into a single PDF file.",
      link: "/pdf/image-to-pdf",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Free PDF Conversion Tools
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Easily convert, merge, and manage your PDF files online. Our tools are fast,
        secure, and completely free to use. No installation required.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
}