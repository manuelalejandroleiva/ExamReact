import { createSlice, PayloadAction } from "@reduxjs/toolkit";





export interface ImgeData {
    
   image:string
}

const initialState: ImgeData = {
    image: ""
};

const ImgeSlice = createSlice({
    name: "ImageStore",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<ImgeData>) => {
            return {
                ...state,
                ...action.payload,


            };
        },
        resetImage: (state) => {
            return {
                ...initialState,
            };
        },
    },
});

export default ImgeSlice.reducer;

export const { setImage, resetImage } = ImgeSlice.actions;