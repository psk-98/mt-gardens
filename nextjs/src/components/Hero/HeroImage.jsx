"use client"

import { useAppSelector } from "@/store/hooks"
import { chooseBackgroundImage } from "@/utils/chooseBackgroundImage"
import Image from "next/image"

export default function HeroImage() {
  const { loading, images } = useAppSelector((state) => state.rootReducer.pages)

  return (
    <Image
      src={chooseBackgroundImage(images, "Home")}
      alt="flowers"
      height={500}
      width={500}
    />
  )
}
