import { configureStore, getDefaultMiddleware, MiddlewareArray } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './modules';


  export const makeStore = () => configureStore({ 
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })

  export type AppStore = ReturnType<typeof makeStore>

const wrapper = createWrapper<AppStore>(makeStore)
  
export default wrapper;
