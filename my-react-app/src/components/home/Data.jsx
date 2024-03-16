import React from 'react'
import { ReactComponent as WavingHandEmoji } from '../../assets/hand1.svg'



const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Kim Magidhi              
            <WavingHandEmoji />
        </h1>
        <h3 className="home__subtitle"> Software Developer </h3>
        <p className="home__description">I'm an aspiring Software Developer aiming to excel 
        as a Full Stack Developer. I'm committed to mastering both frontend and backend skills 
        to create impactful software solutions efficiently.</p>

        <a href="#contact" className="button">
            Say Hello 🙋🏽‍♂️
        </a>
    </div>
  )
}

export default Data