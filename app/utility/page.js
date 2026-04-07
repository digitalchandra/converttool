import ToolCard from "@/components/ToolCard"

export const metadata = {
  title: "Free Online Utility Tools – Base64 Encoder, Decoder, CSV to JSON Converter",
  description:
    "Use our free online utility tools including Base64 encoder, Base64 decoder, CSV to JSON converter, JSON to CSV converter and more. Fast, secure and browser based tools.",
  keywords: [
    "base64 encoder",
    "base64 decoder",
    "csv to json converter",
    "json to csv converter",
    "online utility tools",
    "developer tools online",
    "free base64 tools",
    "csv json converter online"
  ],
  openGraph: {
    title: "Free Online Utility Tools",
    description:
      "Convert Base64, CSV, JSON and more using free online developer utilities.",
    url: "https://yourdomain.com/utility",
    siteName: "Convert Tools",
    type: "website"
  }
}

export default function Page() {

  const tools = [
    {
      title: "Base64 Encoder",
      description: "Encode text or files into Base64 format instantly.",
      link: "/utility/base64-encoder"
    },
    {
      title: "Base64 Decoder",
      description: "Decode Base64 encoded text back to original format.",
      link: "/utility/base64-decoder"
    },
    {
      title: "CSV to JSON Converter",
      description: "Convert CSV data into structured JSON format easily.",
      link: "/utility/csv-to-json"
    },
    {
      title: "JSON to CSV Converter",
      description: "Convert JSON data into downloadable CSV format.",
      link: "/utility/json-to-csv"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">
        Free Online Utility Tools
      </h1>

      {/* SEO Paragraph */}
      <p className="text-gray-600 max-w-3xl mb-10">
        Our free online utility tools help developers, designers and data analysts
        quickly convert and process data formats. Use tools like Base64 encoder,
        Base64 decoder, CSV to JSON converter and JSON to CSV converter directly
        in your browser with no installation required.
      </p>

      {/* Tools Grid */}
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

      {/* SEO Content Section */}
      <div className="mt-16 max-w-3xl">

        <h2 className="text-2xl font-semibold mb-4">
          Why Use Our Online Utility Tools?
        </h2>

        <p className="text-gray-600 mb-6">
          Our browser based tools are fast, secure and completely free to use.
          All processing happens locally in your browser so your data stays safe.
          Developers often need tools like Base64 encoders or CSV to JSON
          converters during development and debugging.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Available Utility Converters
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Base64 Encoder</li>
          <li>Base64 Decoder</li>
          <li>CSV to JSON Converter</li>
          <li>JSON to CSV Converter</li>
        </ul>

      </div>

    </div>
  )
}