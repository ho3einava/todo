import { useContext } from "react";
import TodoContext from "../../Context/TodoContext";

const ModalTodo = ({ todo }) => {
  const { modalTodo } = useContext(TodoContext);

  const FetchData = async () => {
    await modalTodo(todo);
  };

  return (
    <div>
      <div type="button" onClick={() => FetchData()} className="userName">
        {todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}
      </div>
    </div>
  );
};
export default ModalTodo;
