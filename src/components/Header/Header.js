import React from 'react';
import './Header.styles.scss';

import Avatar from '../Avatar/Avatar';
import Menu from '../MobileMenu/Menu';
import WaterDrop from '../WaterDrop/WaterDrop.component';
import Waterfall from '../Ocean/Waterfall.component';

const Header = () => {
    return (
        <div className="header">
            <WaterDrop />
            <h2 className="hi">Hi</h2>
            <h2 className="im">...I'm </h2>
            <Avatar />
            <h1 className="david">DAVID</h1>
            <h1 className="acosta">ACOSTA</h1>
            <p className="intro">
                Welcome to my Portfolio. I am a full stack developer. I love people, technology, and nature. Take a dive with me and sea what we can accomplish together.
</p>
        </div >
    )
}

export default Header;
