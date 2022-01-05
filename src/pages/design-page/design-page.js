import React from 'react';
import { GameItem } from '../../components/game-item';
import './design-page.css';

const GAMES = [
    {
        image: '/game-covers/dez/ct.jpg',
        title: 'Стул',
        genres: ['Дизайнерская мебель'],
        price: 20500,
        id: 1,
        description: "...",
    },
    {
        image: '/game-covers/dez/dfjg.jpg',
        title: 'Кровать качалка', 
        genres: ['Дизайнерская мебель'],
        price: 47900,
        id: 2,
        description: '...'
    },
    {
        image: '/game-covers/dez/dflk.jpg',
        title: 'Кресло',
        genres: ['Дизайнерская мебель'],
        price: 19900,
        id: 3,
        description: '...'
    },
    {
        image: '/game-covers/dez/dfpogi.jpg',
        title: 'Столик',
        genres: ['Дизайнерская мебель'],
        price: 16900,
        id: 4,
        description: '...'
    },
    {
        image: '/game-covers/dez/sfoig.jpg',
        title: 'Кровать корзина',
        genres: ['Дизайнерская мебель'],
        price: 45900,
        id: 5,
        description: 'После комфортного ночного сна ваша спальня или комната для гостей может легко превратиться в гостиную.'
    }
]

export const DesignPage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}