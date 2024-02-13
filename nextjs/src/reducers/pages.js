import { loadBackgroundImages } from "@/actions/events"
import { createSlice } from "@reduxjs/toolkit"

export const pagesSlice = createSlice({
  name: "pages",
  initialState: {},
  extraReducers: (buidler) => {
    buidler.addCase(loadBackgroundImages.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      state.images = action.payload
    })
    buidler.addCase(loadBackgroundImages.pending, (state, action) => {
      state.loading = true
    })
    buidler.addCase(loadBackgroundImages.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})
