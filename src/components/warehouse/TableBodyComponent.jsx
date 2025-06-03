
import { useSelector, useDispatch } from 'react-redux'

import { blue } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';


import { setSelectedItems } from '../../store/warehouse-store';

function TableBodyComponent() {

    const dispatch = useDispatch();

    const warehouse_filter = useSelector((state) => state.warehouseSlice.warehouse_filter);
    const warehouse_headers = useSelector((state) => state.warehouseSlice.warehouse_headers);

    const handleCheckbox = (item) => {
        dispatch(setSelectedItems(item));
    }

    return (

        <tbody style={{ fontFamily: "Roboto" }} className=''>


            {warehouse_filter?.payload?.length && warehouse_filter?.payload?.map((item, index) => {
                return (
                    <tr key={index} className='border-b border-gray-200 text-start hover:bg-gray-100 hover:cursor-pointer duration-150 text-[11px]' >
                        <td className='p-[5px] text-center'>
                            <Checkbox sx={{
                                '&.Mui-checked': {
                                    color: blue[600],
                                },
                            }} checked={item.is_selected} onChange={() => handleCheckbox(item)} />
                        </td>
                        <td className='p-[5px] text-center' >{index + 1}</td>
                        {
                            warehouse_headers.company &&
                            <td className='p-[5px] w-48' >{item.company.company_name.repeat(5)}</td>
                        }
                        {
                            warehouse_headers.material &&
                            <td className='p-[5px]' >{item.material_name}</td>
                        }
                        {
                            warehouse_headers.quantity &&
                            <td className='p-[5px] text-center w-16' >{item.qty}</td>
                        }
                        {
                            warehouse_headers.left_over &&
                            <td className='p-[5px] text-center w-16' >{item.left_over}</td>
                        }
                        {
                            warehouse_headers.unit &&
                            <td className='p-[5px] text-center w-16' >{item.unit.toUpperCase()}</td>
                        }
                        {
                            warehouse_headers.ordered &&
                            <td className='p-[5px] text-center' >{item.ordered.ordered_name}</td>
                        }
                        {
                            warehouse_headers.category &&
                            <td className='p-[5px] text-center' >{item.category}</td>
                        }
                        {
                            warehouse_headers.material_code &&
                            <td className='p-[5px] text-center' >{item.material_code.description}</td>
                        }
                        {
                            warehouse_headers.project &&
                            <td className='p-[5px] text-center w-24' >{item.project.project_name}</td>
                        }
                        {
                            warehouse_headers.price &&
                            <td className='p-[5px] text-center' >{item.price}</td>
                        }
                        {
                            warehouse_headers.price &&
                            <td className='p-[5px] text-center' >{item.price * item.qty}</td>
                        }
                        {
                            warehouse_headers.currency &&
                            <td className='p-[5px] text-center' >{item.currency}</td>
                        }
                    </tr>
                )
            })}

        </tbody>
    )
}

export default TableBodyComponent