import api from "./core";

const apis = {
    getTodos : () => api.get("/todos")
}

export default apis;