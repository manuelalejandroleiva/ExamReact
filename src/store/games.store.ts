import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameInterface } from "src/Interfaces/GamesInterfaces";
import { ColorData } from "./files.store";




export interface GamesData {
    
   games:GameInterface[] 
}

const initialState: GamesData = {
    games: []
};

const GamesSlice = createSlice({
    name: "gamesStore",
    initialState,
    reducers: {
        setGame: (state, action: PayloadAction<GamesData>) => {
            return {
                ...state,
                ...action.payload,


            };
        },
        resetGame: (state) => {
            return {
                ...initialState,
            };
        },
    },
});

export default GamesSlice.reducer;

export const { setGame, resetGame } = GamesSlice.actions;