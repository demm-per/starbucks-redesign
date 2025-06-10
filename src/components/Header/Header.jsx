import React from 'react'
import StarbucksLogo from '../StarbucksLogo/StarbucksLogo'

const Header = ({handleCheckboxChange,nav,containerNav,btnCheckBox}) => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='logo__container'>
                    <a href="#" className='logo__link'>
                        <StarbucksLogo/>
                    </a>
                </div>
                <div className='nav__container' ref={containerNav}>
                    <nav className='nav' ref={nav}>
                        <ul className='items'>
                            <li className='item'>
                                <a href="#" className='item__link'>
                                    <span className='container__icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon__header icon--alternative-color"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 12l.01 0" /><path d="M13 12l2 0" /><path d="M9 16l.01 0" /><path d="M13 16l2 0" /></svg>
                                        Menú
                                    </span>
                                    <span className='item__under-Line'></span>
                                </a>
                            </li>
                            <li className='item'>
                                <a href="#" className='item__link'>
                                    <span className='container__icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon__header icon--alternative-color"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 11h14v-3h-14z" /><path d="M17.5 11l-1.5 10h-8l-1.5 -10" /><path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><path d="M15 5v-2" /></svg>
                                        Rewards
                                    </span>
                                    <span className='item__under-Line'></span>
                                </a>
                            </li>
                            <li className='item item--division'>
                                <span className='item__line-division'></span>
                            </li>
                            <li className='item'>
                                <a href="#" className='item__link'>
                                    <span className='container__icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon__header icon--alternative-color"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                        Localizar Tienda
                                    </span>
                                    <span className='item__under-Line'></span>
                                </a>
                            </li>
                        </ul>
                        <ul className='items'>
                            <li className='item item--list-buttons'>
                                <a href='#' className='btn btn--bg-wh'>Ingresar</a>
                                <a href='#' className='btn btn--bg-gr'>Únete</a>
                            </li>
                        </ul>
                    </nav>
                    <label className="burger" htmlFor="burger">
                        <input type="checkbox" id="burger" ref={btnCheckBox} onChange={handleCheckboxChange} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

            </div>
        </header>
    )
}

export default Header
