import React, { useState } from "react";
import "../Items/style.css";
const Items = (props) => {
  

  return (
    <>
      {props.editing ? (
        <>
          <li>
            {/* <form onSubmit={props.submitHandler(props.ide,props.data)}> */}
              <input type="text" defaultValue={props.data} onChange={props.newDataChange}></input>
              <button className="save" onClick={()=>{props.submitHandler(props.ide,props.data)}}>Save</button>
              {/* <button className="save" type="submit">Save</button> */}
            {/* </form> */}
          </li>
        </>
      ) : (
        <>
          <li className="list">
            {props.data}
            <button className="edit" onClick={props.editItems}>
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                props.deleteItems(props.ide);
              }}
            >
              Del
            </button>
          </li>
        </>
      )}
    </>
  );
};

export default Items;
