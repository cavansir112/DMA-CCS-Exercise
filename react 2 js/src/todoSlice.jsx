import React from "react";
import { createSlice } from "@reduxjs/toolkit";


export const todoSlice  = createSlice ({
    name: 'counter',
    initialState: {
        todos:[{ value:"item1",complated: false},{
        value:"item2", complated: true
    }],
    },
    reducers: {
        addTodo:(state,action)=>{
            console.log(action);
            let newTodo = {value:action.payload,complated:false}
            state.todos.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        },
        complated:(state,action)=>{
            state.todos[action.payload].complated = true;
        }
    },
})

export const { addTodo, deleteTodo, complated} = todoSlice.actions;

export default todoSlice.reducer;