import React from 'react';
import { Card, CardGroup, Col, Nav, Row } from 'react-bootstrap';
import { Button } from '../../components/button';
import { GameItem } from '../../components/game-item';
import { Slide } from '../../components/slide/slide';
import bath from './home-page_img/vann.jpg';
import soft from './home-page_img/meg.jpg';
import chandelier from './home-page_img/lus.jpg';
import office from './home-page_img/of.jpg';
import profile from './home-page_img/prof.jpg';
import design from './home-page_img/bez.jpg';
import './home-page.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <>
        <CardGroup>
        <Card>
            <Nav.Link href="/bath"><Card.Img variant="top" src={bath} /></Nav.Link>
            <Card.Body>
            <Card.Title>Туалет, ванна</Card.Title>
            </Card.Body>
        </Card>
        <Card>
            <Nav.Link href="/soft"><Card.Img variant="top" src={soft} /></Nav.Link>
            <Card.Body>
            <Card.Title>Мягкая мебель</Card.Title>
            </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
        <Card>
            <Nav.Link href="/office"><Card.Img variant="top" src={office} /></Nav.Link>
            <Card.Body>
            <Card.Title>Офисная мебель</Card.Title>
            </Card.Body>
        </Card>
        <Card>
            <Nav.Link href="/design"><Card.Img variant="top" src={design} /></Nav.Link>
            <Card.Body>
            <Card.Title>Дизайнерская мебель</Card.Title>
            </Card.Body>
        </Card>
        </CardGroup> 
        </>
    )
}

/*const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2343,
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    }
]

export const HomePage = () => {
    return (
        <>
            <div className="home-page">
                { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
            </div>
        </>
    )
}*/
