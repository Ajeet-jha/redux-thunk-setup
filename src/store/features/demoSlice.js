import { createSlice } from "@reduxjs/toolkit";
import {fetchData} from "../asyncThunk/demoThunk";

const initialState = {
    data: {
        name: "here", 
    },
};

const demoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload.slice(0, 5);
            return state;
        });
    },
});

export const { setData } = demoSlice.actions;
export default demoSlice.reducer;