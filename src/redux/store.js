import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./reducers.js";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});