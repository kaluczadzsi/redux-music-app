import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  songs: [],
  loading: false,
  error: '',
};

const fetchSongs = createAsyncThunk('song/fetchSongs', async (title) => {
  const response = await axios.get(
    `https://musicbrainz.org/ws/2/release-group?fmt=json&query=${title}`
  );

  return response.data;
});

const song = createSlice({
  name: 'song',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      (state.loading = false),
        (state.songs = action.payload),
        (state.error = '');
    });
    builder.addCase(fetchSongs.rejected, (state, action) => {
      (state.loading = false),
        (state.songs = []),
        (state.error = action.error.message);
    });
  },
});

export default song.reducer;
export { fetchSongs };
