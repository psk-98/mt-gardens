import { scrollInVariants } from "@/animations/common"
import Image from "next/image"
import { MotionSection } from "../MotionComponents/MotionComponents"
import styles from "./FollowUs.module.css"

export default function FollowUs() {
  return (
    <MotionSection
      className={styles.followContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
    >
      <div className={styles.headerRow}>
        <h2>Follow Us</h2>
        <a
          className="cta"
          href="https://www.instagram.com/m_t_gardens_fourways/?img_index=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow
        </a>
      </div>
      <div className={styles.gallery}>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/media/flowers.jpg"
            alt="flowers"
            height={500}
            width={500}
          />
        </div>
      </div>
    </MotionSection>
  )
}
