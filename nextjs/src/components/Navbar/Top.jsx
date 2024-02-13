import { line1Variants, line2Variants } from "@/animations/navbar"
import { motion } from "framer-motion"
import Link from "next/link"
import { logo } from "../../../public/svgs"
import styles from "./Nav.module.css"

export default function Top({ toggle, setToggle }) {
  return (
    <nav className={styles.navTop}>
      <Link href="/" className={styles.logo}>
        {logo}
      </Link>
      <ul className={styles.navList}>
        <Link href="/" className={styles.navItem}>
          Home
        </Link>
        <Link href="/about" className={styles.navItem}>
          about
        </Link>
        <Link href="/services" className={styles.navItem}>
          Services
        </Link>
        <Link href="/contact" className={styles.navItem + " cta"}>
          Contact us
        </Link>
      </ul>
      <div
        className={styles.burger}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <motion.div
          className={styles.line1}
          variants={line1Variants}
          initial={false}
          animate={toggle ? "open" : "close"}
        ></motion.div>
        <motion.div
          className={styles.line2}
          initial={false}
          variants={line2Variants}
          animate={toggle ? "open" : "close"}
        ></motion.div>
      </div>
    </nav>
  )
}
