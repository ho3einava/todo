import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";

const FieldTitle = () => {
  const { sort } = useContext(TodoContext);
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    sort(sortOrder);
  };
  return (
    <div>
      <div className="fieldMain">
        <div className="fieldTitle">Document Name</div>
        <div className="fieldTitle">
          Data Added{" "}
          <i
            className="bi bi-arrow-down-up"
            type="button"
            onClick={() => toggleSortOrder()}
          >
            {" "}
          </i>
        </div>
        <div className="fieldTitle">
          Size{" "}
          <i
            className="bi bi-arrow-down-up"
            type="button"
            onClick={() => toggleSortOrder()}
          ></i>
        </div>
        <div className="fieldTitle">
          Share with{" "}
          <i
            className="bi bi-arrow-down-up"
            type="button"
            onClick={() => toggleSortOrder()}
          ></i>
        </div>
        <div className="fieldTitle">Tools </div>
      </div>
    </div>
  );
};

export default FieldTitle;
