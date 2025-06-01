import React from 'react'

import UserCard from '../components/dashboard/UserCardComponent';
import ModuleSection from '../components/dashboard/ModuleSection';

function Dashboard() {
  
  return (
    <div className='flex flex-col bg-gray-50 '>
      <div className="flex flex-col w-full">
        <UserCard />
        <ModuleSection />
      </div>
    </div>
  )
}

export default Dashboard
