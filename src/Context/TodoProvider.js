import { useCallback, useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import axios from "axios";
import Swal from "sweetalert2";
const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
    error: null,
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const getData = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

      dispatch({ type: "SET_TODOS", payload: res.data });
      dispatch({ type: "SET_ERROR", payload: null });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "SET_TODOS", payload: [] });
    }
  }, []);
  const UpdateTodo = async (todos) => {
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todos.id}`,
        {
          title: todos.title,
          completed: !todos.completed,
        }
      );

      dispatch({ type: "UPDATE_TODOS", payload: res.data });
      dispatch({ type: "SET_ERROR", payload: null });
      Swal.fire({
        title: `Todo ${todos.id} is Updated!`,
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 4000,
        toast: true,
        position: "top-right",
      });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "UPDATE_TODOS", payload: [] });
    }
  };
  const removeTodo = async (todoId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );

      dispatch({ type: "REMOVE_TODOS", payload: todoId });
      dispatch({ type: "SET_ERROR", payload: null });
      Swal.fire({
        title: `Todo ${todoId} is Removed!`,
        icon: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 4000,
        toast: true,
        position: "top-right",
      });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "REMOVE_TODOS", payload: [] });
    }
  };
  const modalTodo = async (todo) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`
      );

      dispatch({ type: "MODAL_TODOS", payload: res.data });
      dispatch({ type: "SET_ERROR", payload: null });
      Swal.fire({
        title: ` <h4> ID : ${todo.id}</h4>
            <h5>  Title : ${todo.title} </h5>  
            <h5>  Compeleted : ${todo.completed} </h5> `,
        icon: "success",
        showConfirmButton: true,
        timerProgressBar: false,
      });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "MODAL_TODOS", payload: [] });
    }
  };

  const search = async ({ title }) => {
    try {
      const params = new URLSearchParams();
      if (title !== "") {
        params.append("title", title);
      }

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?" + params.toString()
      );
      state.todos = res.data;

      dispatch({ type: "SEARCH_TODO", payload: res.data });
      dispatch({ type: "SET_ERROR", payload: null });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "SEARCH_TODO", payload: [] });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getData,
        UpdateTodo,
        removeTodo,
        modalTodo,
        search,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
