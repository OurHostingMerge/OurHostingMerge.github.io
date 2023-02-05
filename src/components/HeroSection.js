import React from 'react'
import "../App.css"
import { Button } from './Button'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={require('../videos/video-1.mp4')} autoPlay loop muted />
            <h1 style={{ color: 'white' }}> ¿Cual es la peor mascota? </h1>
            <p style={{ color: 'white' }}> CLARAMENTE TORY DIOS!!</p>
            <div className="hero-btns">
                <Button buttonLink="/ToryFuyu" className="btns" buttonStyle="btn--outline" buttonSize="btn--large" > PELEA DE LOS SIGLOS </Button>
            </div>
            <div className="hero-btns">
                <Button buttonLink="/Tory" className="btns" buttonStyle="btn--outline" buttonSize="btn--large" > Tory </Button>
                <Button buttonLink="/Fuyu" className="btns" buttonStyle="btn--primary" buttonSize="btn--large" > Fuyu <i className="far fa-play-circle" /> </Button>
            </div>
        </div>
    )
}

export default HeroSection;