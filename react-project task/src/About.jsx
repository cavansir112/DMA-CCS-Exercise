import React from "react";


function About() {
    return(
        <div className="section-divs about px-5 py-5">
            <h3>About Me</h3>
            <div className="row mt-5">
                <div className="col-3">
                    <img src="../public/img1.jpeg"></img>
                </div>
                <div className="col-9">
                    <h4>Hello,</h4>
                    <p>I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.</p>
                    <ul>
                        <li><span>Name:</span> Cavansir Muradov</li>
                        <li><span>Location:</span> London, UK</li>
                        <li><span>Birthday: </span>14 August, 1990</li>
                        <li><span>Email: </span> hello@bako.com</li>
                    </ul>
                    <button className="btn-dow"><i class="fa-solid fa-download"></i> Download CV</button>
                    <button className="btn-mail"><i class="fa-regular fa-envelope"></i> Hire me</button>
                </div>
            </div>
        </div>
    )
}


export default About;