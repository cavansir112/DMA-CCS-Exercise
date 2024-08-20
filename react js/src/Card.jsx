import React from "react";

function Card({name,email,specialty}){
    // let {name,email,specialty} = props;
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mx-2 my-5">
                <div className="posit-div">
                <i class="fa-solid fa-user iconClass"></i>
                </div>
                <h6>{name}</h6>
                <span>{email}</span>
                <p>{specialty}</p>
                <div id='iconDiv' className="d-flex mt-2 w-100 justify-content-center">
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        
    )
}

export default Card;