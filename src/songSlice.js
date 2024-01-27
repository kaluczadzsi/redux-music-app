import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { build } from 'vite'

const initialState = {
  songs: [],
  loading: false,
  error: null,
}

const fetchSongs = createAsyncThunk('song/fetchSongs', () => {
  return axios
    .get('https://musicbrainz.org/ws/2/release-group?fmt=json&query=queen')
    .then((response) => response.data.map((song) => song.count))
})

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: (builder) => {
    builder.addCase(fetchSongs.pending, (state) => {
      state.loading = true
    })
    build.addCase(fetchSongs.fulfilled, (state, action) => {
      ;(state.loading = false), (state.songs = action.payload), (state.error = '')
    })
    build.addCase(fetchSongs.rejected, (state, action) => {
      ;(state.loading = false), (state.songs = []), (state.error = action.error.message)
    })
  },
})

export const songReducer = songSlice.reducer
export { fetchSongs }
