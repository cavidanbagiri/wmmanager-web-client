
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import WarehouseService from '../service/warehouse-service';



const initialState = {
    warehouse: [],
    filter_warehouse: [],

    warehouse_headers: {
        company: true,
        material: true,
        quantity: true,
        left_over: true,
        unit: true,
        ordered: true,
        category: false,
        material_code: false,
        project: true,
        price: false,
        total: false,
        currency: false,
    },

    selected_items: [],

    warehouse_pending: false,
    is_warehouse_error: false,
}

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    reducers: {
        
        setWarehousePending: (state, action) => {
            state.warehouse_pending = action.payload;
        },
        setIsWarehouseError: (state, action) => {
            state.is_warehouse_error = action.payload;
        },

        setSelectedItems: (state, action) => {
            let available = false;
            for (let i = 0; i < state.selected_items.length; i++) {
                if (state.selected_items[i].id === action.payload.id) {
                    state.selected_items.splice(i, 1);
                    available = true;
                    break;
                }
            }
            if (!available) {
                state.selected_items.push(action.payload);
            }
        },
    },

    extraReducers: (builder) => {

        // Warehouseservice get warehouse
        builder.addCase(WarehouseService.getWarehouse.pending, (state, action) => {
            state.warehouse_pending = true;
        })
        builder.addCase(WarehouseService.getWarehouse.fulfilled, (state, action) => {
            state.warehouse = action.payload;
            state.warehouse_filter = action.payload;
            state.warehouse_pending = false;

        });
        builder.addCase(WarehouseService.getWarehouse.rejected, (state, action) => {
            console.log('payload error is ', action);
            state.warehouse_pending = false;
            state.is_warehouse_error = true;
            state.warehouse_message = action?.payload?.payload?.detail;
        });

    },

});


export const { setWarehousePending, setIsWarehouseError, setSelectedItems } = warehouseSlice.actions;

export default warehouseSlice.reducer;