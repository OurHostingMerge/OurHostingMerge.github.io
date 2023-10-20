import "../../App.css"
import HeroSection from "../HeroSection"
import Cards from '../Cards';
import "./Home.css"

function Home() {
    return (
        <>
        <div className="container">
            <div class="section-1">
                <HeroSection />
            </div>
            <div class="section-2">
                <Cards />
            </div>    
        </div>
        </>
    );
}

export default Home