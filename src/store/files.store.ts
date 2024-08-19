import { createSlice, PayloadAction } from "@reduxjs/toolkit";




export interface ColorData {
    
    background_color:string,
    text_color:string,
    color:string,
    centerelement:string
}

const initialState: ColorData = {
    
    background_color:"#1a2028",
    text_color:"white",
    color:"violet",
    centerelement:'#1f252d'
};

const dataSlice = createSlice({
    name: "colorStore",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ColorData>) => {
            return {
                ...state,
                ...action.payload,


            };
        },
        resetData: (state) => {
            return {
                ...initialState,
            };
        },
    },
});

export default dataSlice.reducer;

export const { setData, resetData } = dataSlice.actions;