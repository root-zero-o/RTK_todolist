// 초기 상태 타입
export type TodoState = {
    id?: number,
    content : string,
    completed : boolean
}

export type InitialState = {
    lists : TodoState[],
    loading: boolean,
    error: boolean
}

