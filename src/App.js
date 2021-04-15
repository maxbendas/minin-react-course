import React, {useState} from 'react'
import './App.scss'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from "./Cars/CarDetail/CarDetail";

const App = () => {
    const [login, setLogin] = useState(false)
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cars">Cars</NavLink>
                    </li>
                </ul>
            </nav>
            <hr/>
            <div style={{textAlign: 'center'}}>
                <h1>Is logged in {login ? 'TRUE' : 'FALSE'}</h1>
                <button onClick={() => setLogin(true)}>Login</button>
            </div>
            <hr/>
            <Switch>
                <Route path="/" exact render={() => <h1>Home Page</h1>}/>
                {login && <Route path="/about" component={About}/>}
                <Route path="/cars/:name" component={CarDetail}/>
                <Route path="/cars" component={Cars}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    );
}

export default App
