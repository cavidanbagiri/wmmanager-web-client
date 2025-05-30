import React from "react";

import warehouse from "../../assets/warehouse.png";
import stock from "../../assets/stock.png";
import area from "../../assets/area.png";
import temp from "../../assets/temp.jpg";
import DoughnutChartComponent from "./DoughnutChartComponent";

function ModuleSection() {
  return (
    <div style={{ fontFamily: "Mona Sans", fontWeight: "600" }} className="flex flex-row m-4 rounded-lg  h-[510px] " >
      {/* <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <img className='w-24 h-24 rounded-full' 
            src={temp} alt="" />
            <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-bold">Bagirli Cavidan</h1>
                <p className="text-gray-400">Warehouse Staff</p>
            </div>
        </div> */}

      <div className="flex flex-col justify-center w-3/4 ">

        <div className="flex flex-row h-[250px] ">

          <div className="flex flex-col justify-around p-4 items-center shadow-sm rounded-lg w-[300px] m-2 bg-white">
            <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
              Warehouse
            </span>
            <img className="w-1/3" src={warehouse} alt="" />
            <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-sm text-right text-gray-400">
              Total rows 1234
            </span>
          </div>

          <div className="flex flex-col justify-around  p-4 items-center shadow-sm rounded-lg w-[300px] m-2 bg-white">
            <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
              Stock
            </span>
            <img className="w-1/3" src={stock} alt="" />
            <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-md text-right text-gray-400">
              Total rows 1234
            </span>
          </div>

        </div>

        <div className="flex flex-row h-[250px] ">
          <div className="flex flex-col justify-around p-4 items-center shadow-sm rounded-lg  w-[300px] m-2 bg-white">
            <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
              Area
            </span>
            <img className="w-1/3" src={area} alt="" />
            <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-md text-right text-gray-400">
              Total rows 1234
            </span>
          </div>

          <div className="flex flex-col justify-around p-4 items-center shadow-sm rounded-lg  w-[300px] m-2 bg-white">
            <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
              Profile
            </span>
            <img className="w-1/3" src={warehouse} alt="" />
            <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-md text-right text-gray-400">
              Total rows 1234
            </span>
          </div>
        </div>
      </div>

        <DoughnutChartComponent/>

    </div>
  );
}

export default ModuleSection;
