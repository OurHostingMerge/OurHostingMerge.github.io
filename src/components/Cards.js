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
                            path='/mandalas'
                        />
                        <CardItem
                            src={require('../images/flappy_bird.webp')}
                            text='Watch as an AI teaches itself how to dominate Flappy bird'
                            label='Technology'
                            path='/flappy-bird-AI'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-3.jpg')}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-4.jpg')}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={require('../images/img-8.jpg')}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;