import Navber from "@/components/Navber"
import Header from "@/components/Header"
import "../globals.css"
import Footer01 from "@/components/Footer-01"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navber />
      <Header/>
      {children}
      <Footer01 />
      </body>
    </html>
  )
}
