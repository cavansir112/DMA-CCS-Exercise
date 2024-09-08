
import { useState,useEffect } from 'react'
import Card from './Card';

function Portfolio() {
    const [list,setList] = useState([
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/1.jpg",
            type: "Branding"
        },
        {
            text1: "Apple USB",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/2.jpg",
            type: "Branding"
        },
        {
            text1: "Work Space",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/3.jpg",
            type: "Creative"
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/4.jpg",
            type: "Design"
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "https://bako-portfolio.vercel.app/images/portfolio/5.jpg",
            type: "Design"
        },
        {
            text1: "Creative Art",
            text2: "Name-2",
            img: "	https://bako-portfolio.vercel.app/images/portfolio/6.jpg",
            type: "Art"
        },
    ]);

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
        let mList = list.filter(item => listType === 'All Projects' || item.type === listType);
        setList(mList);
    }
    return(
        <div className="section-divs portfolio w-100 px-5 py-5 mt-5">
            <h3>Portfolio</h3>
            <div className="Portfoli-section">
            <div className="port-list">
                <ul>
                    <li id="listAll" className="active-li">All Projects</li>
                    <li>Branding</li>
                    <li>Creative</li>
                    <li>Design</li>
                    <li>Art</li>
                </ul>
            </div>
            <div id="porBoxt" className="row port-box">
                {
                    list.map((item,index)=>{
                    return <Card key={index} img={item.img} text1={item.text1} text2={item.text2} />
                    })
                }
            
            </div>
            </div>
           
        </div>
    )
}



export default Portfolio;