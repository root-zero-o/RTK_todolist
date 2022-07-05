import React from 'react'
import { Card } from './Card'
import useTodos from "../Hooks/todosHook";
import Input from './Input';

export const CardContainer = () => {

    const {lists, loading, error} = useTodos();

  return (
    <div className="flex flex-col item-center p-10">
        <Input/>
        <div className='m-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>  
          { lists?.map((val, idx) => (
            <Card 
              key={idx}
              id={val.id}
              content={val.content}
              completed={val.completed}
              />
          ))}
        </div>
        
    </div>
  )
}
