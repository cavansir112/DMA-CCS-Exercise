import React, { useState,useEffect } from "react";


function Portfoli(){

    const [list,setList] = useState([
        {
            img: "img/download-3.jpg",
            text1:  "natura-1",
            text2: "Lorem impus dorem",
            type: "Nature"
        },
        {
            img: "img/download-4.jpg",
            text1:  "natura-2",
            text2: "Lorem impus dorem",
            type: "Nature"
        },
        {
            img: "img/download-5.jpg",
            text1:  "natura-3",
            text2: "Lorem impus dorem",
            type: "Nature"
        },
        {
            img: "img/download.jpg",
            text1:  "Car-1",
            text2: "Lorem impus dorem",
            type: "Car"
        },
        {
            img: "img/download-1.jpg",
            text1:  "Car-2",
            text2: "Lorem impus dorem",
            type: "Car"
        },
        {
            img: "img/download-2.jpg",
            text1:  "Car-3",
            text2: "Lorem impus dorem",
            type: "Car"
        },
        {
            img: "img/download-6.jpg",
            text1:  "Man",
            text2: "Lorem impus dorem",
            type: "People"
        },
        {
            img: "img/images-1.jpg",
            text1:  "Woman",
            text2: "Lorem impus dorem",
            type: "People"
        },
        {
            img: "img/images.jpg",
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
    

    



    return(
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
                        return <div key={index} className="boxs">
                                    <img src="{item.img}" alt=""></img>
                                    <h5>{item.text1}</h5>
                                    <p>{item.text2}</p>
                                </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Portfoli;