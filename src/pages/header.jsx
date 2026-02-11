import React from 'react';
import './header.css';
import logo from '../assets/logo.svg';
import Navicon from './navitem';

const Header = () => {
    return (
        <>
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <Navicon/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <Navicon/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <Navicon/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            <Navicon/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
      </>);
}
 
export default Header;