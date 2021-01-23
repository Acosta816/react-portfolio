import React from 'react'
import './Menu.styles.scss';

const Menu = ({ onInputChange, menuIsOpen }) => (
    <nav role="navigation">
        <div id="menuToggle">
            <input onChange={() => onInputChange()} type="checkbox" checked={menuIsOpen} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                {menuIsOpen ? <div onClick={() => onInputChange()} className="modal"></div> : null}
                <a href="#home" onClick={() => onInputChange()}><li>HOME</li></a>
                <a href="#projects" onClick={() => onInputChange()}><li>PROJECTS</li></a>
                <a href="#about-me" onClick={() => onInputChange()}><li>ABOUT</li></a>
                <a href="#connect" onClick={() => onInputChange()}><li>CONTACT</li></a>
            </ul>
        </div>
    </nav>
);

export default Menu
