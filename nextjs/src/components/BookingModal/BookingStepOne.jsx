import { itemVariants, listVariants } from "@/animations/booking"
import {
  updateEventDate,
  updateEventName,
  updateNoPeople,
} from "@/reducers/bookings"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import dayjs from "dayjs"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  MotionButton,
  MotionDiv,
  MotionSpan,
} from "../MotionComponents/MotionComponents"
import styles from "./Bookings.module.css"

export default function BookingStepOne({ setFirstStep }) {
  const [noPeople, setNoPeople] = useState(1)
  const [isNameOpen, setNameOpen] = useState(false)
  const [isDateOpen, setDateOpen] = useState(false)

  const { eventName, eventDate, price } = useAppSelector(
    (state) => state.rootReducer.bookings
  )
  const { data, loading } = useAppSelector((state) => state.rootReducer.events)

  const dispatch = useAppDispatch()

  const handleNextBtnClick = () => {
    dispatch(updateNoPeople(noPeople))
    setFirstStep(false)
  }

  return (
    !loading && (
      <>
        {console.log(isDateOpen)}
        <div className={styles.eventName}>
          <label>Event</label>
          <div
            className={styles.controls}
            onClick={() => setNameOpen(!isNameOpen)}
          >
            {eventName ? (
              <p> {eventName}</p>
            ) : (
              <p className={styles.disabledText}>Select an event</p>
            )}
            <span>v</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {isNameOpen && (
              <MotionDiv
                className={styles.eventList}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {data?.map((event, i) => (
                  <MotionSpan
                    className={
                      eventName?.toLowerCase() == event?.name?.toLowerCase()
                        ? styles.active
                        : undefined
                    }
                    key={i}
                    onClick={() => {
                      dispatch(
                        updateEventName({
                          name: event.name,
                          dates: event.eventDates,
                          price: event.price,
                        })
                      )
                      setNameOpen(false)
                    }}
                    variants={itemVariants}
                  >
                    {event.name}
                  </MotionSpan>
                ))}
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
        <div
          className={styles.eventDate}
          onClick={() => setDateOpen(!isDateOpen)}
        >
          <label>Date</label>
          <div className={styles.controls}>
            {eventDate?.length > 0 ? (
              <>
                <p> {dayjs(eventDate).format("DD MMMM YYYY")}</p>
                <span>v</span>
              </>
            ) : (
              <p className={styles.disabledText}>
                Event Dates Currently Unavialble
              </p>
            )}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            {isDateOpen && (
              <MotionDiv
                className={styles.eventList}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {getEventByName(data, eventName)?.map((date, i) => (
                  <MotionSpan
                    className={eventDate === date ? "active" : undefined}
                    key={i}
                    onClick={() => {
                      dispatch(updateEventDate(date))
                      setDateOpen(false)
                    }}
                    variants={itemVariants}
                  >
                    {dayjs(date).format("DD MMMM YYYY")}
                  </MotionSpan>
                ))}
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.noPeople}>
          <label htmlFor="noPeople">Number of people</label>
          <input
            type="number"
            name="noPeople"
            onChange={(e) => setNoPeople(e.target.value)}
            value={noPeople}
          />
        </div>
        <div className={styles.formBtn}>
          <span>
            {!isNaN(noPeople * price) && `Total R${noPeople * price}`}
          </span>
          <MotionButton className="cta" onClick={() => handleNextBtnClick()}>
            Next
          </MotionButton>
        </div>
      </>
    )
  )
}

const getEventByName = (events, selectedEvent) => {
  let _eventDates = []

  for (let i = 0; i < events?.length; i++) {
    if (events[i].name == selectedEvent) _eventDates = [...events[i].eventDates]
  }

  let sorted = _eventDates.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  console.log(sorted)
  return sorted
}
