

function Login() {
  return (
    <div style={{fontFamily: 'Open Sans'}} className="flex flex-col justify-center items-center h-screen">

      <div className="flex flex-col justify-around items-center w-84 h-96 p-4 bg-white rounded-md border border-gray-300">

        <span className="text-5xl font-bold">Sign in</span>

        <input type="text" placeholder="Username" className="w-full p-2 border border-gray-300 rounded-md outline-none" />
        
        <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-md outline-none" />
        
        <button className="w-full p-2 bg-slate-900 text-white rounded-md hover:bg-slate-500 hover:cursor-pointer">
          Login
        </button>
      
      </div>

    </div>

  )
}

export default Login