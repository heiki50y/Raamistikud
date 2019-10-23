import React from 'react'
import logo from './logo.svg';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} className="footer__logo" alt="logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                    <ul className="footer__list">
                        <li><Link className="footer__item" to="/react-app">Avaleht</Link></li>
                        <li><Link className="footer__item" to="/todo">To do</Link></li>
                        <li><Link className="footer__item" to="/naited">Näited</Link></li>
                        <li><Link className="footer__item" to="/materjalid">Materjalid</Link></li>
                        <li><Link className="footer__item" to="/game">Mäng</Link></li>
                        <li><Link className="footer__item" to="/tagasiside">Tagasiside</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Copyright &copy; Heiki Kotsar
                    </p>
                </div>
            </div>
        </footer>
    )
}

