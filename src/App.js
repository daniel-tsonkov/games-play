import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Edit } from './components/Edit/Edit';
import { Details } from './components/Details/Details';
import { Catalogue } from './components/Catalogue/Catalogue';

function App() {
    return (
        <div id="box">
            <Header />
            {/* Main Content */}
            <main id="main-content"></main>
            {/*Home Page*/}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>

            {/* Login Page ( Only for Guest users ) */}
            {/* <Login /> */}
            {/* Register Page ( Only for Guest users ) */}
            {/* <Register /> */}
            {/* Create Page ( Only for logged-in users ) */}
            {/* <Create /> */}
            {/* Edit Page ( Only for the creator )*/}
            {/* <Edit /> */}
            {/*Details Page*/}
            {/* <Details /> */}
            {/* Catalogue */}
            {/* <Catalogue /> */}
        </div>
    );
}

export default App;
