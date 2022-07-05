import React, { useEffect } from 'react'
import { Card } from './Card'
import useGetTodos from "../Hooks/useGetTodos";
import Input from './Input';

export const CardContainer = () => {

    const {lists, loading, error} = useGetTodos();

  if (loading){
    return <div>loading..</div>
  }
  else if(error){
    return <div>Something Wrong :(</div>
  }

  return (
    <div className="flex flex-col item-center p-10">
        <Input/>
        <div className='m-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>  
          { lists?.map((val, idx) => (
            <Card 
              key={idx}
              id={val?.id}
              content={val?.content}
              completed={val?.completed}
              />
          ))}
        </div>
        
    </div>
  )
}
