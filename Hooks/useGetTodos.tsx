import { TodoState } from "../type";
import { AnyAction, createSelector, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/modules";
import { fetchTodos } from "../store/modules/todosSlice";

type AppDispatch = ThunkDispatch<TodoState, any, AnyAction>;

const useGetTodos = () => {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todoSelector = (state : RootState) => state.todos;

  const selector = createSelector(
    todoSelector,
    (state) => state
  )

  const { lists, loading, error } = useSelector(selector);

  return { lists, loading, error };
}

export default useGetTodos;

