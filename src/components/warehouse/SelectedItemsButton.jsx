
import React from 'react'

import { useSelector } from 'react-redux'

import { motion } from 'framer-motion';


import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";


const containerVariants = {
    hidden: {
        y: 100,     // Start from below screen
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 25,
        },
    },
    exit: {
        y: 100,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};


function SelectedBottomButtons() {

    const selected_items = useSelector((state) => state.warehouseSlice.selected_items);

    return (
        <motion.div style={{ fontFamily: "IBM Plex sans" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='flex flex-row justify-between fixed bottom-10 left-1/2 transform -translate-x-1/2 w-1/2 bg-white z-20 border border-gray-200 shadow-lg flex justify-between items-center rounded-lg'>

            <div className='flex flex-row items-center bg-blue-600 h-full p-3 rounded-lg text-white'>
                <span className='text-2xl font-bold'>Total</span> <span className='text-2xl font-bold ml-5'>{selected_items.length}</span>
            </div>

            <div className='flex flex-row items-center p-1'>

                <div className='flex flex-col items-center justify-center mx-2 hover:bg-gray-200 hover:cursor-pointer p-1 rounded-lg mr-4'>
                    <IoIosInformationCircleOutline className='text-black text-2xl' />
                    <span className='text-black text-xs '>Information</span>
                </div>

                <div className='flex flex-col items-center justify-center mx-2 hover:bg-gray-200 hover:cursor-pointer p-1 rounded-lg mr-4'>
                    <GoStack className='text-black text-2xl' />
                    <span className='text-black text-xs '>Add Stock</span>
                </div>

                <div className='flex flex-col items-center justify-center mx-2 hover:bg-gray-200 hover:cursor-pointer p-1 rounded-lg mr-4'>
                    <AiOutlineDelete className='text-black text-2xl' />
                    <span className='text-black text-xs '>Delete</span>
                </div>

                <div className='flex flex-col items-center justify-center mx-2 hover:bg-gray-200 hover:cursor-pointer p-1 rounded-lg mr-4'>
                    <CiEdit className='text-black text-2xl' />
                    <span className='text-black text-xs '>Update</span>
                </div>

            </div>

        </motion.div>
    )
}

export default SelectedBottomButtons