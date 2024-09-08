import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";





function Menu() {

    useEffect(() => {
        let menuLi = document.querySelectorAll(".menu-list li");
        menuLi.forEach((li) => {
            li.addEventListener('click', function() {
                menuLi.forEach(li => li.classList.remove('active-menu'));
                li.classList.add('active-menu');
            });
        });
    },[]);

    
    return(
        <div className="menu p-4">
            <div>
                <img src="../public/img1.jpeg"></img>
                <h2>Cavansir Muradov</h2>
                <h6>Full-Strack Developer</h6>
            </div>
            <ul className="menu-list">
                <li className="active-menu"><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                <li><Link to="/about"><i className="fa-regular fa-user"></i> About</Link></li>
                <li><Link to="/services"> <i className="fa-regular fa-lightbulb"></i> Services</Link></li>
                <li><Link to="/resume"><i className="fa-solid fa-user-graduate"></i> Resume</Link></li>
                <li><Link to="/portfolio"> <i className="fa-solid fa-briefcase"></i> Works</Link></li>
                <li><Link to="/blog"><i className="fa-solid fa-shapes"></i> Blog</Link></li>
                <li><Link to="/contact"><i className="fa-solid fa-phone"></i> Contact</Link></li>
            </ul>
            <div >
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
                <p>© 2024 Cavansir Template</p>
            </div>
        </div>
    )
}

export default Menu;