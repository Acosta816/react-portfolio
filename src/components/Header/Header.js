import React from 'react';
import './Header.styles.scss';

import Avatar from '../Avatar/Avatar';
import Menu from '../MobileMenu/Menu';
import WaterDrop from '../WaterDrop/WaterDrop.component';
import Waterfall from '../Ocean/Waterfall.component';

const Header = () => {
    return (
        <div id="Header" className="header">
            <WaterDrop />
            <h2 className="hi">Hi</h2>
            {            false === true ? <h2 className="im">...I'm </h2> : null}
            <Avatar />
            <h1 className="david">DAVID</h1>
            <h1 className="acosta">ACOSTA</h1>
            <p className="intro">
                Full stack developer.
                Love people, technology, and nature.
                <br />
                Come take a dive with me and <span className="sea-word">sea</span> what we can accomplish
                together.
</p>
        </div >
    )
}

export default Header;
