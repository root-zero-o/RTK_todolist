import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import apis from '../../api/main'
import { InitialState, TodoState } from '../../type'

// createAsyncThunk
// - createAction의 비동기 버전을 위해 제안되었다.
// - 액션타입 문자열, 프로미스를 반환하는 콜백함수를 인자로 받는다.
// - 주어진 액션타입 문자열을 접두어로 사용하는 액션타입을 생성한다.

// 데이터 전체 가져오기
export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos", 
    async() => {
        const { data } = await apis.getTodos()
        return data;
    }
)

// 데이터 post
export const post = createAsyncThunk(
    "todo/postTodos", 
    async(payload : TodoState) => {
        try{
            await apis.postTodo(payload)
            alert("등록 완료!")
        }
        catch(error){
            alert("등록 실패!")
        }
    }
)

// 데이터 Delete
export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async(id : number | undefined) => {
        try {
            await apis.deleteTodo(id)
            alert("삭제 완료!")
        }
        catch(error){
            alert("삭제 실패!")
        }
    }
)

// 초기값을 설정해준다.

export const initialState : InitialState = {
    lists : [],
    loading: false,
    error: false,
}

// createSlice
// - createAction, createReducer 함수가 내부적으로 사용된다.
// - name을 따라서 리듀서와 액션 생성자, 액션 타입을 자동으로 생성한다.
const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},

    // extraReducers
    // - createSlice가 생성한 액션타입 외 다른 액션타입에 응답할 수 있도록 한다.
    // - 아래 함수에서 'todo/fetchTodo' 액션 타입과 상응하는 리듀서는 정의되어 있지 않다.
    //   하지만 슬라이스 외부에서 액션 타입을 참조하여 상태를 변화시킬 수 있다. 
    // - 프로미스 진행 상태에 따라 리듀서를 실행할 수 있다.
    extraReducers: builder => {
        builder
        // get 관련
        .addCase(fetchTodos.pending, state => {
            state.loading = true;
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.lists = action.payload;
            state.error = false;
        })
        .addCase(fetchTodos.rejected, (state) =>{
            state.loading = false;
            state.lists = [];
            state.error = true;
        })
        // post 관련
        .addCase(post.pending, state => {
            state.loading = true
        })
        .addCase(post.fulfilled, (state, action : PayloadAction<any>) => {
            state.loading = false;
            state.lists.push(action.payload)
            state.error = false;
        })
        .addCase(post.rejected, (state) =>{
            state.loading = false;
            state.lists = [...state.lists];
            state.error = true;
        })

        // .addMatcher(matcher, reducer) : 새로 들어오는 모든 액션에 대해 주어진 패턴과 일치하는지 확인 후 reducer 실행
        // .addDefaultCase(reducer) : 그 어떤 케이스 리듀서나 matcher 리듀서도 실행되지 않았을 때, 기본 리듀서 실행
    }

})

export default todosSlice.reducer;
