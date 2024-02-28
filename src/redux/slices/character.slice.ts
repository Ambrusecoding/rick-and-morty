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
const FAVORITE_CHARACTERS_KEY = "favoriteCharacters";

const initialState: FavoriteState[] = JSON.parse(
  localStorage.getItem(FAVORITE_CHARACTERS_KEY) ?? "[]"
);

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
      // Guarda los datos en el localStorage después de actualizar el estado
      localStorage.setItem("favoriteCharacters", JSON.stringify(state));
    },
    /* removeFavoriteCharacter: (
      state,
      action: PayloadAction<RemoveFavoriteState>
    ) => {
      const { id } = action.payload;
      // Add logic to handle removing a favorite character
      if (state.some((item) => item.id === id)) {
        return (state = state.filter((item) => item.id !== id));
      }
      // Guarda los datos en el localStorage después de actualizar el estado
      localStorage.setItem("favoriteCharacters", JSON.stringify(state));
    },
       removeFavoriteCharacter: (
      state,
      action: PayloadAction<RemoveFavoriteState>
    ) => {
      const { id } = action.payload;
      // Add logic to handle removing a favorite character
      if (state.some((item) => item.id === id)) {
        return state.filter((item, index) => {
          if (item.id === id) {
            // Remove the item from the state
            state.splice(index, 1);
          }
        });
      }
      // Guarda los datos en el localStorage después de actualizar el estado
      localStorage.setItem("favoriteCharacters", JSON.stringify(state));
    },

   
   */
    removeFavoriteCharacter: (
      state,
      action: PayloadAction<RemoveFavoriteState>
    ) => {
      const { id } = action.payload;
      const iCharacter = state.findIndex((item) => item.id === id);
      if (iCharacter !== -1) {
        state.splice(iCharacter, 1);
      }

      // Guarda los datos en el localStorage después de actualizar el estado
      localStorage.setItem(FAVORITE_CHARACTERS_KEY, JSON.stringify(state));
    },
  },
});

export const { addFavoriteCharacter, removeFavoriteCharacter } =
  favoriteCharacter.actions;
