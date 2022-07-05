import React from 'react'
import { TodoState } from '../type'

export const Card = ({id, content, completed} : TodoState) => {

  return (
    <div className="bg-slate-200 flex flex-col items-center p-4 space-y-3">
      <input 
      type="checkbox"
      className="w-5 h-5"
      />
      <span className="">{content}</span>
      <span>{completed}</span>
      <button className='py-1 px-2 bg-orange-500 text-white rounded-full'>Delete</button>
    </div>
  )
}
