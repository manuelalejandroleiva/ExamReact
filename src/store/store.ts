
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataSlice  from './files.store'
import ImgeSlice from './image.store'

import GamesSlice from './games.store'
export const store = configureStore({
    reducer: {
      dataSlice,
      GamesSlice,
      ImgeSlice
     
    },
  });



  //Export Types
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;