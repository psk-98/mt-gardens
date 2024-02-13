import AnimatedScrollCopy from "@/components/AnimatedScrollCopy/AnimatedScrollCopy"
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage"
import Events from "@/components/Events/Events"
import FollowUs from "@/components/FollowUs/FollowUs"
import styles from "./Services.module.css"

export const metadata = {
  title: "Services - M|T Gardens",
}

export default function Services() {
  return (
    <>
      <section className={styles.servicesContainer}>
        <BackgroundImage page="Services" />
        <div>
          <h1>Spaces that make you want to stay</h1>
          {/* <p>scroll</p> */}
          <AnimatedScrollCopy />
        </div>
      </section>
      <Events />
      <FollowUs />
    </>
  )
}
