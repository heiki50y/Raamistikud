import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
               <img src={logo} className="logo" alt="logo" />
                <nav>
                    <ul className="nav__list">
                        <li><Link className="nav__item" to="/react-app">Avaleht</Link></li>
                        <li><Link className="nav__item" to="/todo">To do</Link></li>
                        <li><Link className="nav__item" to="/naited">Näited</Link></li>
                        <li><Link className="nav__item" to="/materjalid">Materjalid</Link></li>
                        <li><Link className="nav__item" to="/game">Mäng</Link></li>
                        <li><Link className="nav__item" to="/tagasiside">Tagasiside</Link></li>
                    </ul>
                </nav>
        </header>
    )
}



