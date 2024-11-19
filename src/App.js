import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Details } from './components/Details/Details';
import { Catalogue } from './components/Catalogue/Catalogue';

function App() {
    return (
        <div id="box">
            <Header />
            {/* Main Content */}
            <main id="main-content"></main>
            {/*Home Page*/}
            <Home />
            {/* Login Page ( Only for Guest users ) */}
            {/* <section id="login-page" className="auth">
                <form id="login">
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Sokka@gmail.com"
                        />
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" defaultValue="Login" />
                        <p className="field">
                            <span>
                                If you don't have profile click <a href="#">here</a>
                            </span>
                        </p>
                    </div>
                </form>
            </section> */}
            {/* Register Page ( Only for Guest users ) */}
            {/* <section id="register-page" className="content auth">
                <form id="register">
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Register</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="maria@email.com"
                        />
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                        <input className="btn submit" type="submit" defaultValue="Register" />
                        <p className="field">
                            <span>
                                If you already have profile click <a href="#">here</a>
                            </span>
                        </p>
                    </div>
                </form>
            </section> */}
            {/* Create Page ( Only for logged-in users ) */}
            {/* <section id="create-page" className="auth">
                <form id="create">
                    <div className="container">
                        <h1>Create Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter game title..."
                        />
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter game category..."
                        />
                        <label htmlFor="levels">MaxLevel:</label>
                        <input
                            type="number"
                            id="maxLevel"
                            name="maxLevel"
                            min={1}
                            placeholder={1}
                        />
                        <label htmlFor="game-img">Image:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                        />
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={""} />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Create Game"
                        />
                    </div>
                </form>
            </section> */}
            {/* Edit Page ( Only for the creator )*/}
            {/* <section id="edit-page" className="auth">
                <form id="edit">
                    <div className="container">
                        <h1>Edit Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" defaultValue="" />
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" defaultValue="" />
                        <label htmlFor="levels">MaxLevel:</label>
                        <input
                            type="number"
                            id="maxLevel"
                            name="maxLevel"
                            min={1}
                            defaultValue=""
                        />
                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={""} />
                        <input className="btn submit" type="submit" defaultValue="Edit Game" />
                    </div>
                </form>
            </section> */}
            {/*Details Page*/}
            {/* <Details /> */}
            {/* Catalogue */}
            {/* <Catalogue /> */}
        </div>
    );
}

export default App;
