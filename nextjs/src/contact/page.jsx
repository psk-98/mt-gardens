import FollowUs from "@/components/FollowUs/FollowUs"
import Image from "next/image"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <>
      <section className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <Image
            src="/media/forest.jpg"
            alt="flowers"
            height={400}
            width={300}
            priority
          />
          <div></div>
        </div>
        <div>
          <h2>Keep in touch with us</h2>
        </div>
      </section>
      <FollowUs />
    </>
  )
}
