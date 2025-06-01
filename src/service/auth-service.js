import { createAsyncThunk } from "@reduxjs/toolkit";

import $api from '../http';

class AuthService {

    static login = createAsyncThunk(
        '/auth/login',
        async (credentials, thunkAPI) => {
            try {
                const response = await $api.post('/auth/login', credentials);
                // Return data on success
                return {
                    payload: response.data,
                    status: response.status,
                };
            } catch (error) {
                // Extract error details
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                // Pass custom error payload
                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }
        });

    static refresh = createAsyncThunk(
        '/auth/refresh',
        async () => {
            try{
                const response = await $api.post('/auth/refresh');
                return {
                    payload: response.data,
                    status: response.status,
                };
            }
            catch (error) {
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                // Pass custom error payload
                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }
        }
    )

    static userLogout = createAsyncThunk(
       '/users/logout',
       async ()=>{
        try{
                const response = await $api.post('/auth/logout');
                return {
                    payload: response.data,
                    status: response.status,
                };
            }
            catch (error) {
                const errorData = error.response?.data || { message: error.message };
                const statusCode = error.response?.status || 500;

                // Pass custom error payload
                return thunkAPI.rejectWithValue({
                    payload: errorData,
                    status: statusCode,
                });
            }
        
       }
   )

}

export default AuthService;