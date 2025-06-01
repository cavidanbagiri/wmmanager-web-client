import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import AuthService from '../service/auth-service';

axios.defaults.withCredentials = true;



const initialState = {
    user: {
        email: 'unknown',
        username: '',
        project_id: 0,
        // user_status: 0,
        // is_admin: false,
        // profile_image: '',
    },
    login_message: '',
    login_pending: false,
    is_auth: false,
    is_login_error: false,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoginPending: (state, action) => {
            state.login_pending = action.payload;
        },
        setIsAuth: (state, action) => {
            state.is_auth = action.payload;
        },
        setIsLoginErrorTrue: (state) => {
            state.is_login_error = true;
        },
        setIsLoginErrorFalse: (state) => {
            state.is_login_error = false;
        },
    },
    extraReducers: (builder) => {

        // Userservice login
        builder.addCase(AuthService.login.pending, (state, action) => {
            state.login_pending = true;
        })
        builder.addCase(AuthService.login.fulfilled, (state, action) => {
            state.is_auth = true;
            state.login_pending = false;
            state.user = action.payload;
            localStorage.setItem('token', action.payload.payload.access_token);
            localStorage.setItem('sub', action.payload.payload.user.sub); 
            localStorage.setItem('username', action.payload.payload.user.username); 
        });
        builder.addCase(AuthService.login.rejected, (state, action) => {
            state.login_pending = false;
            state.is_auth = false;
            state.is_login_error = true;
            state.login_message = action.payload.payload.detail;

        });


        // Userservice refresh
        builder.addCase(AuthService.refresh.fulfilled, (state, action) => {
            state.is_auth = true;
            state.user = action.payload;
            localStorage.setItem('token', action.payload.payload.access_token);
            localStorage.setItem('sub', action.payload.payload.user.sub);
            localStorage.setItem('username', action.payload.payload.user.username);
        });
        builder.addCase(AuthService.refresh.rejected, (state, action) => {
            console.log('refresh second', action.payload);
            // state.login_pending = false;
            // state.is_auth = false;
            // state.is_login_error = true;
            // state.login_message = action?.payload?.payload?.detail;
        });


        // Userservice logout
        builder.addCase(AuthService.userLogout.fulfilled, (state, action) => {
            state.is_auth = false;
            state.user = null;
            localStorage.clear();
        });

    },
});

export const { setUser, setLoginPending, setIsAuth, setIsLoginErrorTrue, setIsLoginErrorFalse } = authSlice.actions;

export default authSlice.reducer;