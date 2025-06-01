
import { Outlet, Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import Login from "../pages/Login.jsx";
import NavIcon from '../components/navbar/NavIcon';

import AuthService from '../service/auth-service';

import { CiHome } from "react-icons/ci";
import { PiWarehouseThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiStackThin } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { PiFactoryThin } from "react-icons/pi";

function Navbar() {

    const dispatch = useDispatch();

    const is_auth = useSelector((state) => state.authSlice.is_auth);


    return (

        <div className='relative '>

            {
                is_auth ?
                    <div className='sticky top-0 left-0 z-20  float-left h-screen flex flex-col items-center p-2 bg-slate-900'>

                        <NavIcon to="/" icon={CiHome} label="Dashboard" /> 
                        <NavIcon to="/warehouse" icon={PiWarehouseThin} label="Warehouse" />
                        <NavIcon to="/stock" icon={PiStackThin} label="Stock" />
                        <NavIcon to="/area" icon={PiFactoryThin} label="Area" />
                        <NavIcon to="/profile" icon={CiUser} label="Profile" />

                        {/* <Tooltip text='Dashboard'>
                            <Link to='/' activeClassName='bg-slate-500'>
                                <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                                    <CiHome className='text-3xl' />
                                </div>
                            </Link>
                        </Tooltip>

                        <Tooltip text='Warehouse'>
                            <Link to='/warehouse'>
                                <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                                    <PiWarehouseThin className='text-3xl' />
                                </div>
                            </Link>
                        </Tooltip>

                        <Tooltip text='Stock'>
                            <Link to='/stock'>
                                <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                                    <PiStackThin className='text-3xl' />
                                </div>
                            </Link>
                        </Tooltip>

                        <Tooltip text='Area'>
                            <Link to='/area'>
                                <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                                    <PiFactoryThin className='text-3xl' />
                                </div>
                            </Link>
                        </Tooltip>

                        <Tooltip text='Profile'>
                            <Link to='/profile'>
                                <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg'>
                                    <CiUser className='text-3xl' />
                                </div>
                            </Link>
                        </Tooltip> */}
                        
                        
                        <div onClick={()=>{
                            let result = confirm('Are you sure you want to logout?');
                            if (result) {
                                dispatch(AuthService.userLogout());
                            }
                        }}>
                            <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg cursor-pointer'>
                                <CiLogout className='text-3xl' />
                            </div>
                        </div>
                    </div>
                    :
                    <Login />
            }

            {
                is_auth && <Outlet />
            }

        </div>

    )

}

export default Navbar;