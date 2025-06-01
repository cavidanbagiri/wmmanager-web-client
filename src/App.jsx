import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import router from './router'

import './App.css'

import AuthService from './service/auth-service';

function App() {

  const dispatch = useDispatch();

  const is_auth = useSelector((state) => state.authSlice.is_auth);

  useEffect(() => {
    if (!is_auth) {
      dispatch(AuthService.refresh());
    }
  }, [is_auth]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
