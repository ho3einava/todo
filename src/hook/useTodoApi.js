import { useCallback } from "react";
import axios from "axios";
const useTodoApi = ({ dispatch }) => {
  const getTodo = useCallback(async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: "SET_TODOS", payload: response.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  }, [dispatch]);

  const updateTodo = async (todos) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todos.id}`,
        {
          title: todos.title,
          completed: !todos.completed,
        }
      );

      dispatch({ type: "UPDATE_TODOS", payload: response.data });
      dispatch({ type: "SET_ERROR", payload: null });
      
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
     
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
      dispatch({ type: "REMOVE_TODOS", payload: [] });
    }
  };

  const modalTodo = async (todo) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`
      );

      dispatch({ type: "MODAL_TODOS", payload: response.data });
      dispatch({ type: "SET_ERROR", payload: null });
      
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

  return { getTodo, updateTodo, removeTodo, modalTodo, search, sort };
};

export default useTodoApi;
