import { TodoState } from "../type";
import api from "./core";

const apis = {
    getTodos : () => api.get("/todos"),
    postTodo : (payload : TodoState) => api.post("/todos",payload),
    deleteTodo : (id : number | undefined) => api.delete(`todos/${id}`),
    updateTodo : (payload : TodoState) => api.patch(`todos/${payload.id}`, payload)
}

export default apis;