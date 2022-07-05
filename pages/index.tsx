import React from 'react'
import { CardContainer } from '../components/CardContainer';

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 font-mono w-screen h-screen">
      <div className='flex flex-col justify-center items-center space-y-3 py-5 border-4 border-slate-800'>
        <div className='flex flex-col items-center space-y-3 py-3'>
          <h1 className='text-5xl'>Todo List</h1>
          <h2 className="text-lg">with Redux toolkit !</h2>
        </div>
        <CardContainer/>
      </div>
      
    </div>
  )
}

export default Index; 