import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Favorite Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/portada_mandala.png')}
                            text='Paint mandalas with your favorite colors'
                            label='To Relax'
                            path='/Mandala'
                        />
                        <CardItem
                            src={require('../images/flappy_bird.jpg')}
                            text='Watch as an AI teaches itself how to dominate Flappy bird'
                            label='Technology'
                            path='/FlappyBirdAI'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/baby_oct.jpg')}
                            text='Wanna talk with someone? Meet Nito: an AI made just for you'
                            label='Entertainment'
                            path='/Nito'
                        />
                        <CardItem
                            src={require('../images/Vidalsiendoweon2.jpg')}
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