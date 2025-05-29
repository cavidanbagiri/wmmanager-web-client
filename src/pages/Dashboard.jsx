import React from 'react'

import UserCard from '../components/dashboard/UserCard';
import ModuleSection from '../components/dashboard/ModuleSection';

function Dashboard() {
  return (
    <div className='flex flex-col'>
      <UserCard />
      <ModuleSection />
    </div>
  )
}

export default Dashboard
