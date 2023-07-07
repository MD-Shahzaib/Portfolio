import React from 'react';
import "../global.css";
import { skills } from '../Data';

const Skills = () => {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font" id='skills'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className="skill-body">
                        <div className="skill-image"></div>
                        <div className="skill-icons-box">
                            <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">MY SKILLS</h2>
                            <span className='skill-para text-white'>Crazy full stack developer who wants to explore every tech stack</span>
                            <div className="skill-icons">
                                {skills.map((item, index) => {
                                    return (
                                        <div className='skill-icon' key={index}>
                                            {item.icon}
                                            <span className='skill-icon-title'>{item.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;