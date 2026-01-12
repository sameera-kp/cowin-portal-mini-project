import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchMode: 'pin' | 'district' | 'map';
}

const initialState: SearchState = {
  searchMode: 'pin',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchMode: (state, action: PayloadAction<'pin' | 'district' | 'map'>) => {
      state.searchMode = action.payload;
    },
  },
});

export const { setSearchMode } = searchSlice.actions;
export default searchSlice.reducer;