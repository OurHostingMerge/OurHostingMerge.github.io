import './Cards.css';
import CardItem from './CardItem';
import Mandala from '../images/portada_mandala.png';
import FlappyBird from '../images/flappy_bird.jpg';
import InstagramLogo from '../images/instagram_blacklogo.png';
import Vidal from '../images/Vidalsiendoweon2.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={InstagramLogo}
                            text='See who unfollowed you on Instagram'
                            label='Social Media'
                            path='/InstagramUnfollowers'
                        />
                        <CardItem
                            src={Mandala}
                            text='Paint mandalas with your favorite colors'
                            label='To Relax'
                            path='/Mandala'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={FlappyBird}
                            text='Watch as an AI teaches itself how to dominate Flappy bird'
                            label='Technology'
                            path='/FlappyBirdAI'
                        />
                        <CardItem
                            src={Vidal}
                            text='Watch a compilation of Vidal being a guaton ql'
                            label='Vidal'
                            path='/Vidal'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;