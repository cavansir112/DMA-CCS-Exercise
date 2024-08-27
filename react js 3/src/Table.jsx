import React from "react";

function Table({ id, name, age, del, edit }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>
          <button onClick={() => del(id)}> {}
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
        <td>
          <button onClick={() => edit(id)}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    );
  }
  
  export default Table;