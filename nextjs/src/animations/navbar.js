export const line1Variants = {
  open: {
    rotateZ: -405,
    translateX: -9,
    translateY: 7,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      //delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const line2Variants = {
  open: {
    rotateZ: 405,
    translateX: -9,
    translateY: -7,
    width: "100%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    width: "10px",
    transition: {
      //delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const sidebarVariants = {
  open: {
    height: "100%",
    opacity: 1,
    transition: {
      type: "linear",
      stiffness: 50,
      restDelta: 2,
      staggerChildren: 0.1,
      delayChildren: 0.4,
      height: {
        duration: 0.001,
      },
    },
  },
  closed: {
    height: 0,
    top: 0,
    opacity: 0,
    transition: {
      type: "linear",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
      height: {
        delay: 0.5,
        duration: 0.001,
      },
    },
  },
}

export const navLinkVariants = {
  active: {
    color: "#ffb800",
    transition: {
      type: "linear",
    },
  },
  open: {
    opacity: 1,
    transition: {
      type: "linear",
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      type: "linear",
      y: { stiffness: 1000 },
    },
  },
}
