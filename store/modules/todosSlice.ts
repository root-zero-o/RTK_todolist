import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import apis from '../../api/main'
import { InitialState, TodoState } from '../../type'


export const fetchTodos = createAsyncThunk("todo/fetchTodos", async() => {
    const { data } = await apis.getTodos()
    return data;
})

const initialState : InitialState = {
    lists : [],
    loading: false,
    error: false,
}

// 리듀서 슬라이스
const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.lists = action.payload;
            state.error = false;
        })
        builder.addCase(fetchTodos.rejected, (state) =>{
            state.loading = false;
            state.lists = [];
            state.error = true;
        })
    }

})

export default todosSlice.reducer;
