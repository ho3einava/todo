import TodoProvider from "../Context/TodoProvider";
import SearchBox from "./Todos/SearchBox";
import FieldTitle from "./Todos/FieldTitle";
import UserItems from "./UserItems/UserItems";

const UserLists = () => {
  return (
    <>
      <TodoProvider>
        <SearchBox />
        <FieldTitle />

        <div className="main-items">
          <UserItems />
        </div>
      </TodoProvider>
    </>
  );
};

export default UserLists;
