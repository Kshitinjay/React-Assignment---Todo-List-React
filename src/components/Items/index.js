import React from "react";
import "../Items/style.css";
const Items = (props) => {
  const check = props.editing;

  return (
    <>
      {check ? (
        <>
          <li>
              <input type="text" defaultValue={props.data} onChange={props.newDataChange}></input>
              <button className="save" onClick={()=>{props.submitHandler(props.ide,props.data)}}>Save</button>
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
