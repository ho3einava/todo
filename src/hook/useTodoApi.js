import { useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useTodoApi = ({ dispatch }) => {
  const getData = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: "SET_TODOS", payload: res.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  }, [dispatch]);

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

  const search = async (title) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const filtered = response.data.filter((item) =>
        item.title.startsWith(title)
      );

      dispatch({ type: "SET_TODOS", payload: filtered });
      dispatch({ type: "SET_ERROR", payload: null });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "SEARCH_TODO", payload: [] });
    }
  };
  const sort = async (sortOrder) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      let sortedItems;
      if (sortOrder === "asc") {
        sortedItems = response.data.sort((a, b) => a.id - b.id);
      } else {
        sortedItems = response.data.sort((a, b) => b.id - a.id);
      }

      dispatch({ type: "SET_TODOS", payload: sortedItems });
      dispatch({ type: "SET_ERROR", payload: null });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "SET_TODOS", payload: [] });
    }
  };

  return { getData, UpdateTodo, removeTodo, modalTodo, search, sort };
};

export default useTodoApi;
