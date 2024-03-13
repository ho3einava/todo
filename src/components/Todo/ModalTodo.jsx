import { useContext } from "react";
import TodoContext from "../../Context/TodoContext";
import Swal from "sweetalert2";
const ModalTodo = ({ todo }) => {
  const { modalTodo } = useContext(TodoContext);

  const FetchData = async () => {
    await modalTodo(todo);
    Swal.fire({
      title: ` <h4> ID : ${todo.id}</h4>
          <h5>  Title : ${todo.title} </h5>  
          <h5>  Compeleted : ${todo.completed} </h5> `,
      icon: "success",
      showConfirmButton: true,
      timerProgressBar: false,
    });
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
