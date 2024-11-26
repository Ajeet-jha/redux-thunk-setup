import {configureStore} from "@reduxjs/toolkit";
import demoSlice from "./features/demoSlice";

export const store = configureStore({
    reducer: {
        demo : demoSlice
    },
  })
  

