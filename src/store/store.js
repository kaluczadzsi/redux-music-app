import { configureStore } from '@reduxjs/toolkit'
import { songReducer, fetchSongs } from '../features/songSlice'

const store = configureStore({
  reducer: {
    song: songReducer,
  },
})
