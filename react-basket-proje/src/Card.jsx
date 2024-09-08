import React from "react";
import { useDispatch } from "react-redux";

// let dis = useDispatch()
// const addProduct = (id)=>{
//     let sindProdact = basket.find(p=>p.productId == id)
// }

function Card({name,img,price}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
                <img src={`${img}`} alt="" />
                <h2>{name}</h2>
                <p>{price} $</p>
                <button onclick={()=>addProduct(product.id)}>Sebet <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    )
}

export default Card;