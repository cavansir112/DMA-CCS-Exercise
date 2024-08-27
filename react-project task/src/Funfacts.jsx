import React from "react";

function Funfacts() {
    return(
        <div className="section-funfacts">
            <div className="row">
                <div className="col-3">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <h2><span>157</span></h2>
                    <p>Projects completed</p>
                </div>
                <div className="col-3">
                    <i class="fa-solid fa-mug-hot"></i>
                    <h2><span>2765</span></h2>
                    <p>Cup of coffee</p>
                </div>
                <div className="col-3">
                    <i class="fa-regular fa-face-smile"></i>
                    <h2><span>350</span></h2>
                    <p>Happy customers</p>
                </div>
                <div className="col-3">
                    <i class="fa-solid fa-trophy"></i>
                    <h2><span>29</span></h2>
                    <p>Awards won</p>
                </div>
            </div>
        </div>
    )
}

export default Funfacts;