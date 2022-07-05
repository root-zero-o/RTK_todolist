import { TodoState } from "./../type";
import { AnyAction, createSelector, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/modules";
import { fetchTodos } from "../store/modules/todosSlice";

// 타입을 설정해준다. 
type AppDispatch = ThunkDispatch<TodoState, any, AnyAction>;

// custom Hook
export default function useGetTodos() {

  const dispatch: AppDispatch = useDispatch();

  // 미들웨어를 실행해서 서버에서 데이터를 가져온다.
  // 리듀서를 통해 서버에서 가져온 데이터가 store에 들어간다.
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // useSelector를 통해 store에서 데이터를 꺼내준다.

 const todoSelector = (state : RootState) => state.todos;
  
  // selector 값을 메모이제이션한다.
  const selector = createSelector(
    todoSelector,
    (state) => state
  )

  const { lists, loading, error } = useSelector(selector);
  // 꺼내준 데이터를 리턴한다.
  return { lists, loading, error };
}