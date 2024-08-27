import React from "react";

function Menu() {
    return(
        <div className="menu p-4">
            <div>
                <img src="../public/img1.jpeg"></img>
                <h2>Cavansir Muradov</h2>
                <h6>Full-Strack Developer</h6>
            </div>
            <ul className="menu-list">
                <li><a href="#"><i className="fa-solid fa-house"></i> Home</a></li>
                <li><a href="#"><i className="fa-regular fa-user"></i> About</a></li>
                <li><a href="#"> <i className="fa-regular fa-lightbulb"></i> Services</a></li>
                <li><a href="#"><i className="fa-solid fa-user-graduate"></i> Resume</a></li>
                <li><a href="#"> <i className="fa-solid fa-briefcase"></i> Works</a></li>
                <li><a href="#"><i className="fa-solid fa-shapes"></i> Blog</a></li>
                <li><a href="#"><i className="fa-solid fa-phone"></i> Contact</a></li>
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