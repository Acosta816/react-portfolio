import React from 'react'
import './Avatar.styles.scss';
import avatar2 from '../../Assets/images/avatar2a.png';
import boneLeg from '../../Assets/images/Bone_Leg2a.png';
//Just a component that contains 
const Avatar = () => {
    return (
        <>
            <div className="avatar-container">
                <img src={avatar2} className="avatar" alt='avatar kid on moon' />
                <img src={boneLeg} className="thread" alt='leg' />
            </div>
        </>


    )
}

export default Avatar;
