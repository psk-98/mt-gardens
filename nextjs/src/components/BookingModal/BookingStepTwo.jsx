import { useAppDispatch, useAppSelector } from "@/store/hooks"
import dayjs from "dayjs"
import { useState } from "react"
import {
  MotionButton,
  MotionDiv,
  MotionForm,
} from "../MotionComponents/MotionComponents"
import styles from "./Bookings.module.css"

export default function BookingStepTwo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const { eventName, eventDate, numberOfPeople } = useAppSelector(
    (state) => state.rootReducer.bookings
  )
  const { data, loading } = useAppSelector((state) => state.rootReducer.events)

  const dispatch = useAppDispatch()

  return (
    !loading && (
      <MotionForm>
        <MotionDiv>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </MotionDiv>
        <MotionDiv>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </MotionDiv>
        <MotionDiv>
          <input
            type="text"
            value={phone}
            placeholder="Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </MotionDiv>
        <input type="text" name="eventName" value={eventName} hidden />
        <input
          type="text"
          name="eventDate"
          value={dayjs(eventDate).format("DD MMMM YYYY")}
          hidden
        />
        <input
          type="text"
          name="numberOfPeople"
          value={numberOfPeople}
          hidden
        />
        <div className={styles.bookingBtn}>
          <div></div>
          <MotionButton className="cta">Book</MotionButton>
        </div>
      </MotionForm>
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
