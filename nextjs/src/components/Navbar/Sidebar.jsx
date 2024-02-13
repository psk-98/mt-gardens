import { motion } from "framer-motion"
import styles from "@/styles/nav.module.css"
import { useRouter } from "next/navigation"
import { navLinkVariants, sidebarVariants } from "@/animations/navbar"

export default function Sidebar({ navList, toggle, setToggle }) {
  const router = useRouter()
  return (
    <motion.nav
      className={styles.sidebar}
      initial={false}
      animate={toggle ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <motion.ul className={styles.sideItems}>
        {navList.map((item, index) => {
          if (index === navList.length - 1)
            return (
              <motion.li
                className={styles.sideItem}
                key={index}
                variants={navLinkVariants}
                onClick={() => {
                  router.push(item.link)
                  setToggle(false)
                }}
              >
                {item.name}
              </motion.li>
            )
          else
            return (
              <motion.li
                className={styles.sideItem}
                key={index}
                variants={navLinkVariants}
                onClick={() => {
                  router.push(item.link)
                  setToggle(false)
                }}
              >
                {item.name}
              </motion.li>
            )
        })}
      </motion.ul>
    </motion.nav>
  )
}
