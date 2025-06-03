
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import WarehouseService from '../service/warehouse-service';

import TitleComponent from "../components/warehouse/TitleComponent";
import TableHeaderComponent from "../components/warehouse/TableHeaderComponent";
import TableBodyComponent from "../components/warehouse/TableBodyComponent";
import SelectedBottomButtons from '../components/warehouse/SelectedItemsButton';

function Warehouse() {

    const dispatch = useDispatch();

    const selected_items = useSelector((state) => state.warehouseSlice.selected_items);

    useEffect(() => {
        dispatch(WarehouseService.getWarehouse())
    }, []);

    return (
        <div className=''>
            <TitleComponent />

            <div className="flex flex-col mt-5 ">
                
                <table className="w-full">
                    <TableHeaderComponent />
                    <TableBodyComponent />
                </table>
            
            </div>

            {
                selected_items.length > 0 && <SelectedBottomButtons />
            }

        </div>
    );
}

export default Warehouse;
