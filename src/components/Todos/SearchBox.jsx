import { useContext } from "react";
import TodoContext from "../../Context/TodoContext";

const SearchBox = () => {
  const { search } = useContext(TodoContext);
  const handleSearch = async (searchValue) => {
    await search({ title: searchValue });
  };

  return (
    <>
      <div className="searchBox">
        <div className="search-form">
          <div className="main-search-input">
            <div className="search-icon">
              <i className="bi bi-search"></i>
            </div>

            <input
              className="search-input"
              type="text"
              placeholder="search Document , name , Date"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-button">
          <button className="search-btn">Search</button>
        </div>
      </div>
    </>
  );
};
export default SearchBox;
