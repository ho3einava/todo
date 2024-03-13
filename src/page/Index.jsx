
import TitleTodo from "../components/TitleTodo";

import UserLists from "../components/UserLists";


const Index = () => {
  
  return (
    <div>
      <div className="main">
        <div className="mainTable">
          <TitleTodo />
          
          <UserLists />
        </div>
      </div>
    </div>
  );
};

export default Index;
