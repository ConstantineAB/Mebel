import React from 'react';
import { GameItem } from '../../components/game-item';
import './office-page.css';

const GAMES = [
    {
        image: '/game-covers/office-page/table.jpg',
        title: 'Стол',
        genres: ['Офисная мебель'],
        price: 19800,
        id: 1,
        description: "...",
    },
    {
        image: '/game-covers/office-page/table-2.jpg',
        title: 'Стол раскладной', 
        genres: ['Офисная мебель'],
        price: 29700,
        id: 2,
        description: '...'
    },
    {
        image: '/game-covers/office-page/chair.jpg',
        title: 'Компьютерное кресло',
        genres: ['Офисная мебель'],
        price: 12500,
        id: 3,
        description: '...'
    },
    {
        image: '/game-covers/office-page/sofa.webp',
        title: 'Диван офисный',
        genres: ['Офисная мебель'],
        price: 25900,
        id: 4,
        description: '...'
    },
    {
        image: '/game-covers/office-page/chair-2.jpg',
        title: 'Офисное кресло',
        genres: ['Офисная мебель'],
        price: 17900,
        id: 5,
        description: '...'
    }
]

export const OfficePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}