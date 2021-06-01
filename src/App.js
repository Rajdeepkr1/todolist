import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState(" ");
  const [add, setAdd] = useState([]);

  const addElement = (e) => {
    const eve = e.target.value;
    setTodo(eve);
  };
  console.log(todo);

  const addItems = () => {
    setAdd([...add, todo]);
    setTodo(" ");
  };
  const deleteItem = (index) => {
    const updatedItems = add.filter((ele, id) => {
      return index !== id;
    });
    setAdd(updatedItems);
  };
  return (
    <>
      <div className="App">
        <h1 className="head">TodoList</h1>
        <div className="container__todo">
          <input
            type="text"
            value={todo}
            onChange={addElement}
            placeholder="Add Items"
          />
          <div className="add__item" onClick={addItems}>
            AddItems
          </div>
          <ul className="ulist">
            <tr className="All__data">
              <th id="sn">S_No.</th>
              <th id="name">ItemName</th>
              <th id="DeleteAll">DeleteAll</th>
            </tr>
          </ul>

          <ul className="ulist">
            {add.map((ele, index) => {
              return (
                <tr className="All__data" key={index}>
                  <th id="sn">{index}</th>
                  <th id="name">{ele}</th>
                  <th id="Delete" onClick={() => deleteItem(index)}>
                    Delete
                  </th>
                </tr>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
