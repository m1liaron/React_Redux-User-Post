import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook'

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
    usersLoadingStatus: 'idle',
});

export const fetchUsers = createAsyncThunk(
    'usersList/fetchUsers',
    async () => {
        const request = useHttp();
        return await request("http://localhost:3000/usersList")
    }
)

const userSlice = createSlice({
    name: 'usersList',
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

const { actions, reducer } = userSlice;

export default reducer;

export const { setAll } = userAdapter.getSelectors(state => state.users);

export const {
    usersFetching,
    usersFetched,
    usersFetchingError
} = actions;