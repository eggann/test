import React from "react";

function About () {
    const cv = "https://drive.google.com/file/d/1hzRppyg0tDFua14TXn2_A5katT-MC4fD/view?usp=sharing";
    return(
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">About Me</h1>
                    <div className="underline-border"></div>
                </div>

                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="./image/aboutimg.jpg" alt="" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="about_info">
                            <h1>Expertise with Javascript <br /> and fluency in HTML, CSS. </h1>
                            <div className="about_info">
                                <p>
                                Graduated from National Chiao Tung University M.Ed., digital learning.<br />
                                Expertise with Javascript and fluency in HTML, CSS. <br /><br />
                                Learning and acquiring new skills motivate me. <br />
                                Possesses an eye for beauty, displays a confident attitude, <br />
                                and eagerly embraces challenges.

                                </p>
                                <div className="about_buttons">
                                    <a href={cv} className="btn btn-outline">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;