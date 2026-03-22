export const metadata = {
    title: "ConvertTool - Free Image Converter",
    description: "Convert PNG, JPG, WEBP images online for free"
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-gray-50 text-gray-800">
          <header className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
              <h1 className="text-xl font-bold text-blue-600">
                ConvertTool
              </h1>
            </div>
          </header>
  
          <main className="max-w-6xl mx-auto px-4 py-10">
            {children}
          </main>
  
          <footer className="text-center py-6 text-sm text-gray-500">
            © 2026 ConvertTool.io
          </footer>
        </body>
      </html>
    )
  }