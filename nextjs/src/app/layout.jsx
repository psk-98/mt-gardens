import BookingModal from "@/components/BookingModal/BookingModal"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import StoreProvider from "@/store/StoreProvider"
import "@/styles/globals.css"
import { Lato, Merriweather } from "next/font/google"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "700"],
  style: ["normal"],
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
  display: "swap",
  variable: "--headerFont",
})

export const metadata = {
  title: { default: "M|T Gardens", template: "%s - M|T Gardens" },
  description: `Your Ideal Garden Venue nestled in
  the heart of Fourways, M|TLifestyle Garden is a peaceful haven
  created by a passionate gardening enthusiast in 2022. Our garden
  venue offers a serene atmosphere to unwind and enjoy the beauty of
  nature. It&apos;s the perfect space for all kinds of occasions,
  including corporate conferences, team-building exercises, year-end
  functions, and product events.`,
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://MTGArdens.com"),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} ${lato.variable}`}>
        <StoreProvider>
          <Navbar />
          <main className="container">
            <BookingModal />
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
