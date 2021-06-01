import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState(" ");
  const [add, setAdd] = useState([]);

  const addElement = (e) => {
    const eve = e.target.value;
    setTodo(eve);
  };
  // console.log(todo);

  const addItems = () => {
    if (!todo) {
      alert("Please Add Somethig");
    } else {
      setAdd([...add, todo]);
      setTodo(" ");
    }
  };
  const deleteItem = (index) => {
    const updatedItems = add.filter((ele, id) => {
      return index !== id;
    });
    setAdd(updatedItems);
  };
  const DeleteAllItem = () => {
    setAdd([]);
  };
  return (
    <>
      <div className="App">
        <h1 className="head">TodoList</h1>
        <div className="container__todo">
          <input
            type="text"
            placeholder="Add The Items By Your Choice"
            value={todo}
            onChange={addElement}
          />
          <div className="add__item" onClick={addItems}>
            AddItems
          </div>
          <thead className="ulist">
            <tr className="All__data">
              <th id="sn">S_No.</th>
              <th id="name">ItemName</th>
              <th id="Delete" onClick={DeleteAllItem}>
                DeleteAll
              </th>
            </tr>
          </thead>

          <ul className="ulist">
            {add.map((ele, index) => {
              return (
                <li className="All__data" key={index}>
                  <td id="sn">{index + 1}</td>
                  <td id="name">{ele}</td>
                  <td id="Delete" onClick={() => deleteItem(index)}>
                    Delete
                  </td>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
