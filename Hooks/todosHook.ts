import { TodoState } from "./../type";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/modules";
import { fetchTodos } from "../store/modules/todosSlice";

type AppDispatch = ThunkDispatch<TodoState, any, AnyAction>;

export default function useTodos() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const { lists, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  return { lists, loading, error };
}