import React, { useState,useEffect } from "react";


function Portfoli({img,text1,text2}){
    return(
        <div className="boxs">
            <img src={`${img}`} alt=""></img>
            <h5>{text1}</h5>
            <p>{text2}</p>
        </div>
    )
}

export default Portfoli;