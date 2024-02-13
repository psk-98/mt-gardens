import { sanityClient } from "@/utils/configSantiy"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { LOAD_DATA, LOAD_IMAGES } from "./type"

export const loadData = createAsyncThunk(LOAD_DATA, async (thunkAPI) => {
  try {
    const query = `*[_type == 'events'   ] {
        _id, name, coverImage, price, description,
        "coverImageUrl": coverImage.asset->url,
        "eventDates": *[_type == "eventDate" && references(^._id)].dayOfEvent | order(dayOfEvent),
        "startTime": *[_type == "eventDate" && references(^._id)].startTime | order(dayOfEvent),

      }`
    const data = await sanityClient.fetch(query)
    return data
  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err?.res)
  }
})

export const loadBackgroundImages = createAsyncThunk(
  LOAD_IMAGES,
  async (thunkAPI) => {
    try {
      const query = ` *[_type == 'coverImage'    ] {
      _id, pageName,
      "ImageUrl": backgroundImage.asset->url,

    }`
      const data = await sanityClient.fetch(query)
      return data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err?.res)
    }
  }
)

// *[_type == 'events'   ] {
//         _id, name,
//         "eventDates": *[_type == "eventDate" && references(^._id)].dayOfEvent | order(dayOfEvent),
//         "startTime": *[_type == "eventDate" && references(^._id)].startTime | order(dayOfEvent),

// }
