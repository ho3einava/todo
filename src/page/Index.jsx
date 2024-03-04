import Title from "../components/Title";
import UserLists from "../components/UserLists";

const Index = () => {
  return (
    <>
      <div className="main">
        <div className="main-table">
          <Title />

          <UserLists />
        </div>
      </div>
    </>
  );
};

export default Index;
