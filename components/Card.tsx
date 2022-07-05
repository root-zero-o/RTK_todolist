import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo } from '../store/modules/todosSlice';
import { TodoState } from '../type'
import { AppDispatch } from '../type'

export const Card = ({id, content, completed} : TodoState) => {

  const dispatch: AppDispatch = useDispatch();

  const deleteBtnHandler = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="bg-slate-200 flex flex-col items-center p-4 space-y-3">
      { completed ? (<input 
                      type="checkbox"
                      className="w-5 h-5"
                      defaultChecked
                      />) : 
                    (<input 
                      type="checkbox"
                      className="w-5 h-5"
                      />)
      }
      <span className="">{content}</span>
      <button 
      className='py-1 px-2 bg-orange-500 text-white rounded-full'
      onClick={deleteBtnHandler}>
        Delete
      </button>
    </div>
  )
}
