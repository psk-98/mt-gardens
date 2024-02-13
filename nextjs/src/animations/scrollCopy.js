export const copyWrapperVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
      repeat: Infinity,
      repeatType: "reserve",
    },
  },
}
export const characterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      repeat: Infinity,
    },
  },
}
