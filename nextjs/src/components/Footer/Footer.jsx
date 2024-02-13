import { scrollInVariants } from "@/animations/common"
import Link from "next/link"
import { instagramSvg, logo, whatsappSvg } from "../../../public/svgs"
import { MotionFooter } from "../MotionComponents/MotionComponents"
import styles from "./Footer.module.css"
import QuickLinks from "./QuickLinks"

export default function Footer() {
  return (
    <MotionFooter
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
    >
      <div className={styles.top}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.address}>
          <p>23-2 Watercombe RD, Chartwell</p>
          <a
            className="cta"
            href="https://www.google.com/maps/place/M%7CT+Gardens/@-25.9936688,27.9510398,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9577b4d01c4f27:0xc4fcff59945d975d!8m2!3d-25.9936688!4d27.9536094!16s%2Fg%2F11v63f58zk?hl=en-US&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            directions
          </a>
        </div>
        <QuickLinks />
        <div className={styles.contacts}>
          <p>0823383783</p>
          <p>email@email.com</p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/m_t_gardens_fourways/?img_index=1"
            >
              {instagramSvg}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/0832123922?text=Hello,%20how%20can%20I%20help%20you?"
            >
              {whatsappSvg}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.terms}>
          <Link href="privacy">privacy policy</Link> |{" "}
          <Link href="terms">terms of use</Link>
        </div>
        <div className={styles.copyright}>
          &copy; MT Lifesyle Gardens | Made by <a href="#">Colossal Group</a>
        </div>
      </div>
    </MotionFooter>
  )
}
