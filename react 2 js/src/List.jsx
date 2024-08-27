import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { complated, deleteTodo } from "./todoSlice";

function List(){
    let dispatch = useDispatch();
    let {todos} = useSelector(s=>s.todoList);
    return(
        <ul id="listU" className="listUl">
        {
            todos.map((todo,index)=>(
                
                <li key={index} style={{textDecoration:todo.complated ? "line-through":null}}>
                    {todo.value} 
                    <div>
                        <button onClick={()=>dispatch(deleteTodo(index))} ><i class="fa-solid fa-trash"></i></button>
                        <button onClick={()=>dispatch(complated(index))} disabled={todo.complated} className="cekBtn" ><i class="fa-solid fa-check"></i></button>
                    </div>
                </li>
                        
                
            ))
 
        }
        </ul>
        
        
    )
}


export default List;
