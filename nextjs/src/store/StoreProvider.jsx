"use client"
import { loadBackgroundImages, loadData } from "@/actions/events"
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore } from "./store"

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  //   const [data, setData] = useState(getData())
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(loadData())
    storeRef.current.dispatch(loadBackgroundImages())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
