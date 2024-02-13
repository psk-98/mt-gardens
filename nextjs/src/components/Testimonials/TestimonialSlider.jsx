"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { arrow } from "../../../public/svgs"
import styles from "./Testimonials.module.css"

export default function TestimontalSlider() {
  const [index, setIndex] = useState(0)

  return (
    <>
      {console.log(index)}
      <div className={styles.controls}>
        <button
          className={styles.leftControl}
          onClick={() => {
            if (index > 0) setIndex(index - 1)
          }}
        >
          {arrow}
        </button>
        <button
          className={styles.rightControl}
          onClick={() => {
            if (index === testimonials.length - 1) setIndex(0)
            else setIndex(index + 1)
            // if (testimonials.length - 1 < index) setIndex(index + 1)
          }}
        >
          {arrow}
        </button>
      </div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          className={styles.testimonial}
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className={styles.testParagraph}>
            {testimonials[index].paragraph}
          </p>
          <p className={styles.testOwner}>
            {testimonials[index].name}
            <br />
            {testimonials[index].day}
          </p>
        </motion.div>
        {/* {testimonials.map((item, index) => (
        <motion.div
          className={styles.testimonial}
          key={index}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 300 },
            opacity: { duration: 1 },
          }}
        >
          <p className={styles.testParagraph}>{item[index].paragraph}</p>
          <p className={styles.testOwner}>
            {testimonials[index].name}
            <br />
            {testimonials[index].day}
          </p>
        </motion.div>
      ))} */}
      </AnimatePresence>
    </>
  )
}

const testimonials = [
  {
    paragraph:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.  something nice about you and your services.",
    name: "John Doe",
    day: "23 May 2023",
  },
  {
    paragraph:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.u and your services.",
    name: "John Doee",
    day: "25 May 2023",
  },
  {
    paragraph:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "John Doeee",
    day: "29 May 2023",
  },
]
