import React, { useState } from "react";
import Items from "./Items/";
import "./../styles/App.css";

function App() {
  const [item, setItem] = useState("");
  const [listOfItems, setListOfItems] = useState([]);
  const [editing, setEditing] = useState(false);

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

  
  const editItem = () => {
    setEditing(true);
    console.log("edit clicked");
  };


  const [newData,setNewData] = useState("");

  const newDataChange = (event) =>{
    setNewData(event.target.value)
  }
  const submitHandler = (ide,data)=>{
    // event.preventDefault();
    console.log(ide,data);
    
    console.log("newData is",newData);
    listOfItems[ide]=newData;
    setEditing(false);
    console.log("completed");
    console.log(editing);
    // console.log(`item at ${ide} is ${listOfItems[ide]}`);
    // setListOfItems(listOfItems[])
    // const newArr = 
    
    // setListOfItems((allItems) => {
    //   return allItems.map((index) => {
    //     if(index===data){
    //       return [...allItems, data];
    //     }
    //   });
    // });
    // setListOfItems((oldItems) => {
    //   return [...oldItems, data];
    // });
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
                  editing={editing}
                  // saveItem={handleChange}
                  // addItems={addItems}
                  submitHandler={submitHandler}
                  // newData={newData}
                  newDataChange={newDataChange}
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
