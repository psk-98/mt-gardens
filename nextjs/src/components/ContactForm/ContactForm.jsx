import { scrollInVariants } from "@/animations/common"
import { instagramSvg, whatsappSvg } from "../../../public/svgs"
import {
  MotionButton,
  MotionDiv,
  MotionForm,
  MotionSection,
} from "../MotionComponents/MotionComponents"
import styles from "./ContactForm.module.css"

export default function ContactForm() {
  return (
    <MotionSection
      className={styles.formContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
    >
      <h2>Inquires</h2>
      <p>
        Want to book instead?{" "}
        <MotionButton whileHover={{ scale: 1.05 }}>Book here</MotionButton>
      </p>
      <div className={styles.detailsContainer}>
        <MotionForm
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollInVariants}
        >
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="Message" />
          </div>
          <button type="submit" className="cta">
            Send
          </button>
        </MotionForm>
        <MotionDiv
          className={styles.details}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollInVariants}
        >
          <div className={styles.socials}>
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
          <div className={styles.contactDetails}>
            <a href="tel: 08348393202">08348393202</a>
            <a href="mailto: email@email.com">email@email.com</a>
          </div>
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
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
