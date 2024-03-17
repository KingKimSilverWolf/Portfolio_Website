import React from 'react';
import "./about.css";
import AboutImg from "../../assets/profile1.jpg";
import CV from "../../assets/Resume1.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                I'm Kim Magidhi, a dedicated and passionate aspiring Full Stack Developer, 
                currently advancing my education in Computer Science at Suffolk University. 
                My active engagement in projects showcase 
                my proficiency in programming languages and development frameworks. I thrive on 
                challenges, whether it's enhancing user engagement through innovative app features or 
                improving server response times with efficient backend solutions. My experience in UX/UI 
                design has further enriched my software engineering skills, allowing me to create intuitive 
                and user-friendly interfaces. I'm on a mission to develop seamless and impactful software 
                solutions, aiming to make a significant difference in the tech world.
                </p>

                <a download="" href={CV} >
                    <button class="download-button">
                        <div class="docs"><svg class="css-i6dzq1" stroke-linejoin="round" 
                        stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" 
                        height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16">
                        </line><polyline points="10 9 9 9 8 9"></polyline>
                        </svg> Download Resume</div>
                        <div class="download">
                            <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" 
                            stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10">
                            </polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg> 
                            
                        </div>
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About