import { Suspense, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

import * as gameServices from './services/gameService';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Edit } from './components/Edit/Edit';
import { GameDetails } from './components/GameDetails/GameDetails';
import { Catalog } from './components/Catalog/Catalog';

import { Register } from './components/Register/Register';
import './App.css';

//const Register = lazy(() => import('./components/Register/Register'));

//import('./components/Register/Register');

function App() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    const addComment = (gameId, comment) => {
        //Ако се променя референцията винаги се създава НОВА РЕФЕРЕНЦИЯ
        setGames(state => {
            const game = state.find(x => x._id == gameId);
            const comments = game.comments || [];
            comments.push(comment);

            return [
                ...state.filter(x => x._id !== gameId),
                { ...game, comments: comments },
            ];
        })
    };

    const addGameHandler = (gameData) => {
        setGames(state => [
            ...state,
            {
                ...gameData,
                _id: uniqid(),
            },
        ]);

        navigate('/catalog');
    };

    useEffect(() => {
        gameServices.getAll()
            .then(result => {
                setGames(result)
            });
    }, []);

    return (
        <div id="box">
            <Header />
            {/* Main Content */}
            <main id="main-content"></main>
            {/*Home Page*/}
            <Routes>
                <Route path='/' element={<Home games={games} />} />
                {/* Login Page ( Only for Guest users ) */}
                <Route path='/login' element={<Login />} />
                {/* Register Page ( Only for Guest users ) */}
                <Route path='/register' element={
                    <Suspense fallback={<span>Loading...</span>}>
                        <Register />
                    </Suspense>
                } />
                {/* Create Page ( Only for logged-in users ) */}
                <Route path='/create' element={<CreateGame addGameHandler={addGameHandler} />} />
                {/* Edit Page ( Only for the creator )*/}
                <Route path='/edit' element={<Edit />} />
                {/*Details Page*/}
                <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
                {/* Catalogue */}
                <Route path='/catalog' element={<Catalog games={games} />} />
            </Routes>
        </div>
    );
}

export default App;
