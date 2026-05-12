import OnlineNotepad from "./OnlineNotepad"

export const metadata = {
    title: "Free Online Notepad - Write & Save Notes Instantly",
    description:
      "Use our free online notepad tool to write, edit, copy, and save notes instantly. Fast, secure, and easy to use online text editor.",
    keywords: [
      "online notepad",
      "free notepad",
      "text editor online",
      "write notes online",
      "online memo pad",
    ],
    alternates: {
      canonical: "https://www.converttool.io/utility/onlinenotepad",
    },
  }

export default function Page() {
  return <OnlineNotepad />
}