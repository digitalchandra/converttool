import Link from "next/link";
import {
    Bug,
    Lightbulb,
    MessageSquareText,
    Handshake,
    ContactRound,
    MessagesSquare,
    ClockCheck,
    MailPlus,
    Send
} from "lucide-react";
export const metadata = {
  title: "Contact ConvertTool | Get in Touch",
  description:
    "Contact ConvertTool for questions, feedback, bug reports, tool suggestions, and support related to our online file conversion tools.",
  alternates: {
    canonical: "https://converttool.io/contact",
  },
};

const contactTypes = [
  {
    icon: <Bug/>,
    title: "Report a problem",
    description:
      "Found a broken tool, conversion error, or unexpected result?",
  },
  {
    icon: <Lightbulb/>,
    title: "Suggest a tool",
    description:
      "Have an idea for a useful converter or online utility?",
  },
  {
    icon: <MessageSquareText/>,
    title: "General feedback",
    description:
      "Tell us what you like, what could be better, or what we should improve.",
  },
  {
    icon: <Handshake/>,
    title: "Business inquiry",
    description:
      "Interested in partnerships, collaboration, or other business opportunities?",
  },
];

export default function ContactPage() {
  return (
    <>
      

      <main className="min-h-screen bg-[#f8fafc]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-gray-200 bg-white">
          {/* Decorative background */}
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
                Contact
              </span>
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
               <MailPlus/>
              </span>

              Get in touch
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 md:text-6xl">
                We&apos;d love to
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  hear from you.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                Have a question, found a problem, or have an idea for a new
                tool? Send us a message and let us know how we can make
                ConvertTool better.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT TYPES
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 pt-8 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      
            {contactTypes.map((item) => (
                
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-xl">
                  {item.icon}
                </div>

                <h2 className="mt-4 font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CONTACT AREA
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* ================= LEFT ================= */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">
              <span className="inline-flex rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">

                Contact information
              </span>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
                      
                Let&apos;s talk
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-gray-600">
                The fastest way to reach us is by email. You can contact us
                about technical problems, feedback, suggestions, privacy
                questions, or anything related to ConvertTool.
              </p>

              {/* Email card */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                    <MessagesSquare/>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <a
                      href="mailto:support@converttool.io"
                      className="mt-1 block break-all text-base font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      support@converttool.io
                    </a>

                    <p className="mt-1 text-sm text-gray-500">
                      General support and inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Response */}
              <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5">
                <div className="flex gap-3">
                  <span className="text-lg">
                    <ClockCheck/>
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-green-900">
                      Before contacting us
                    </p>

                    <p className="mt-1 text-sm leading-6 text-green-800/80">
                      If you are reporting a conversion problem, please
                      include the tool name, file format, and a short
                      description of what happened.
                    </p>
                  </div>
                </div>
              </div>

              {/* Useful links */}
              <div className="mt-8 border-t border-gray-100 pt-7">
                <p className="text-sm font-semibold text-gray-900">
                  Helpful links
                </p>

                <div className="mt-4 space-y-2">
                  <Link
                    href="/about"
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
                  >
                    <span>About ConvertTool</span>
                    <span>→</span>
                  </Link>

                  <Link
                    href="/privacy-policy"
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
                  >
                    <span>Privacy Policy</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= RIGHT / FORM ================= */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">
              <div>
                <span className="inline-flex rounded-lg bg-purple-50 px-3 py-1.5 text-sm font-semibold text-purple-600">
                  Send a message
                </span>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Fill out the form below and we&apos;ll get back to you.
                </p>
              </div>

              <form
                action="mailto:support@converttool.io"
                method="POST"
                encType="text/plain"
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="Name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="subject"
                    name="Subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>

                    <option value="Technical Problem">
                      Technical problem
                    </option>

                    <option value="Bug Report">
                      Bug report
                    </option>

                    <option value="Tool Suggestion">
                      Suggest a new tool
                    </option>

                    <option value="Feedback">
                      Feedback
                    </option>

                    <option value="Privacy">
                      Privacy question
                    </option>

                    <option value="Business">
                      Business inquiry
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="Message"
                    rows={6}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* Privacy notice */}
                <p className="text-xs leading-5 text-gray-400">
                  By submitting this form, you agree that we may use the
                  information you provide to respond to your request. For more
                  information, see our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  Send Message
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ / SUPPORT CTA
        ====================================================== */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center md:px-8 md:py-20">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
              <Send/>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-950 md:text-3xl">
              Have an idea for a new tool?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600">
              ConvertTool is continuously growing. If there&apos;s a file
              conversion or utility you use frequently, let us know. Your
              suggestion could help shape a future tool.
            </p>

            <a
              href="mailto:support@converttool.io?subject=ConvertTool%20Tool%20Suggestion"
              className="mt-7 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Suggest a Tool
              <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </main>

    </>
  );
}