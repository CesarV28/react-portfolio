import { useState } from 'react';
import { 
    AiOutlineAppstore, 
    AiOutlineHome, 
    AiOutlineUser, 
    AiOutlineFileText, 
    AiOutlineSend,
    AiOutlineClose
} from 'react-icons/ai'

import { BiImage, BiBriefcaseAlt2 } from 'react-icons/bi';

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
                                <AiOutlineHome className='nav__icon'/>
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
                                <AiOutlineUser className='nav__icon'/>
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
                                <AiOutlineFileText className='nav__icon'/>
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
                                <BiBriefcaseAlt2 className='nav__icon'/>
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
                                <BiImage className='nav__icon'/>
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
                                <AiOutlineSend className='nav__icon'/>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <AiOutlineClose
                        className='nav__close'
                        onClick={showMenu}
                    />
                </div>

                <div 
                    className="nav__toggle"
                    onClick={showMenu}
                >
                    <AiOutlineAppstore className='nav__icon'/>
                </div>
            </nav>
        </header>
    )
}
