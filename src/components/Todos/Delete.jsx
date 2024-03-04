import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";

const DeleteTodo = ({ todoId }) => {
  const [loading, setloading] = useState(false);
  const { removeTodo } = useContext(TodoContext);
  const handleDelete = async () => {
    setloading(true);
    await removeTodo(todoId);
    setloading(false);
  };
  return (
    <>
      <i onClick={() => handleDelete()} className="bi bi-trash"></i>
      {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
    </>
  );
};
export default DeleteTodo;
