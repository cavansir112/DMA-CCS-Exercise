import React, { useState } from "react";
import List from "./List";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function Todo(){
   
    let [val,setval] = useState("");
    let dis=useDispatch()

    function addList(){
        dis(addTodo(val))
        setval("")
    }

    return(
        <div className="list-section">
            <div className="list-box">
                <div className="inputDiv">
                    <input   id="intText" type="text" value={val} onChange={(e)=>setval(e.target.value)}></input>
                    <button onClick={addList}>Add</button>
                </div>
                <List/>
            </div>
        </div>
    )
}

export default Todo;