import React from 'react'

import UserCard from '../components/dashboard/UserCardComponent';
import ModuleSection from '../components/dashboard/ModuleSection';

function Dashboard() {
  
  return (
    <div className='flex flex-col bg-gray-50'>
      <UserCard />
      <ModuleSection />
    </div>
  )
}

export default Dashboard
