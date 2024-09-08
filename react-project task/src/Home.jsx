import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return(
        <div className="section-img mb-5">
            <section className="home-section ">
                <div className="container-home">
                    <h1>Salam Men Cavansir Muradov</h1>
                    <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <div className="button-div">
                        <Link to="/portfolio"><button className="btn-works"><i className="fa-solid fa-briefcase"></i> View Portfolio</button></Link>
                        <button className="btn-contact"><i class="fa-regular fa-envelope"></i> Hire me</button>
                    </div>
                
                </div>
            </section>
        </div>
        
    )
}



export default Home;