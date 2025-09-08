import React from 'react'
import Filter from '../components/filter';

export default function openRequests() {
  return (
    <div className='bg-[#0d1117] h-screen'>
      <Filter />
      <h1 className="font-bold">Open Pull Requests</h1>
    </div>
  )
}
