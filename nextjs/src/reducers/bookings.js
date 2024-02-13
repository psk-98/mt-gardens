import { createSlice } from "@reduxjs/toolkit"

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    updateBookingInfo: (state, action) => {
      state.eventName = action.payload?.eventName
      state.eventDate = action.payload?.eventDate
    },
    updateEventName: (state, action) => {
      console.log(action.payload)
      console.log(action.payload.dates[0])
      state.eventName = action.payload.name
      state.eventDate =
        action.payload.dates.length > 0 ? action.payload.dates[0] : []
      state.price = action.payload.price
    },
    updateEventDate: (state, action) => {
      state.eventDate = action.payload
    },
    updateNoPeople: (state, action) => {
      state.numberOfPeople = action.payload
    },
    updateModalState: (state, action) => {
      state.isModalOpen = action.payload
    },
  },
})

export const {
  updateBookingInfo,
  updateEventDate,
  updateEventName,
  updateNoPeople,
  updateModalState,
} = bookingsSlice.actions
