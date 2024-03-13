import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";
import Swal from "sweetalert2";
const DeleteTodo = ({ todoId }) => {
  const [loading, setloading] = useState(false);
  const { removeTodo } = useContext(TodoContext);
  const handleDelete = async () => {
    setloading(true);
    await removeTodo(todoId);
    Swal.fire({
      title: `Todo ${todoId} is Removed!`,
      icon: "error",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 4000,
      toast: true,
      position: "top-right",
    });
    setloading(false);
  };
  return (
    <div>
      <i onClick={() => handleDelete()} className="bi bi-trash"></i>
      {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
    </div>
  );
};
export default DeleteTodo;
