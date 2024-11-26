import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("demo/fetchData", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
});

