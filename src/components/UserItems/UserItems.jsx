import { useContext, useEffect } from "react";
import TodoContext from "../../Context/TodoContext";
import UpdateTodo from "../Todo/UpdateTodo";
import DeleteTodo from "../Todo/DeleteTodo";
import ModalTodo from "../Todo/ModalTodo";
import SearchBox from "../../components/Todo/SearchTodo";
import FieldTitle from "../Todo/FieldTitle";

const UserItems = () => {
  const { todos, getData, error } = useContext(TodoContext);

  useEffect(() => {
    const FetchData = async () => {
      await getData();
    };
    FetchData();
  }, [getData]);

  return (
    <div>
      <SearchBox todos={todos} />
      <FieldTitle />
      {error && <h3>{error.mesaage}</h3>}
      {todos &&
        todos.map((todo) => (
          <div className="userItem" key={todo.id}>
            <div className="checkBox">
              <UpdateTodo todo={todo} />
            </div>

            <ModalTodo todo={todo} key={todo.id} />

            <div className="dataAdd">{todo.id} December 2022</div>
            <div className="size">{todo.id}MB</div>
            <div className="shareWith">{todo.id} user</div>
            <div className="tools">
              <i className="bi bi-file-arrow-down"></i>
              <i className="bi bi-bookmark-plus"></i>
              <div className="delete">
                <DeleteTodo todoId={todo.id} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default UserItems;
