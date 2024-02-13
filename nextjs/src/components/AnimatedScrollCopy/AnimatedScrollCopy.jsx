import { MotionSpan } from "../MotionComponents/MotionComponents"

export default function AnimatedScrollCopy() {
  return (
    <MotionSpan
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1.05, opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="scrollCopy"
    >
      scroll
    </MotionSpan>
  )
}

const copy = "scroll"

// hidden: { opacity: 0 },
// visible: {
//   opacity: 1,
//   transition: {
//     repeat: Infinity,
//   },
// },
