import React from "react";
import Card from "./Card";
import Modal from "./Modal";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getBasket, postProduct } from "./basketSlice";



function Praduct(){
    const [data, setData] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    // let url = "http://localhost:8070/praduct";
    // function  getData(){
    //     axios.get(url).then((res) => {
    //         setData(res.data);
    //     });
    // }

    let dis=useDispatch();
    const {products,basket} = useSelector(state => state.soppingCard);
    useEffect(() => {
        // getData()
        dis(getAllProducts())
        dis(getBasket())
    },[dis]);

    const addProduct = (id)=>{
        console.log("srh");
        let findProduct = basket.find(p=>p.productId == id)
        if(!findProduct){
            dis(postProduct({productId:id, count: 1}))
        }
    }

    console.log(products);
    console.log(basket);

    const opens = () => {
        setModalActive(true);
    };

    const close = () => {
        setModalActive(false);
    };
    return (

        <div className="praduct-section">
            <div className="w-100 d-flex justify-content-between"><h1>Product List</h1><i onClick={()=>setModalActive(true)} class="fa-solid fa-cart-shopping shop-icon"></i></div>
            <div className="row">
                {products?.map((user, index) => {
                    return <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="card">
                                    <img src={`${user.img}`} alt="" />
                                    <h2>{user.name}</h2>
                                    <p>{user.price} $</p>
                                    <button onClick={() => addProduct(user.id)}>Sebet <i className="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                })}
            </div>
            {
                modalActive ? <Modal setModalActive={setModalActive} /> : null
            }
            
            {/* <div className={`modals ${modalActive ? "modal-active" : ""}`}>
                <div className="modal-overlay w-100 d-flex justify-content-between"><h3>Modal</h3> <i onClick={close} class="fa-solid fa-x clos-modal"></i></div>
            </div> */}
        </div>
    )
}

export default Praduct;