
import Link from "next/link";
import {
    LockOpen,
    CircleGauge,
    PlugZap,
    CircleCheckBig

}  from "lucide-react";
export const metadata = {
  title: "Privacy Policy | ConvertTool",
  description:
    "Learn how ConvertTool handles your information, files, cookies, analytics, and privacy when you use our online tools.",
  alternates: {
    canonical: "https://converttool.io/privacy-policy",
  },
};

const sections = [
  { id: "introduction", number: "01", title: "Introduction" },
  { id: "information", number: "02", title: "Information We Collect" },
  { id: "files", number: "03", title: "Your Files & Conversions" },
  { id: "usage", number: "04", title: "How We Use Information" },
  { id: "cookies", number: "05", title: "Cookies & Analytics" },
  { id: "sharing", number: "06", title: "Information Sharing" },
  { id: "security", number: "07", title: "Data Security" },
  { id: "retention", number: "08", title: "Data Retention" },
  { id: "rights", number: "09", title: "Your Privacy Rights" },
  { id: "changes", number: "10", title: "Policy Changes" },
  { id: "contact", number: "11", title: "Contact Us" },
];

function SectionNumber({ number }) {
  return (
    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-blue-50 px-2 text-xs font-bold text-blue-600 ring-1 ring-blue-100">
      {number}
    </span>
  );
}

function PolicySection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-gray-100 pb-12 last:border-0"
    >
      <div className="mb-6 flex items-start gap-4">
        <SectionNumber number={number} />

        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-[15px] leading-7 text-gray-600">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
     

      <main className="min-h-screen bg-[#f8fafc]">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-gray-200 bg-white">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />
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
                Privacy Policy
              </span>
            </div>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  ✓
                </span>
                Your privacy matters
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 md:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
                We believe online tools should be simple, fast, and
                privacy-conscious. This policy explains how ConvertTool
                handles information when you use our services.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Last updated
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    August 18, 2026
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Website
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    converttool.io
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUICK SUMMARY ================= */}
        <section className="mx-auto max-w-7xl px-5 pt-8 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <LockOpen/>
              </div>

              <h3 className="font-semibold text-gray-900">
                Privacy-conscious
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We aim to collect only information that is reasonably needed
                to operate and improve our services.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
               <PlugZap/>
              </div>

              <h3 className="font-semibold text-gray-900">
                Simple & transparent
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We explain what information may be collected and why it may
                be used.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <CircleCheckBig/>
              </div>

              <h3 className="font-semibold text-gray-900">
                Your files matter
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Tools that process files in your browser do not need to send
                those files to our servers.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            {/* ================= SIDEBAR ================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-black-400">
                  On this page
                </p>

                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="w-5 text-[10px] font-bold text-gray-300 group-hover:text-blue-400">
                        {section.number}
                      </span>

                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs leading-5 text-gray-400">
                    Have a privacy question?
                  </p>

                  <Link
                    href="/contact"
                    className="mt-2 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Contact us →
                  </Link>
                </div>
              </div>
            </aside>

            {/* ================= POLICY ================= */}
            <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="space-y-12 p-6 md:p-10 lg:p-14">
                {/* 01 */}
                <PolicySection
                  id="introduction"
                  number="01"
                  title="Introduction"
                >
                  <p>
                    Welcome to ConvertTool. ConvertTool provides online tools
                    for converting, compressing, resizing, and processing
                    digital files and images.
                  </p>

                  <p>
                    This Privacy Policy explains how information may be
                    collected, used, protected, and handled when you visit or
                    use ConvertTool.
                  </p>
                </PolicySection>

                {/* 02 */}
                <PolicySection
                  id="information"
                  number="02"
                  title="Information We Collect"
                >
                  <p>
                    We try to keep data collection to what is reasonably
                    necessary for operating, securing, and improving our
                    website.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <h3 className="font-semibold text-gray-900">
                        Information you provide
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        If you contact us, we may receive information such as
                        your name, email address, and the contents of your
                        message.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <h3 className="font-semibold text-gray-900">
                        Technical information
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Depending on the services enabled, technical
                        information such as browser, device, IP address,
                        referring page, and usage information may be collected.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                {/* 03 */}
                <PolicySection
                  id="files"
                  number="03"
                  title="Your Files & Conversions"
                >
                  <p>
                    ConvertTool provides tools for processing supported files,
                    including images and other digital formats.
                  </p>

                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <CircleGauge/>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          Browser-based processing
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          When a ConvertTool feature processes a file directly
                          in your browser, the file can be processed locally
                          on your device without being uploaded to our
                          servers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Because different tools may use different processing
                    methods, please review the relevant tool before processing
                    confidential or sensitive information.
                  </p>
                </PolicySection>

                {/* 04 */}
                <PolicySection
                  id="usage"
                  number="04"
                  title="How We Use Information"
                >
                  <p>
                    Information may be used for purposes such as:
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Providing and operating our services",
                      "Improving website functionality",
                      "Understanding website usage",
                      "Monitoring performance and reliability",
                      "Detecting abuse and security issues",
                      "Responding to support requests",
                      "Maintaining website security",
                      "Complying with applicable laws",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600"
                      >
                        <span className="text-blue-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </PolicySection>

                {/* 05 */}
                <PolicySection
                  id="cookies"
                  number="05"
                  title="Cookies & Analytics"
                >
                  <p>
                    ConvertTool may use cookies and similar technologies to
                    maintain functionality, remember preferences, understand
                    website usage, and improve our services.
                  </p>

                  <p>
                    Third-party services such as analytics or advertising
                    providers may also use cookies or similar technologies
                    according to their own policies.
                  </p>

                  <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
                    You can manage or disable cookies through your browser
                    settings. Some website features may not work correctly if
                    certain cookies are disabled.
                  </div>
                </PolicySection>

                {/* 06 */}
                <PolicySection
                  id="sharing"
                  number="06"
                  title="Information Sharing"
                >
                  <p>
                    We do not sell your personal information.
                  </p>

                  <p>
                    Information may be shared with trusted service providers
                    when reasonably necessary to operate the website, provide
                    requested services, maintain infrastructure, analyze
                    performance, prevent abuse, or comply with legal
                    obligations.
                  </p>
                </PolicySection>

                {/* 07 */}
                <PolicySection
                  id="security"
                  number="07"
                  title="Data Security"
                >
                  <p>
                    We take reasonable technical and organizational measures
                    designed to protect information against unauthorized
                    access, alteration, disclosure, loss, or misuse.
                  </p>

                  <p>
                    However, no website, internet transmission, or electronic
                    storage system can be guaranteed to be completely secure.
                  </p>
                </PolicySection>

                {/* 08 */}
                <PolicySection
                  id="retention"
                  number="08"
                  title="Data Retention"
                >
                  <p>
                    We retain information only for as long as reasonably
                    necessary for the purposes described in this policy, unless
                    a longer period is required or permitted by applicable law.
                  </p>
                </PolicySection>

                {/* 09 */}
                <PolicySection
                  id="rights"
                  number="09"
                  title="Your Privacy Rights"
                >
                  <p>
                    Depending on your location and applicable law, you may have
                    rights relating to your personal information, including the
                    right to access, correct, delete, restrict, or object to
                    certain processing.
                  </p>

                  <p>
                    If you would like to make a privacy-related request,
                    please contact us.
                  </p>
                </PolicySection>

                {/* 10 */}
                <PolicySection
                  id="changes"
                  number="10"
                  title="Changes to This Policy"
                >
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes to our services, technology, legal
                    requirements, or privacy practices.
                  </p>

                  <p>
                    When changes are made, the updated version will be
                    published on this page with a revised “Last updated” date.
                  </p>
                </PolicySection>

                {/* 11 */}
                <PolicySection
                  id="contact"
                  number="11"
                  title="Contact Us"
                >
                  <p>
                    If you have questions, concerns, or requests regarding
                    this Privacy Policy, please contact us.
                  </p>

                  <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-bold text-gray-900">
                          ConvertTool
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Privacy & Support
                        </p>
                      </div>

                      <a
                        href="mailto:support@converttool.io"
                        className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                      >
                        Contact Support
                      </a>
                    </div>
                  </div>
                </PolicySection>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-gray-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Still have a question?
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      We&apos;re happy to help with privacy-related questions.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Contact Us
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

    </>
  );
}