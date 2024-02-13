import AnimatedScrollCopy from "@/components/AnimatedScrollCopy/AnimatedScrollCopy"
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage"
import ContactForm from "@/components/ContactForm/ContactForm"
import FollowUs from "@/components/FollowUs/FollowUs"
import Map from "@/components/Map/Map"
import styles from "./Contact.module.css"

export const metadata = {
  title: "Contact Us - M|T Gardens",
}

export default function Contact() {
  return (
    <>
      <section className={styles.contactContainer}>
        <BackgroundImage page="Contact" />
        <div>
          <h1>Get in touch with us</h1>
          <AnimatedScrollCopy />
        </div>
      </section>
      <ContactForm />
      <Map />
      <FollowUs />
    </>
  )
}
