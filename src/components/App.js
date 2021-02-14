import React, { useState } from "react";
import Items from "./Items/";
import "./../styles/App.css";

function App() {
  const [item, setItem] = useState("");
  const [listOfItems, setListOfItems] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const addItems = () => {
    if (!item) {
      alert("no data");
    } else {
      setListOfItems((oldItems) => {
        return [...oldItems, item];
      });
      setItem("");
    }
  };

  const deleteItem = (ide) => {
    setListOfItems((allItems) => {
      return allItems.filter((currentElemnt, index) => {
        return index !== ide;
      });
    });
  };

  const editItem = (ide,data) =>{
    console.log("edit clicked");
  }

  return (
    <div id="main">
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            name=""
            value={item}
            id="task"
            placeholder="Add item"
            onChange={handleChange}
          />
          <button id="btn" onClick={addItems}>
            Add
          </button>
          <ol>
            {listOfItems.map((elem, index) => {
              return (
                <Items
                  key={index}
                  ide={index}
                  data={elem}
                  deleteItems={deleteItem}
                  editItems={editItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
