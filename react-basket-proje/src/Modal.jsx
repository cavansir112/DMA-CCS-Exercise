import React from "react";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

function Modal({setModalActive}) {
    const {basket,products} = useSelector(s=>s.soppingCard)
    const ModalPuraduct = basket.map(basketItem=>{
        let product = products.find(p=>p.id == basketItem.productId);
        return{
            ...product,
            count:basketItem.count,
            basketId:basketItem.id,
            basketProductId:basketItem.productId
        }
    })

    return(
        <div className="modals">
            <div className="modal-overlay w-100 d-flex justify-content-between"><h1>Modal</h1> <i onClick={()=>setModalActive(false)} class="fa-solid fa-x"></i></div>
            {
                ModalPuraduct?.map(p=>(
                    <div key={p.id} className="d-flex">
                        <div className="basketImg">
                            <img src={`${p.img}`} alt="" />
                        </div>
                        <div className="basketText">
                            <h3>{p.name}</h3>
                            <div className="w-100 d-flex justify-content-between">
                                <p>Count: {p.count}</p>
                                <p>Total Price: {p.price * p.count} $</p>
                            </div>
                            <div className="w-100 d-flex justify-content-between">
                                <button>Delete</button>
                                <button>Update</button>
                            </div>
                            
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}


export default Modal;