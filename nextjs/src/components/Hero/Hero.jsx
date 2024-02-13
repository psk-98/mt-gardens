import { scrollInVariants } from "@/animations/common"
import Link from "next/link"
import { MotionSection } from "../MotionComponents/MotionComponents"
import styles from "./Hero.module.css"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <MotionSection
      className={styles.hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
    >
      <div className={styles.heroImg}>
        <HeroImage />
      </div>
      <div className={styles.heroCopy}>
        <h1>M|T Lifestyle Gardens Fourways</h1>
        <p>Corporate team building & year end function packages</p>
        <Link href="/services" className={`cta `}>
          learn more
        </Link>
      </div>
    </MotionSection>
  )
}
