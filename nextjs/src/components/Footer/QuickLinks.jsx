"use client"

import { usePathname, useRouter } from "next/navigation"
import { navList } from "../Navbar/Navbar"
import styles from "./Footer.module.css"

export default function QuickLinks() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className={styles.quickLinks}>
      <ul>
        {navList.map((item, index) => (
          <li
            className={pathname === item.link ? styles.active : undefined}
            key={index}
            onClick={() => {
              router.push(item.link)
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
