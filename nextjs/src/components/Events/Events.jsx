"use client"

import { scrollInVariants } from "@/animations/common"
import { useAppSelector } from "@/store/hooks"
import Image from "next/image"
import { MotionDiv, MotionSection } from "../MotionComponents/MotionComponents"
import styles from "./Events.module.css"

export default function Events() {
  const { loading, data } = useAppSelector((state) => state.rootReducer.events)

  return (
    <MotionSection
      className={styles.eventsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
    >
      {data?.map((event, i) => (
        <MotionDiv
          className={styles.event}
          key={event._id}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 * i }}
        >
          <h2>{event.name}</h2>
          <div className={styles.eventImg}>
            <Image
              src={event.coverImageUrl}
              alt="flowers"
              height={160}
              width={327}
            />
          </div>
          <div className={styles.eventCopy}>
            <h2>{event.name}</h2>
            <p className={styles.desc}>{event.description}</p>
            <p className={styles.price}>R{event.price} pp</p>
            <button
              className={`cta `}
              onClick={() =>
                dispatch(
                  updateBookingInfo({
                    eventName: event.name,
                  })
                )
              }
            >
              book now
            </button>
          </div>
        </MotionDiv>
      ))}
    </MotionSection>
  )
}
