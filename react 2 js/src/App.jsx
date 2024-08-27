import React, { useState,useEffect } from "react";
import './App.css'
import Todo from './Todo'
import Portfoli from './Portfoli'

function App() {
  const [count, setCount] = useState(0)

  const [list,setList] = useState([
    {
        img: "../public/download-3.jpg",
        text1:  "natura-1",
        text2: "Lorem impus dorem",
        type: "Nature"
    },
    {
        img: "../public/download-4.jpg",
        text1:  "natura-2",
        text2: "Lorem impus dorem",
        type: "Nature"
    },
    {
        img: "../public/download-5.jpg",
        text1:  "natura-3",
        text2: "Lorem impus dorem",
        type: "Nature"
    },
    {
        img: "../public/download.jpg",
        text1:  "Car-1",
        text2: "Lorem impus dorem",
        type: "Car"
    },
    {
        img: "../public/download-1.jpg",
        text1:  "Car-2",
        text2: "Lorem impus dorem",
        type: "Car"
    },
    {
        img: "../public/download-2.jpg",
        text1:  "Car-3",
        text2: "Lorem impus dorem",
        type: "Car"
    },
    {
        img: "../public/download-6.jpg",
        text1:  "Man",
        text2: "Lorem impus dorem",
        type: "People"
    },
    {
        img: "../public/images-1.jpg",
        text1:  "Woman",
        text2: "Lorem impus dorem",
        type: "People"
    },
    {
        img: "../public/images.jpg",
        text1:  "Girl",
        text2: "Lorem impus dorem",
        type: "People"
    }
   
    
])

useEffect(() => {
    let listLi = document.querySelectorAll(".port-list ul li");
    console.log(listLi);

    listLi.forEach((li) => {
        li.onclick = function() {
            listLi.forEach(li => li.classList.remove('active-li'));
            li.classList.add('active-li');
            ListKatagori(li.innerText);
        };
    });
}, []);

function ListKatagori(listType) {
    let mList = list.filter(item => listType === 'Show All' || item.type === listType);
    setList(mList);
}

  return (
    <>
      <Todo/>


      <div className="Portfoli-section">
            <h2>PORTFOLIO</h2>
            <div className="port-list">
                <ul>
                    <li id="listAll" className="active-li">Show All</li>
                    <li>Nature</li>
                    <li>Car</li>
                    <li>People</li>
                </ul>
            </div>
            <div id="porBoxt" className="port-box">
            {
              list?.map((item,index)=>{
                  return <Portfoli key={index}  img={item.img} text1={item.text1} text2={item.text2}/>

              })
            }
                
            </div>
        </div> 
       <Portfoli/>
    </>
  )
}

export default App
