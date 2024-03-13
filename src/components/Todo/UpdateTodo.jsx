import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";
const UpdateTodos = ({ todo }) => {
  // const [completed, setCompleted] = useState(todo.completed);
  const [loading, setloading] = useState(false);
  const { updateTodo } = useContext(TodoContext);
  const handleCheckboxChange = async () => {
    setloading(true);
    await updateTodo(todo);
    setloading(false);
  };
  return (
    <div className="spinner">  
      {loading && <div className="spinner-border spinner-border-sm me-3"></div>}
      <input
        type="checkbox"
        className="userCheckbox"
        checked={todo.completed}
        onChange={() => handleCheckboxChange()}
      ></input>
      </div>
  );
};

export default UpdateTodos;
