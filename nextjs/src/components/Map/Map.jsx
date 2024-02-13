"use client"

import { scrollInVariants } from "@/animations/common"
import GoogleMapReact from "google-map-react"
import { MotionDiv } from "../MotionComponents/MotionComponents"
import styles from "./Map.module.css"

export default function Map() {
  const location = {
    lng: 27.9510291,
    lat: -25.9936688,
  }
  return (
    <MotionDiv
      className={styles.map}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollInVariants}
    >
      <div
        className={styles.googleMmap}
        style={{ height: "50vh", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-LGhTpc_uyeYFwS2gL-u4gLTRAgz-7LY" }}
          defaultCenter={location}
          defaultZoom={10}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text="M|T Gardens"
          />
        </GoogleMapReact>
      </div>
    </MotionDiv>
  )
}

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <svg
      fill="#f00"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40px"
      height="40px"
      viewBox="0 0 425.963 425.963"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
		c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
		c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
		C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
		c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
        />
      </g>
    </svg>

    <p>{text}</p>
  </div>
)
