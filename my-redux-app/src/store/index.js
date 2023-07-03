import { configureStore } from "@reduxjs/toolkit";
import users from '../components/user/userSlice';
import { apiSlice } from '../api/apiSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({
            type: action
        })
    }
    return next(action)
};


export const store = configureStore({
    reducer: {
        users, [
            apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== "production"
})