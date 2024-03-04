import { useContext } from "react";
import TodoContext from "../../Context/TodoContext";

const Modal = ({ todo }) => {
  const { modalTodo } = useContext(TodoContext);

  const FetchData = async () => {
    await modalTodo(todo);
  };

  return (
    <>
      <div type="button" onClick={() => FetchData()} className="UserName">
        {todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}
      </div>
    </>
  );
};
export default Modal;
