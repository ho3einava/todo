import { useContext } from "react";
import { debounce } from "lodash";
import TodoContext from "../../Context/TodoContext";

const SearchTodo = ({ todos }) => {
  const { search } = useContext(TodoContext);

  const handleSearch = (query) => {
    search(query);
  };

  const handleChange = debounce((e) => {
    const value = e.target.value;
    handleSearch(value);
  }, 500);

  return (
    <div>
      <div className="searchBox">
        <div className="searchForm">
          <div className="mainSearchInput">
            <div className="searchIcon">
              <i className="bi bi-search"></i>
            </div>

            <input
              className="searchInput"
              type="text"
              placeholder="search Document , name , Date"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="searchButton">
          <button className="searchBtn">Search</button>
        </div>
      </div>

      <div style={{ marginLeft: "3rem" }}> </div>
    </div>
  );
};

export default SearchTodo;
