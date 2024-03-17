import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4+ Years of programming</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Associates Degree in Science: <b>Computer Science</b></span>
      </div>

      <div className="about__box">
        <i class='bx bxl-java'></i><i class='bx bxl-python'></i>
        <h3 className="about__title">Favourite Languages</h3>
        <span className="about__subtitle">Java & Python</span>
      </div>
    </div>
  )
}

export default Info