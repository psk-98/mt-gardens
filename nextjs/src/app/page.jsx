import BookingModal from "@/components/BookingModal/BookingModal"
import FollowUs from "@/components/FollowUs/FollowUs"
import Hero from "@/components/Hero/Hero"
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents"
import { chatSvg } from "../../public/svgs"

export const metadata = {
  title: "Home - M|T Gardens",
}

export default function Home() {
  return (
    <>
      <a href="#" className="chatButton">
        {chatSvg}
      </a>
      <Hero />
      <BookingModal />
      <UpcomingEvents />
      {/* <Testimonials /> */}
      <FollowUs />
    </>
  )
}
