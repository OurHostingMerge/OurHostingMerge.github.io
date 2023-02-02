import React from 'react'
import "../App.css"
import { Button } from './Button'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={require('../videos/video-2.mp4')} autoPlay loop muted />
            <h1 style={{ color: 'white' }}> TORY DIOS </h1>
            <p style={{ color: 'white' }}> El tory es un dios</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"> medio pene tory </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large"> medio pene fuyu <i className="far fa-play-circle" /> </Button>
            </div>
        </div>
    )
}

export default HeroSection;