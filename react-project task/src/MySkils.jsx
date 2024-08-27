import React from "react";


function MySkils() {
    return(
        <div className="section-divs skills  my-5">
            <h3>My Skills</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics</p>
            <div className="row mt-5">
                <div className="col-6 mb-4">
                    <div className="skills-div">
                        <div className="skil-box">
                            <h6>Java</h6>
                            <span>85%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="skills-div">
                        <div className="skil-box">
                            <h6>Jquery</h6>
                            <span>90%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="skills-div">
                        <div className="skil-box">
                            <h6>HTML & CSS</h6>
                            <span>95%</span>
                        </div>
                        
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="skills-div">
                        <div className="skil-box">
                            <h6>JavaScript</h6>
                            <span>80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="skills-div">
                        <div className="skil-box">
                            <h6>React</h6>
                            <span>80%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="skills-div">
                        <div className="skil-box">
                            <h6>C#</h6>
                            <span>85%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkils;