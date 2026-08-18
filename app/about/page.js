
import Link from "next/link";
import { 
    FileImage,
    FileText,
    ArrowLeftRight,
    ImageDown,
    Scaling,
    QrCode,
    Code2,
    Swords,
    Cog,
    Sparkles,
    CodeXml,
    Palette,
    BookCheck,
    ShieldPlus,
    Zap,
    ShieldCheck,
    PersonStanding,
    ShieldCogCorner
} from "lucide-react";

export const metadata = {
  title: "About ConvertTool | Free Online File Conversion Tools",
  description:
    "Learn about ConvertTool, a collection of simple online tools for converting, compressing, resizing, and processing images, documents, and digital files.",
  alternates: {
    canonical: "https://converttool.io/about",
  },
};

const tools = [
  {
    icon: <FileImage/>,
    title: "Image Tools",
    description:
      "Convert, resize, compress, and process common image formats for everyday use.",
  },
  {
    icon: <FileText/>,
    title: "Document Tools",
    description:
      "Useful online tools for working with documents and supported file formats.",
  },
  {
    icon: <ArrowLeftRight/>,
    title: "PDF Tools",
    description:
      "Simple utilities for common PDF-related tasks without complicated software.",
  },
  {
    icon: <Scaling/>,
    title: "Utility Tools",
    description:
      "Practical tools for developers, creators, students, and everyday internet users.",
  },
];

const values = [
  {
    icon: <Scaling/>,
    title: "Simple",
    description:
      "Tools should be easy to understand and use without unnecessary steps.",
  },
  {
    icon: <Zap/>,
    title: "Fast",
    description:
      "We focus on lightweight interfaces and efficient tools that help you get things done quickly.",
  },
  {
    icon: <ShieldCheck/>,
    title: "Privacy-conscious",
    description:
      "We aim to minimize unnecessary data collection and use browser-based processing where possible.",
  },
  {
    icon: <PersonStanding/>,
    title: "Accessible",
    description:
      "Our goal is to make useful file tools available online without requiring specialized software.",
  },
];

export default function AboutPage() {
  return (
    <>


      <main className="min-h-screen bg-[#f8fafc]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-gray-200 bg-white">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <span>/</span>

              <span className="font-medium text-gray-900">
                About Us
              </span>
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                <Sparkles/>
              </span>

              About ConvertTool
            </div>

            <div className="max-w-4xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 md:text-6xl">
                Simple tools for your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  everyday files.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
                ConvertTool is a collection of simple online tools designed
                to help you convert, compress, resize, and work with images,
                documents, PDFs, and other supported digital files.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Explore Our Tools
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK STATS
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 pt-8 md:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-gray-900">
                Online
              </p>

              <p className="mt-1 text-sm text-gray-500">
                No complicated software installation
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-gray-900">
                Simple
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Tools designed for everyday tasks
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-gray-900">
                Multi-purpose
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Images, documents, PDFs and utilities
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT IS CONVERTOOL
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
                What is ConvertTool?
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                A practical collection of online file tools
              </h2>

              <div className="mt-6 space-y-4 text-[15px] leading-7 text-gray-600">
                <p>
                  ConvertTool is an online platform that brings together
                  useful tools for working with digital files.
                </p>

                <p>
                  Instead of installing a separate application for every
                  small file-related task, ConvertTool provides convenient
                  web-based tools that can be accessed directly from a
                  browser.
                </p>

                <p>
                  Our tools are designed for people who need to quickly
                  convert, compress, resize, or process files for work,
                  study, development, content creation, or everyday use.
                </p>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      ConvertTool
                    </p>

                    <p className="text-xs text-gray-400">
                      Online file tools
                    </p>
                  </div>

                  <div className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                    Online
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    
                  {[
                    [<FileImage/>, "Image Tools"],
                    [<FileText/>, "Document Tools"],
                    [<Swords/>, "PDF Tools"],
                    [<Cog/>, "Utilities"],
                  ].map(([icon, title]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-blue-100 hover:bg-blue-50"
                    >
                      <div className="text-2xl">{icon}</div>

                      <p className="mt-3 text-sm font-semibold text-gray-900">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOLS
        ====================================================== */}
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-lg bg-purple-50 px-3 py-1.5 text-sm font-semibold text-purple-600">
                What we offer
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Tools for different file needs
              </h2>

              <p className="mt-4 text-gray-600">
                ConvertTool brings several useful categories together in one
                easy-to-use website.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl transition group-hover:bg-blue-50">
                    {tool.icon}
                  </div>

                  <h3 className="mt-5 font-bold text-gray-900">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO IS IT FOR
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-lg bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-600">
              Built for everyday use
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Made for people who work with digital files
            </h2>

            <p className="mt-4 text-gray-600">
              Whether you are preparing a document, optimizing an image,
              working on a website, studying, or simply trying to convert a
              file, ConvertTool is designed to make the task easier.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [<CodeXml/>, "Developers", "Quick utilities for web and development work."],
              [<Palette/>, "Designers", "Useful tools for preparing and optimizing images."],
              [<BookCheck/>, "Students", "Simple tools for assignments and everyday file tasks."],
              [<ShieldPlus/>, "Professionals", "Convenient tools for common office and digital workflows."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 font-bold text-gray-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
                Our approach
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Useful tools without unnecessary complexity
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                ConvertTool focuses on making common file-related tasks
                straightforward. We continuously improve the tools,
                interface, performance, and compatibility based on practical
                user needs.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                    {value.icon}
                  </div>

                  <h3 className="mt-5 font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRIVACY NOTE
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ShieldCogCorner/>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-950">
                  We care about responsible file handling
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Where supported, our tools can process files directly in
                  your browser. For more information about how ConvertTool
                  handles information and files, please read our Privacy
                  Policy.
                </p>
              </div>

              <Link
                href="/privacy-policy"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Read Privacy Policy
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Explore ConvertTool and find a simple online tool for your next
              file conversion or processing task.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Explore Tools
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}