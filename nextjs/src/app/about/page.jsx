import AnimatedScrollCopy from "@/components/AnimatedScrollCopy/AnimatedScrollCopy"
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage"
import FollowUs from "@/components/FollowUs/FollowUs"
import styles from "./About.module.css"

export const metadata = {
  title: "About Us - M|T Gardens",
}

export default function Services() {
  return (
    <>
      <section className={styles.aboutContainer}>
        <BackgroundImage page="About" />
        <div>
          <h2>About Us</h2>
          <p>
            Introducing M|TLifestyle Garden: Your Ideal Garden Venue nestled in
            the heart of Fourways, M|TLifestyle Garden is a peaceful haven
            created by a passionate gardening enthusiast in 2022. Our garden
            venue offers a serene atmosphere to unwind and enjoy the beauty of
            nature. It&apos;s the perfect space for all kinds of occasions,
            including corporate conferences, team-building exercises, year-end
            functions, and product events.
          </p>
          <AnimatedScrollCopy />
        </div>
      </section>
      <FollowUs />
    </>
  )
}
