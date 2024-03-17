import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4+ Years of programming</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Asc. in <b>Computer Science</b></span>
      </div>

      <div className="about__box">
        <i class='bx bxl-java about__icon'></i><i class='bx bxl-python about__icon'></i><i class='bx bxs-file-json about__icon'></i>
        <i class='bx bxl-react about__icon'></i>
        <i class='bx bxl-typescript about__icon'></i><i class='bx bxl-c-plus-plus about__icon'></i><i class='bx bxl-flutter about__icon'></i><i class='bx bxl-tailwind-css about__icon'></i>
        <i class='bx bxl-javascript about__icon'></i><i class='bx bxl-git about__icon'></i><i class='bx bxl-github about__icon'></i><i class='bx bxl-nodejs about__icon'></i>
        <h3 className="about__title">Familia Languages & Interfaces</h3>
        <span className="about__subtitle"></span>
      </div>
    </div>
  )
}

export default Info