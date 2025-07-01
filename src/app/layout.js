import "./globals.css"
import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"
import SocialIcons from "@/components/shared/SocialIcons"

export const metadata = {
  title: "KUMAR Fin. Consultant - Professional Financial & Legal Services",
  description: "Expert accounting, taxation, GST, and legal compliance services by Pappu Kumar Consultant",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
        <SocialIcons />
      </body>
    </html>
  )
}
