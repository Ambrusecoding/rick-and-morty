import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface FavoriteState {
  id: string | number;
  name: string;
  info: string;
  image: string;
}
interface RemoveFavoriteState {
  id: string | number;
}

// Define the initial state using that type
const initialState: FavoriteState[] = [];

export const favoriteCharacter = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteCharacter: (state, action: PayloadAction<FavoriteState>) => {
      // Add logic to handle adding a favorite character
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeFavoriteCharacter: (
      state,
      action: PayloadAction<RemoveFavoriteState>
    ) => {
      const { id } = action.payload;
      // Add logic to handle removing a favorite character
      if (state.some((item) => item.id === id)) {
        return (state = state.filter((item) => item.id !== id));
      }
    },
  },
});

export const { addFavoriteCharacter, removeFavoriteCharacter } =
  favoriteCharacter.actions;
