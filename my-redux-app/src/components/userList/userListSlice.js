import { createSlice} from "@reduxjs/toolkit";


const initialState = userAdapter.getInitialState({
    usersLoadingStatus: 'idle',
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(stata, action) {
            state.users = [...state.users, action.payload]
        }
    }
});