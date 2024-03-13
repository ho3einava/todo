const TodoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "UPDATE_TODOS": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    }
    case "REMOVE_TODOS": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "MODAL_TODOS": {
      return {
        ...state,
      };
    }
    case "SEARCH_TODO": {
      return {
        ...state,
        todos: state.todos,
      };
    }
    case "SORT_TODO": {
      return {
        ...state,
        todos: state.todos,
      };
    }

    default:
      return state;
  }
};
export default TodoReducer;
