import "../App.css"
import { Button } from './Button'
import "./HeroSection.css"
import LoopVideo from "../videos/video-1.mp4"
import CardImage from "../images/card-image.png"

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={LoopVideo} autoPlay loop muted />
            <h1 style={{ color: 'white' }}> ¿What's our purpose? </h1>
            <p style={{ color: 'white' }}> We're a couple of Software Engineering students from the PUC
            university who dream of becoming penes and to minecraft. </p>
            <div className="hero-btns">
                <Button buttonLink="/ToryFuyu" className="btns" buttonStyle="btn--outline" buttonSize="btn--large" > Contact us </Button>
            </div>
            <div className="hero-btns">
                <Button buttonLink="/Tory" className="btns" buttonStyle="btn--outline" buttonSize="btn--large" > Tomás </Button>
                <Button buttonLink="/Fuyu" className="btns" buttonStyle="btn--primary" buttonSize="btn--large" > Nicolás <i className="far fa-play-circle" /> </Button>
            </div>
        </div>
    )
}

export default HeroSection;