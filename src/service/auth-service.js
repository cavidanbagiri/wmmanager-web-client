import { createAsyncThunk } from "@reduxjs/toolkit";

import $api from '../http';

class AuthService {

    static login = createAsyncThunk('/auth/login', 
        async (credentials) => {
            let data = null;
            console.log('credentials is ', credentials);
            await $api.post('/auth/login', credentials)
            .then(response => {
                console.log('reponse is ', response);
                data.payload = response.data;
                data.status = response.status;
                return data;
            })
            .catch(error => {
                console.log('error os ',error);
                data.payload = error.response.data;
                data.status = error.response.status;
                return data;
            });
            return data;
            
    });


}

export default AuthService;