import { useState } from 'react';
import './header.css';

export const Header = () => {

    /* ======== Toggle menu ======== */
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')

    const showMenu = () => {
        setToggle(!toggle);
    }

    const onActive = (active) => {
        setActiveNav(active)
    }

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="#home" className="nav__logo">Cesar</a>

                <div className={`${ toggle ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <ul className="nav__list">
                        {/* li item */}
                        <li className="nav__item">
                            <a 
                                href="#home" 
                                className={`${ activeNav === '#home' && 'active__link'} nav__link`}
                                onClick={ () => onActive('#home')}
                            >
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        {/* li item */}
                        <li className="nav__item">
                            <a 
                                href="#about" 
                                className={`${ activeNav === '#about' && 'active__link'} nav__link`}
                                onClick={ () => onActive('#about')}
                            >
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        {/* li item */}
                        <li className="nav__item">
                            <a 
                                href="#skills" 
                                className={`${ activeNav === '#skills' && 'active__link'} nav__link`}
                                onClick={ () => onActive('#skills')}
                            >
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        {/* li item */}
                        <li className="nav__item">
                            <a 
                                href="#services" 
                                className={`${ activeNav === '#services' && 'active__link'} nav__link`}
                                onClick={ () => onActive('#services')}
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Services
                            </a>
                        </li>
                        {/* li item */}
                        <li className="nav__item">
                            <a 
                                href="#portfolio" 
                                className={`${ activeNav === '#portfolio' && 'active__link'} nav__link`}
                                onClick={ () => onActive('#portfolio')}
                            >
                                <i className="uil uil-scenery nav__icon"></i>
                                Porfolio
                            </a>
                        </li>
                        {/* li item */}
                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                className={`${ activeNav === '#contact' && 'active__link'} nav__link`}
                                onClick={ () => onActive('#contact')}
                            >
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i 
                        className='uil uil-times nav__close'
                        onClick={showMenu}
                    ></i>
                </div>

                <div 
                    className="nav__toggle"
                    onClick={showMenu}
                >
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}
