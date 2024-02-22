import { configureStore } from "@reduxjs/toolkit";
import { favoriteCharacter } from "./slices/character.slice";

export const store = configureStore({
  reducer: {
    favoriteReducer: favoriteCharacter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
