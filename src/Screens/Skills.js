import React from 'react'
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaNpm, FaGithub, FaBootstrap } from "react-icons/fa";
// import { SiFirebase, SiExpress, SiRedux, SiMongodb, SiPostman } from "react-icons/si";
// import { GiSkills } from "react-icons/gi";
// import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
    return (
        <>
            <div className='skill-container' id='skill'>
                <div className="skill-heading">
                    <span className="skill-head-title">Skills</span>
                    {/* <GiSkills className='heading-icon fa-beat-fade' /> */}
                </div>
                <div className="skill-body">
                    <div className="skill-image"></div>
                    <div className="skill-icons-box">
                        <span className='skill-para'>Crazy full stack developer who wants to explore every tech stack</span>
                        <div className="skill-icons">
                            <div className='skill-icon'>
                                {/* <FaHtml5 /> */}
                                <span className='skill-icon-title'>HTML5</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaCss3Alt /> */}
                                <span className='skill-icon-title'>CSS3</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaJs /> */}
                                <span className='skill-icon-title'>JavaScript</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaBootstrap /> */}
                                <span className='skill-icon-title'>Bootstrap</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaReact /> */}
                                <span className='skill-icon-title'>Reactjs</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaNode /> */}
                                <span className='skill-icon-title'>Nodejs</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <SiExpress /> */}
                                <span className='skill-icon-title'>Expressjs</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <SiMongodb /> */}
                                <span className='skill-icon-title'>MongoDB</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <SiFirebase /> */}
                                <span className='skill-icon-title'>Firebase</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <SiRedux /> */}
                                <span className='skill-icon-title'>Redux</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <TbBrandReactNative /> */}
                                <span className='skill-icon-title'>React-Native</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaNpm /> */}
                                <span className='skill-icon-title'>NPM</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <FaGithub /> */}
                                <span className='skill-icon-title'>Github</span>
                            </div>
                            <div className='skill-icon'>
                                {/* <SiPostman /> */}
                                <span className='skill-icon-title'>Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;