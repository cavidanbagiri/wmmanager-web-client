import React from "react";

function TableHeaderComponent() {
    return (
        
        <thead style={{ fontFamily: "IBM Plex Sans"}} className="bg-gray-100">
            <tr className="">
                <th className="border-r border-gray-200 w-14">S.No</th>
                <th className="border-r border-gray-200 px-4 py-1">
                    <div className="font-medium text-sm flex flex-col items-center justify-center">
                        <span>Material Name</span>
                        <input className="w-full outline-none p-1 border border-gray-300 rounded-md"
                        type="text" />
                    </div>
                </th>
                <th className="border-r border-gray-200 px-4 max-w-[40px]">
                    <div className="font-medium text-sm flex flex-col items-center justify-center">
                        <span>Quantity</span>
                        <input className="w-full outline-none p-1 border border-gray-300 rounded-md"
                        type="text" />
                    </div>
                </th>
                <th className="border-r border-gray-200 px-4 max-w-[40px]">
                    <div className="font-medium text-sm flex flex-col items-center justify-center">
                        <span>Unit</span>
                        <input className="w-full outline-none p-1 border border-gray-300 rounded-md"
                        type="text" />
                    </div>
                </th>
                <th className="border-r border-gray-200 px-4  max-w-[80px]">
                    <div className="font-medium text-sm flex flex-col items-center justify-center">
                        <span>Ordered</span>
                        <input className="w-full outline-none p-1 border border-gray-300 rounded-md"
                        type="text" />
                    </div>
                </th>
                <th className="border-r border-gray-200 px-4  max-w-[80px]">
                    <div className="font-medium text-sm flex flex-col items-center justify-center">
                        <span>Group Name</span>
                        <input className="w-full outline-none p-1 border border-gray-300 rounded-md"
                        type="text" />
                    </div>
                </th>
                
            </tr>
        </thead>

    );
}

export default TableHeaderComponent;
