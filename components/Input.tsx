import React, { useState } from 'react'
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TodoState } from "../type";
import { post } from '../store/modules/todosSlice';

type AppDispatch = ThunkDispatch<TodoState, any, AnyAction>;


const Input = () => {

  const [input, setInput] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(post({
      content: input,
      completed: false
    }))
  }

  return (
    <form 
      className='flex items-center justify-center mb-10 py-10 border-b-4 border-slate-800'
      onSubmit={submitHandler}
      >

        <input 
        type="text"
        placeholder='할 일을 입력하세요'
        className='w-3/4 px-5 py-3 mr-5 border border-slate-400 rounded-full'
        onChange={(e) => setInput(e.target.value)}
        />
        <button 
          className='bg-slate-800 text-white py-3 px-7 rounded-full hover:bg-slate-400 hover:text-black transition-colors'>
            Submit
        </button>
    </form>
  )
}

export default Input;
