import React from "react";
import "../Items/style.css";
const Items = (props) => {
  return (
    <>
      <li className="list">
        {props.data}
        <button
          className="edit"
          onClick={() => {
            props.editItems(props.ide,props.data);
            // console.log(props.ide);
          }}
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={() => {
            props.deleteItems(props.ide);
            // console.log(props.ide);
          }}
        >
          Del
        </button>
      </li>
    </>
  );
};

export default Items;
