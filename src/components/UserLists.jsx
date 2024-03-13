import TodoProvider from "../Context/TodoProvider";
import UserItems from "./UserItems/UserItems";
const UserLists = () => {
  return (
    <TodoProvider>
    <div className="mainItems">
    <UserItems />
    </div>
    </TodoProvider>
    );
  
};

export default UserLists;
