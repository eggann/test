import React from "react";

function Experience () {

    const header = {
        mainHeader: "My Experience",
        subHeading: "Embrace Learning and Innovation from Various Perspectives",
    };

    const state = [
        {
            id:1,
            icon:'./image/experience-icon1.jpg',
            heading:"Ui/Ux Design",
            text:
                "Trying to use Figma to complete UI/UX design and exploring the collaborative advantages of this tool.",
        },
        {
            id:2,
            icon:'./image/experience-icon2.jpg',
            heading:"Web Development",
            text:
                "Developed SPA web page with HTML, CSS, JavaScript, and Flask with a front-end and back-end separation.",
        },
        {
            id:3,
            icon:'./image/experience-icon3.jpg',
            heading:"React Website Design",
            text:
                "Build a personal portfolio website using React, including navigation, skill section, project section, contact form.",
        },
    ];

    return (
        <div className="experience">
            <div className="container">
                <div className="experience_header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="experience_box">
                                    <img src={info.icon} alt="" className="commonIcons" />
                                    <h4 className="experience_box-header">{info.heading}</h4>
                                    <p className="experience_box-p">{info.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;