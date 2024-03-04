import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";
const UpdateTodos = ({ todo }) => {
  // const [completed, setCompleted] = useState(todo.completed);
  const [loading, setloading] = useState(false);
  const { UpdateTodo } = useContext(TodoContext);
  const handleCheckboxChange = async () => {
    setloading(true);
    await UpdateTodo(todo);
    setloading(false);
  };
  return (
    <>
      {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
      <input
        type="checkbox"
        className="user-checkbox"
        checked={todo.completed}
        onChange={() => handleCheckboxChange()}
      ></input>
    </>
  );
};

export default UpdateTodos;
