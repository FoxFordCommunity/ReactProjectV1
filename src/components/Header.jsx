import React, {useState} from 'react';
import logo from "../img/logo.svg";
import {NavLink} from "react-router-dom";
function Header(props) {
    const [admin, setAdmin] = useState(1)
    const [activePage, setactivePage] = useState(0)

    const onSelectPage = (variation) => {
        setactivePage(variation);
    }

    return (
        <div>
            <header id="open" className="header">
                <div id="close" className="header__container">
                    <div className="header__logo">
                        <a href="/user/главная авторизация/index.html"><img src={logo} alt="logo"/></a>
                        <a href="/user/главная авторизация/index.html">COMMUNITY</a>
                    </div>
                    <div className="header__menu menu">
                        <nav className="menu__body">

                            <ul className="menu__list">
                                <NavLink to='/'>
                                    <li className="menu__item"><p
                                        className={activePage === 0 ? "menu__link_select":"menu__link"}
                                    onClick={() => onSelectPage(0)}>ГЛАВНАЯ</p></li>
                                </NavLink>
                                <NavLink to='/Editor'>
                                    <li className="menu__item"><p
                                        className={activePage === 1 ? "menu__link_select":"menu__link"}
                                        onClick={() => onSelectPage(1)}>РЕДАКТОР</p></li>
                                </NavLink>
                                <NavLink to='/database'>
                                    <li className="menu__item"><p
                                        className={activePage === 2 ? "menu__link_select":"menu__link"}
                                        onClick={() => onSelectPage(2)}>БАЗА ДАННЫХ</p></li>
                                </NavLink>
                                <NavLink to='/News'>
                                <li className="menu__item"><p
                                    className={activePage === 3 ? "menu__link_select":"menu__link"}
                                    onClick={() => onSelectPage(3)}>НОВОСТИ</p></li>
                                </NavLink>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__themes">
                        <button
                            onClick={() => props.tfunc(0)}
                            className='themebuttonone'>Темная
                        </button>
                        <button
                            className='themebuttontwo'
                            onClick={() => props.tfunc(1)}
                        >Светлая
                        </button>

                    </div>
                    <div className="header__button">
                        <a href="/user/авторизация/login.html" className="button login">ВХОД</a>
                        <a href="/user/авторизация/register.html" className="button register">РЕГИСТРАЦИЯ</a>
                        <a href="/user/авторизация/login.html" className="button authorization">АВТОРИЗАЦИЯ</a>
                        <a href="#open" className="icon-menu"><span></span></a>
                        <a href="#close" className="close-icon-menu"></a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;