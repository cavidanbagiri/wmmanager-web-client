import React from 'react'

import tempdata from '../../constants/tempdata'

function TableBodyComponent() {
  return (


    <tbody style={{ fontFamily: "Roboto" }} className=''>


        {
            tempdata.map((item, index) => {
                return (
                    <tr key={index} className='border-b border-gray-200 text-start hover:bg-gray-100 hover:cursor-pointer duration-150 text-[13px]' >
                        <td className='p-[5px] text-center'>{index + 1}</td>
                        <td className='p-[5px]' >{item.material_name}</td>
                        <td className='p-[5px] text-center' >{item.quantity}</td>
                        <td className='p-[5px] text-center' >{item.unit}</td>
                        <td className='p-[5px] text-center' >{item.ordered_by}</td>
                        <td className='p-[5px] text-center' >{item.group_name}</td>
                    </tr>
                )
            })
        }

    </tbody>
  )
}

export default TableBodyComponent