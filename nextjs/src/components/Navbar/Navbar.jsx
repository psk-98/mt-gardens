"use client"
import { useState } from "react"
import Top from "./Top"
import Sidebar from "./Sidebar"

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Top toggle={toggle} setToggle={setToggle} navList={navList} />
      <Sidebar toggle={toggle} setToggle={setToggle} navList={navList} />
    </>
  )
}

export const navList = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "services", link: "/services" },
  { name: "contact us", link: "/contact" },
]
