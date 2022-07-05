import React from 'react'
import { TodoState } from '../type'

export const Card = ({id, content, completed} : TodoState) => {

  return (
    <div className="bg-slate-200 mx-2 flex flex-col items-center p-4 space-y-3">
      <span className="">{content}</span>
      <span>{completed}</span>
      <input 
      type="checkbox"
      className="w-5 h-5"
      />
    </div>
  )
}
