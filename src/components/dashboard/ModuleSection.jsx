import React from 'react'

import warehouse from '../../assets/warehouse.png'
import stock from '../../assets/stock.png'
import area from '../../assets/area.png'
import temp from '../../assets/temp.jpg'

function ModuleSection() {
  return (
    <div style={{ fontFamily: "Mona Sans", fontWeight: "600" }} className='flex flex-row p-2 m-4 h-64 rounded-lg'>

        <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <img className='w-24 h-24 rounded-full' 
            src={temp} alt="" />
            <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-bold">Hazan Ozgur Koylu</h1>
                <p className="text-gray-400">Warehouse Staff</p>
            </div>
        </div>
        
        <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <span className='w-full text-5xl text-black text-center p-2 rounded-lg'>Warehouse</span>
            <img className='w-1/3' src={warehouse} alt="" />
            <span className='w-full text-md text-right text-gray-400'>
                Total rows 1234
            </span>
        </div>

        <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <span className='w-full text-5xl text-black text-center p-2 rounded-lg'>Stock</span>
            <img className='w-1/3' src={stock} alt="" />
            <span className='w-full text-md text-right text-gray-400'>
                Total rows 1234
            </span>
        </div>

        <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <span className='w-full text-5xl text-black text-center p-2 rounded-lg'>Area</span>
            <img className='w-1/3' src={area} alt="" />
            <span className='w-full text-md text-right text-gray-400'>
                Total rows 1234
            </span>
        </div>

        <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <span className='w-full text-5xl text-black text-center p-2 rounded-lg'>Profile</span>
            <img className='w-1/3' src={warehouse} alt="" />
            <span className='w-full text-md text-right text-gray-400'>
                Total rows 1234
            </span>
        </div>

    </div>
  )
}

export default ModuleSection