
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { CircularProgress } from '@mui/material';

import login_img from "../assets/login_img.gif";

import AuthService from '../service/auth-service';

import MessageBox from '../layouts/MessageBox';

function Login() {

  const dispatch = useDispatch();

  const { login_pending, is_login_error } = useSelector((state) => state.authSlice);
  const { toggle_message } = useSelector((state) => state.messageBoxSlice);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthService.login({ email, password }));
  }


  return (
    <div
      style={{ fontFamily: "IBM Plex Sans" }}
      className="flex flex-row justify-center items-center h-screen"
    >
      
      {
        is_login_error &&  <MessageBox message={'Invalid Credentials'} color={'bg-red-500'} />
      }

      <div className="flex flex-row justify-center items-center rounded-xl p-4 shadow-sm">
        <img src={login_img} alt="" className="h-full w-[650px] mr-10" />


        <div className="flex flex-col h-full w-[420px] p-1">
          <div className="flex flex-col justify-center w-full h-full p-4 rounded-md p-2">
            <span className="text-5xl font-bold mb-5 text-left">Sign in</span>
            <span style={{ fontFamily: "Open Sans", fontWeight: "350" }}
              className="text-[15px] text-gray-400 text-left">Welcome to Inventory Management System</span>
            <span style={{ fontFamily: "Open Sans", fontWeight: "350" }}
              className="text-[15px] text-gray-400 mb-10 text-left">Sign in as member</span>

            <div className="w-full text-gray-500 mb-10">
              <span className="text-gray-400">Email</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>

            <div className="w-full text-gray-500 mb-10">
              <span className="text-gray-400">Password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>

            <div className="w-full  ">
              <button
                onClick={handleSubmit}
                className="w-full p-3 text-xl font-medium bg-slate-900 text-white rounded-md hover:bg-slate-500 hover:cursor-pointer">
                  {
                    login_pending
                      ?
                      <CircularProgress color="inherit" />
                      :
                      <span>Login</span>
                  }
              </button>
            </div>
          </div>
          <span className="text-gray-500 my-3 text-right pr-4 text-sm hover:cursor-pointer hover:text-slate-500 hover:underline">Forget Password?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
