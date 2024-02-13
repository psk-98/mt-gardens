import { combineReducers } from "@reduxjs/toolkit"
import { bookingsSlice } from "./bookings"
import { eventsSlice } from "./events"
import { pagesSlice } from "./pages"

export default combineReducers({
  events: eventsSlice.reducer,
  bookings: bookingsSlice.reducer,
  pages: pagesSlice.reducer,
})
