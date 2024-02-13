"use client"

import { scrollInVariants } from "@/animations/common"
import { updateBookingInfo } from "@/reducers/bookings"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { sortUpcomingEvents } from "@/utils/sortUpcomingEvents"
import dayjs from "dayjs"
import Image from "next/image"
import { MotionDiv, MotionSection } from "../MotionComponents/MotionComponents"
import styles from "./UpcomingEvents.module.css"

export default function UpcomingEvents() {
  const dispatch = useAppDispatch()

  const { loading, data } = useAppSelector((state) => state.rootReducer.events)

  return loading ? (
    <>Loading...</>
  ) : (
    <MotionSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
      className={styles.upcomingEvents}
    >
      <h2>Upcoming Events</h2>
      <div className={styles.events}>
        {sortUpcomingEvents(data)?.map((event, i) => (
          <MotionDiv
            className={styles.event}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i }}
            key={`${event.id}${i}`}
            style={{
              backgroundImage: `url(${event.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center center",
            }}
          >
            <div className={styles.eventImg}>
              <Image
                src={event.imageUrl}
                alt={`${event.name} image`}
                width={400}
                height={400 / 1.3333}
              />
            </div>
            <div className={styles.eventDetails}>
              <p className={styles.eventName}>{event.name} </p>
              <p className={styles.eventTime}>
                {dayjs(event.date).format("DD MMMM YYYY")}, {event.startTime}
              </p>
              <p className={styles.eventPrice}>R{event.price} pp</p>
              <button
                className={`cta `}
                onClick={() =>
                  dispatch(
                    updateBookingInfo({
                      eventName: event.name,
                      eventDate: event.date,
                    })
                  )
                }
              >
                book now
              </button>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  )
}
