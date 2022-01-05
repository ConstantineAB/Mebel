import React from 'react';
import { GameItem } from '../../components/game-item';
import './meg-page.css';

const GAMES = [
    {
        image: '/game-covers/meg/_4.jpg',
        title: 'Кресло-мешок',
        genres: ['Мягкая мебель'],
        price: 2390,
        id: 1,
        description: "Вместе с этим креслом мешком вы всегда на природе! Это пуф среднего, универсального размера: подойдёт и ребёнку, и взрослому. Такие кресла очень удобны, и в то же время, они не громоздкие.",
    },
    {
        image: '/game-covers/meg/7264633.jpg',
        title: 'Диван угловой', 
        genres: ['Мягкая мебель'],
        price: 27900,
        id: 2,
        description: 'После комфортного ночного сна ваша спальня или комната для гостей может легко превратиться в гостиную. В отделении для хранения достаточно места, чтобы убрать постельные принадлежности.'
    },
    {
        image: '/game-covers/meg/i.webp',
        title: 'Кресло раскладное',
        genres: ['Мягкая мебель'],
        price: 15900,
        id: 3,
        description: 'После комфортного ночного сна ваша спальня или комната для гостей может легко превратиться в гостиную. В отделении для хранения достаточно места, чтобы убрать постельные принадлежности.'
    },
    {
        image: '/game-covers/meg/kreslo_shihan_1.png',
        title: 'Кресло',
        genres: ['Мягкая мебель'],
        price: 13900,
        id: 4,
        description: 'Прекрасно смотрится со всех сторон — можно поставить в середине комнаты.'
    },
    {
        image: '/game-covers/meg/photo.jpg',
        title: 'Диван угловой "luxury"',
        genres: ['Мягкая мебель'],
        price: 47900,
        id: 5,
        description: 'После комфортного ночного сна ваша спальня или комната для гостей может легко превратиться в гостиную.'
    }
]

export const MegPage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}