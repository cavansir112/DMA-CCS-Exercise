import React from "react";

function Card({img,text1,text2}) {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-4">
                <img src={`${img}`} alt="" />
                <div className="line">
                    <div>
                        <h4>{text1}</h4>
                        <p>{text2}</p>
                    </div>
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}

export default Card;