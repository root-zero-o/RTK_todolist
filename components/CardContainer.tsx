import React from 'react'
import { Card } from './Card'
import useTodos from "../Hooks/todosHook";

export const CardContainer = () => {

    const {lists, loading, error} = useTodos();
    console.log(lists)

  return (
    <div className="w-screen h-3/4 bg-orange-200 p-10">
        <Card/>
    </div>
  )
}
