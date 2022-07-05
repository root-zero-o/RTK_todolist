import { TodoState } from "../type";
import api from "./core";

const apis = {
    getTodos : () => api.get("/todos"),
    postTodo : (payload : TodoState) => api.post("/todos",payload)
}

export default apis;