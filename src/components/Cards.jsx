import './Cards.css';
import CardItem from './CardItem';
import Mandala from '../images/portada_mandala.png';
import FlappyBird from '../images/flappy_bird.jpg';
import BabyOct from '../images/baby_oct.jpg';
import Vidal from '../images/Vidalsiendoweon2.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Favorite Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Mandala}
                            text='Paint mandalas with your favorite colors'
                            label='To Relax'
                            path='/Mandala'
                        />
                        <CardItem
                            src={FlappyBird}
                            text='Watch as an AI teaches itself how to dominate Flappy bird'
                            label='Technology'
                            path='/FlappyBirdAI'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={BabyOct}
                            text='Wanna talk with someone? Meet Nito: an AI made just for you'
                            label='Entertainment'
                            path='/Nito'
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