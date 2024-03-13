import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";
import Swal from "sweetalert2";
const UpdateTodos = ({ todo }) => {
  // const [completed, setCompleted] = useState(todo.completed);
  const [loading, setloading] = useState(false);
  const { updateTodo } = useContext(TodoContext);
  const handleCheckboxChange = async () => {
    setloading(true);
    await updateTodo(todo);
    Swal.fire({
      title: `Todo ${todo.id} is Updated!`,
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 4000,
      toast: true,
      position: "top-right",
    });
    setloading(false);
  };
  return (
    <div className="spinner">  
      {loading && <div className="spinner-border spinner-border-sm "></div>}
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
