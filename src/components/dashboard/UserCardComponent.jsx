
import temp from '../../assets/temp.jpg'

function UserCard() {
    return (
        <div style={{ fontFamily: "Mona Sans", fontWeight: "600" }} className="flex flex-col items-start bg-gray-50 p-4 m-4 rounded-lg w-full">
            <img className='w-16 h-16 rounded-full' 
            src={temp} alt="" />
            <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-bold">Bagirli Cavidan</h1>
                <p className="text-gray-400">Warehouse Staff</p>
            </div>
            <span className='text-5xl '>
                Dashboard
            </span>
        </div>
    )
}

export default UserCard