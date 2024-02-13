import rootReducer from "@/reducers/rootReducer"
import { configureStore } from "@reduxjs/toolkit"

export const makeStore = () => {
  return configureStore({
    reducer: { rootReducer },
  })
}
