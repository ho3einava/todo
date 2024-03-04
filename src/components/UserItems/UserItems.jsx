import { useContext, useEffect } from "react";
import TodoContext from "../../Context/TodoContext";
import UpdateTodos from "../Todos/Update";
import DeleteTodo from "../Todos/Delete";
import ModalUser from "../Todos/ModalUser";

const UserItems = () => {
  const { todos, getData, error } = useContext(TodoContext);

  useEffect(() => {
    const FetchData = async () => {
      await getData();
    };
    FetchData();
  }, [getData]);

  return (
    <>
      {error && <h3>{error.mesaage}</h3>}
      {todos &&
        todos.map((todo) => (
          <div className="user-item" key={todo.id}>
            <div className="checkbox">
              <UpdateTodos todo={todo} />
            </div>

            <ModalUser todo={todo} key={todo.id} />

            <div className="DataAdd">21 December 2022</div>
            <div className="Size">20MB</div>
            <div className="ShareWith">1 user</div>
            <div className="tools">
              <i className="bi bi-file-arrow-down"></i>
              <i className="bi bi-bookmark-plus"></i>
              <div className="delete">
                <DeleteTodo todoId={todo.id} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default UserItems;
