import React from "react";
import TitleComponent from "../components/warehouse/TitleComponent";
import TableHeaderComponent from "../components/warehouse/TableHeaderComponent";
import TableBodyComponent from "../components/warehouse/TableBodyComponent";

function Warehouse() {
    return (
        <div>
            <TitleComponent />

            <div className="flex flex-col mt-10 ">
                <div className="flex flex-row justify-between items-center ">
                    <span className="text-4xl font-medium my-2 ml-1">
                        Table
                    </span>

                    <div
                        style={{
                            fontFamily: "Mona Sans",
                            fontWeight: "600",
                        }}
                        className="text-xs"
                    >
                        <button className="border p-2 mx-2 rounded-xs text-black hover:cursor-pointer hover:shadow-lg">Add Stock</button>
                        <button className="border p-2 mx-2 rounded-xs text-black hover:cursor-pointer hover:shadow-lg">Update</button>
                        <button className="border p-2 mx-2 rounded-xs text-black hover:cursor-pointer hover:shadow-lg">Delete</button>
                    </div>
                </div>

                <table className="w-full">
                    <TableHeaderComponent />
                    <TableBodyComponent />
                </table>
            </div>
        </div>
    );
}

export default Warehouse;
