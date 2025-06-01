
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";



import warehouse from "../../assets/warehouse.png";
import stock from "../../assets/stock.png";
import area from "../../assets/area.png";
import DoughnutChartComponent from "./DoughnutChartComponent";
import BarChartComponent from "./BarChartComponent";

function ModuleSection() {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <div style={{ fontFamily: "Mona Sans", fontWeight: "600" }} className="flex flex-col 2xl:flex-row justify-around rounded-lg w-full p-2  " >
      {/* <div className='flex flex-col justify-around w-1/4 p-4 items-center shadow-lg rounded-lg mx-6'>
            <img className='w-24 h-24 rounded-full' 
            src={temp} alt="" />
            <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-bold">Bagirli Cavidan</h1>
                <p className="text-gray-400">Warehouse Staff</p>
            </div>
        </div> */}

      <div className="flex flex-row 2xl:flex-col justify-around items-around 2xl:w-1/3 ">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row justify-around w-full">

          <NavLink to='/warehouse' activeClassName='h-full'>
            <motion.div variants={itemVariants} className="flex flex-col justify-around p-4 items-center shadow-sm rounded-lg h-[250px] w-[300px] bg-white mr-1">
              <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
                Warehouse
              </span>
              <img className="w-1/3" src={warehouse} alt="" />
              <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-sm text-right text-gray-400">
                Total rows 1234
              </span>
            </motion.div>
          </NavLink>

          <NavLink to='/stock' activeClassName=' h-full'>
            <motion.div variants={itemVariants} className="flex flex-col justify-around  p-4 items-center shadow-sm rounded-lg h-[250px] w-[300px] bg-white">
              <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
                Stock
              </span>
              <img className="w-1/3" src={stock} alt="" />
              <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-md text-right text-gray-400">
                Total rows 1234
              </span>
            </motion.div>
          </NavLink>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="flex flex-row justify-around w-full">

          <NavLink to='/area' activeClassName='h-full'>
            <motion.div variants={itemVariants} className="flex flex-col justify-around p-4 items-center shadow-sm rounded-lg  h-[250px] w-[300px] mr-1 bg-white">
              <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
                Area
              </span>
              <img className="w-1/3" src={area} alt="" />
              <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-md text-right text-gray-400">
                Total rows 1234
              </span>
            </motion.div>
          </NavLink>

          <NavLink to='/profile' activeClassName=' h-full'>
            <motion.div variants={itemVariants} className="flex flex-col justify-around p-4 items-center shadow-sm rounded-lg  h-[250px] w-[300px] bg-white">
              <span className="w-full text-4xl text-black text-center p-2 rounded-lg">
                Profile
              </span>
              <img className="w-1/3" src={warehouse} alt="" />
              <span style={{ fontFamily: "Open Sans", fontWeight: "400" }} className="w-full text-md text-right text-gray-400">
                Total rows 1234
              </span>
            </motion.div>
          </NavLink>

        </motion.div>
        
      </div>


        <div className="flex flex-row mt-10 2xl:m-0 w-full"> 
          <DoughnutChartComponent />
          <BarChartComponent />
        </div>



    </div>
  );
}

export default ModuleSection;
