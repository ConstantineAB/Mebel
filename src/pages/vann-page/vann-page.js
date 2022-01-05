import React from 'react';
import { GameItem } from '../../components/game-item';
import './vann-page.css';

const GAMES = [
    {
        image: '/game-covers/vann/cran.jpg',
        title: 'Кран',
        genres: ['Мягкая мебель'],
        price: 5390,
        id: 1,
        description: "...",
    },
    {
        image: '/game-covers/vann/dush.jpg',
        title: 'Душевая кабина', 
        genres: ['Мягкая мебель'],
        price: 19700,
        id: 2,
        description: '...'
    },
    {
        image: '/game-covers/vann/rak.jpg',
        title: 'Раковина',
        genres: ['Мягкая мебель'],
        price: 15500,
        id: 3,
        description: '...'
    },
    {
        image: '/game-covers/vann/un.jpg',
        title: 'Унитаз',
        genres: ['Мягкая мебель'],
        price: 15900,
        id: 4,
        description: '...'
    },
    {
        image: '/game-covers/vann/vanna.jpg',
        title: 'Ванна',
        genres: ['Мягкая мебель'],
        price: 45900,
        id: 5,
        description: '...'
    }
]

export const VannPage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}