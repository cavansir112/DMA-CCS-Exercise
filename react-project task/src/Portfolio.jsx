import React from "react";


function Portfolio() {
    const arr = [
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
        },
    ]
    return(
        <div className="section-divs portfolio px-5 py-5">
            <h3>Portfolio</h3>
            {
                arr.map((item,index)=>{
                   return <Card key={index} name={item.name} email={item.email} specialty={item.specialty} />
                })
            }
            
        </div>
    )
}



export default Portfolio;