
import temp from '../../assets/temp.jpg'

function UserCard() {
    return (
        <div style={{ fontFamily: "Mona Sans", fontWeight: "600" }} className="flex flex-col items-start bg-gray-50 p-4 m-4 rounded-lg w-full">
            
            <span className='text-5xl '>
                Dashboard
            </span>
            
            <div className='flex flex-row items-center mt-10 '>
                <img className='w-16 h-16 rounded-full' 
                src={temp} alt="" />
                <div className="flex flex-col ml-4">
                    <h1 className="text-2xl font-bold">{localStorage.getItem('username')}</h1>
                    <p className="text-gray-400">Warehouse</p>
                </div>
            </div>

            
        </div>
    )
}

export default UserCard