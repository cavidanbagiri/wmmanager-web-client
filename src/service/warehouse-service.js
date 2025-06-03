import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from '../http';

class WarehouseService {

    static getWarehouse = createAsyncThunk(
        '/warehouse',
        async () => {
            try {
                const response = await $api.get('/warehouse');
                return {
                    payload: response.data,
                    status: response.status,
                };
            } catch (error) {
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

export default WarehouseService;
