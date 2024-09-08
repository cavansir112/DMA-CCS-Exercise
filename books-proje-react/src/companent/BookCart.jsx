import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "./bookSlice";

function BookCart (){
    const [data, setData] = useState([]);

    let dis=useDispatch();
    const {books} = useSelector(state => state.bookSection);
        useEffect(() => {
            // getData()
            dis(getAllBooks())
        },[]);

    {books?.map((item, index) => {
        return(
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card">
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                    <button>open<i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        )
    })}
}

export default BookCart;