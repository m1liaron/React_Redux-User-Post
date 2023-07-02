import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
    usersLoadingStatus: 'idle',
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userCreated: (state, action) => {
            userAdapter.addOne(state, action.payload);
        },
        userDeleted: (state, action) => {
            userAdapter.removeOne(state, action.payload);
        }
    },
        extraReducers: (builder) => {
            builder
                .addCase(fetchUsers.pending, state => { state.usersLoadingStatus = 'loading' })
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.usersLoadingStatus = 'idle'
                    userAdapter.setAll(state, action.payload);
                })
                .addCase(fetchUsers.rejected, state => {
                    state.usersLoadingStatus = 'error';
                })
                .addDefaultCase(() => {})
        }
});