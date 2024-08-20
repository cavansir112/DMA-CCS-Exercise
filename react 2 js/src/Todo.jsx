import React, { useState } from "react";

function Todo(){
    const [list,setList] = useState(["item1","item2","item3"]);
    const [getValue,setValue] = useState("");

    function addBtn(){
        if(getValue == ""){
            return;
        }else{
            setList([...list,getValue])
            setValue("");
        }
    }

    function sil(i){
        const mList = [...list];
        mList.splice(i,1);
        setList(mList);

    }

    function cek(i){
        const listCheck = document.querySelectorAll("li")[i];
        listCheck.classList.add("activeChek");
        const disibledBtn = document.querySelectorAll(".cekBtn")[i];
        disibledBtn.disabled = true;
    }
    return(
        <div className="list-section">
            <div className="list-box">
                <div className="inputDiv">
                    <input value={getValue} id="intText" type="text" onChange={(e)=>
                    setValue(e.target.value)}></input>
                    <button onClick={addBtn}>Add</button>
                </div>

                <ul id="listU" className="listUl">
                    {
                        list?.map((item,index)=>{
                            return <li key={index}>{item} <div><button onClick={()=>sil(index)}><i class="fa-solid fa-trash"></i></button><button className="cekBtn" onClick={(e)=>cek(index)}><i class="fa-solid fa-check"></i></button></div></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo;