"use client"

import { updateModalState } from "@/reducers/bookings"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import BookingStepOne from "./BookingStepOne"
import BookingStepTwo from "./BookingStepTwo"
import styles from "./Bookings.module.css"

export default function BookingModal() {
  const [isFirstStep, setFirstStep] = useState(true)

  const { isModalOpen } = useAppSelector((state) => state.rootReducer.bookings)
  const dispatch = useAppDispatch()

  return (
    isModalOpen && (
      <AnimatePresence mode="wait" initial={false}>
        <MotionDiv
          className={styles.modal}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <MotionDiv
            className={styles.formWrapper}
            variants={formWrapperVariants}
          >
            <div className={styles.formWrapperControls}>
              <button onClick={() => setFirstStep(true)}>
                {!isFirstStep && "Back"}
              </button>
              <button onClick={() => dispatch(updateModalState(false))}>
                Close
              </button>
            </div>
            {isFirstStep ? (
              <BookingStepOne setFirstStep={setFirstStep} />
            ) : (
              <BookingStepTwo />
            )}
          </MotionDiv>
          {/* 
      <MotionDiv>
      <BookingStepOne setFirstStep={setFirstStep} />
      <BookingStepTwo /></MotionDiv> */}
        </MotionDiv>
      </AnimatePresence>
    )
  )
}
const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
}

const formWrapperVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
}
