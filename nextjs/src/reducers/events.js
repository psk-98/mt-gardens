import { loadData } from "@/actions/events"
import { createSlice } from "@reduxjs/toolkit"

export const eventsSlice = createSlice({
  name: "events",
  initialState: {},
  extraReducers: (buidler) => {
    buidler.addCase(loadData.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      state.data = action.payload
    })
    buidler.addCase(loadData.pending, (state, action) => {
      state.loading = true
    })
    buidler.addCase(loadData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})
