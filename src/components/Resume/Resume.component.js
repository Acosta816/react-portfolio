import React from 'react'
import './Resume.component.styles.scss';



const Resume = () => {
    return (
        <div id="resume" className="resume ocean-transition">
            <svg className="resume-svg" viewBox="0 0 120 18">
                <defs>

                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                    <path id="wave-main"
                        d="
                        M 0,10 
                        C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 
                        v 28 
                        h -240 
                        z" />
                </defs>


                <a href="https://drive.google.com/file/d/1C3o0udqxVk_V7s-x4Oc6zMt6PFHl_pnu/view?usp=sharing" target="_blank">
                    <g className="topball">

                        <circle className="ball" cx="100" cy="8" r="4.5" stroke="none" strokeWidth="0" fill="red" />
                        { /*<rect width="15" height="6" x="94" y="7" fill="white" /> */}
                        <text className="resume-text" x="79.56%" y="30%" dominantBaseline="middle" strokeWidth="0" stroke="#000" fill="azure">Résumé</text>
                        <g className="arrow">
                            <polyline className="" points="108,8 110,6 112,8" fill="none" />
                            <polyline className="" points="110,6 110,10.5" fill="none" />
                        </g>

                    </g>
                </a>





                <use id="wave1" className="wave-main" xlinkHref="#wave-main" x="0" y="0" />


            </svg>
            <div className="resume-bottom-div" />
        </div>
    )
}

export default Resume;
