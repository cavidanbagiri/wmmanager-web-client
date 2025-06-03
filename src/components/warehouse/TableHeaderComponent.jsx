
import { useSelector } from "react-redux";

function TableHeaderComponent() {

    const warehouse_headers = useSelector((state) => state.warehouseSlice.warehouse_headers);


    return (


        <thead style={{ fontFamily: "IBM Plex Sans" }} className="bg-gray-100">
            <tr className="">
                <th className="border-r border-gray-200 w-14"></th>
                <th className="border-r border-gray-200 w-14">S.No</th>

                {Object.entries(warehouse_headers).map(([key, value], index) => (
                    
                    value &&
                    <th key={key} className="border-r border-gray-200 px-1 py-1">
                        <div className="font-medium text-sm flex flex-col items-center justify-center">
                            <span>{key.charAt(0).toUpperCase() + key.slice(1)} </span>
                            <input className="w-full outline-none p-1 border border-gray-300 rounded-md" type="text" />
                        </div>
                    </th>

                ))}

            </tr>
        </thead>

    );
}

export default TableHeaderComponent;
