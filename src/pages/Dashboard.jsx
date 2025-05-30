import React from 'react'

import UserCard from '../components/dashboard/UserCard';
import ModuleSection from '../components/dashboard/ModuleSection';
import DoughnutChartComponent from '../components/dashboard/DoughnutChartComponent';

function Dashboard() {
  
  return (
    <div className='flex flex-col bg-gray-50'>
      <UserCard />
      <ModuleSection />
      {/* <DoughnutChartComponent/> */}

    </div>
  )
}

export default Dashboard
