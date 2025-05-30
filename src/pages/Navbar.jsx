
import { Outlet, Link } from "react-router-dom";


import { CiHome } from "react-icons/ci";
import { PiWarehouseThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiStackThin } from "react-icons/pi";
import { CiLogout, CiLogin  } from "react-icons/ci";
import { PiFactoryThin } from "react-icons/pi";

function Navbar() {

    return (

        <div className='relative '>

            <div className='sticky top-0 left-0 z-20  float-left h-screen flex flex-col items-center p-2 bg-slate-900'>    
                <Link to='/'>
                    <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                        <CiHome className='text-3xl' />
                    </div>
                </Link>
                <Link to='/warehouse'>
                    <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                        <PiWarehouseThin className='text-3xl' />
                    </div>
                </Link>
                <Link to='/stock'>
                    <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                        <PiStackThin className='text-3xl' />
                    </div>
                </Link>
                <Link to='/area'>
                    <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                        <PiFactoryThin className='text-3xl' />
                    </div>
                </Link>
                <Link to='/profile'>
                    <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                        <CiUser className='text-3xl' />
                    </div>
                </Link>
                <Link to='/login'>
                    <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                        <CiLogin className='text-3xl' />
                    </div>
                </Link>
            </div>


            <Outlet />
        </div>

    )

}

export default Navbar;