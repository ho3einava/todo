import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import useTodoApi from "../hook/useTodoApi";

const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
    error: null,
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const { getTodo, updateTodo, removeTodo, modalTodo, search, sort } =
    useTodoApi({
      dispatch,
      initialState,
    });

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getTodo,
        updateTodo,
        removeTodo,
        modalTodo,
        search,
        sort,
      }}
    >
      {children} ,
    </TodoContext.Provider>
  );
};
export default TodoProvider;
