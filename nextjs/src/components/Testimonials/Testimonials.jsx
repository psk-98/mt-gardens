"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import TestimontalSlider from "./TestimonialSlider"
import styles from "./Testimonials.module.css"

export default function Testimonials() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPlaceId = async () => {
      try {
        // `https://maps.googleapis.com/maps/api/place/details/json?fields=formatted_address,name,geometry&place_id=ChIJJ08c0LR3lR4RXZddlFn__MQ&key=AIzaSyA-LGhTpc_uyeYFwS2gL-u4gLTRAgz-7LY`

        const res = await axios.get(
          "https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?key=AIzaSyA-LGhTpc_uyeYFwS2gL-u4gLTRAgz-7LY"
        )

        console.log(res)
      } catch (err) {
        console.log(err)
        setError(err)
        setLoading(false)
      }
    }
    getPlaceId()
  }, [])

  return (
    <section className={styles.testimonialsContainer}>
      <h2>Testimonials</h2>
      <div className={styles.testimonials}>
        {/* <div className={styles.controls}>
          <button className={styles.leftControl}>{arrow}</button>{" "}
          <button className={styles.rightControl}>{arrow}</button>
        </div> */}
        <TestimontalSlider />
        {/* <div className={styles.testimonial}>
          <p
            className={styles.testParagraph}
          >{`I'm a testimonial. Click to edit me and add text that says something nice about you and your services.`}</p>
          <p className={styles.testOwner}>
            John Doe
            <br />
            22 May 2023
          </p>
        </div>
        <div className={styles.testimonial}>
          <p
            className={styles.testParagraph}
          >{`I'm a testimonial. Click to edit me and add text that says something nice about you and your services.`}</p>
          <p className={styles.testOwner}>
            John Doe
            <br />
            22 May 2023
          </p>
        </div>
        <div className={styles.testimonial}>
          <p
            className={styles.testParagraph}
          >{`I'm a testimonial. Click to edit me and add text that says something nice about you and your services.`}</p>
          <p className={styles.testOwner}>
            John Doe
            <br />
            22 May 2023
          </p>
        </div> */}
      </div>
    </section>
  )
}

const testimonials = [
  {
    paragraph:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "John Doe",
    day: "23 May 2023",
  },
  {
    paragraph:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
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
