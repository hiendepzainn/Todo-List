import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "../../actions/todolist";
import "./ToDoList.css";
var ToDoList = () => {
  const data = useSelector((item) => item.todolistReducer);
  const calling = useDispatch();
  const inputRef = useRef(null);
  console.log(data);

  var handleAdd = () => {
    calling(addTask(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <>
      <input placeholder="nhập nội dung..." className="input" ref={inputRef} />
      <button className="button" onClick={handleAdd}>
        +
      </button>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration: item.isFinished ? "line-through" : "none",
            }}
          >
            {item.text}{" "}
            <button
              onClick={() => {
                calling(toggleTask(item.id));
              }}
            >
              x
            </button>{" "}
            <button
              onClick={() => {
                calling(deleteTask(item.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
