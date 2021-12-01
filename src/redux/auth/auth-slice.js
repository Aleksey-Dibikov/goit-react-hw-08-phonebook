import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operation";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuth: false,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isAuth = false;
        },
        [fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isAuth = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        }
    },
});

export default authSlice.reducer;