"use client"

import { useAppSelector } from "@/store/hooks"
import { chooseBackgroundImage } from "@/utils/chooseBackgroundImage"
import Image from "next/image"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import styles from "./Background.module.css"

export default function BackgroundImage({ page }) {
  const { loading, images } = useAppSelector((state) => state.rootReducer.pages)

  return (
    <MotionDiv
      className={styles.backgroundImg}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <Image
        src={chooseBackgroundImage(images, page)}
        alt="flowers"
        height={400}
        width={300}
        priority
      />
      <div></div>
    </MotionDiv>
  )
}
