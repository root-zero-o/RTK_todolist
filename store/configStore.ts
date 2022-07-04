import { configureStore, getDefaultMiddleware, MiddlewareArray } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import rootReducer from './modules';
import todosSlice from './modules/todosSlice';

const store = () => {
  const store = configureStore({ 
    reducer : rootReducer,
    middleware: [...getDefaultMiddleware()]
  });
  return store
}
    // 미들웨어는 배열에 추가만 해주면 됨 
    // configureStore는 redux devtools와 middleware를 포함하고 있어 따로 넣어주지 않아도 된다.

const wrapper = createWrapper(store, {
  // 이 부분이 true면 디버그때 자세한 설명이 나옵니다. (개발할때는 true로)
  debug: process.env.NODE_ENV === 'development',
});
  
export type AppDispatch = typeof store.dispatch;

export default wrapper;
