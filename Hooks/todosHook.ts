import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/modules";
import { fetchTodos } from "../store/modules/todosSlice";

export default function useTodos() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]) 

    const { lists, loading, error }  = useSelector(( state : RootState ) => state.todos)
    return {lists, loading, error}
}

