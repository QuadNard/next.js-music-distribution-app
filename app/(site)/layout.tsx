import Header from './header'
import './globals.css'
import Footer from './footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>  
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  )
}
