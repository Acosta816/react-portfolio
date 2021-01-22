import React from 'react';
import './AboutMe.styles.scss';


const AboutMe = () => {
    return (
        <div id="about-me" className="about-me-container">
            <h2 className="about-me-title">ABOÜT</h2>
            <hr />
            <p className="about-me">
                Hello, thank you for visiting my site. My name is David.
                I am a devoted programmer who specializes in making modern webapps.
                My love for technology and creation bagan when I
                was 7 and discovered <a rel="noreferrer" target="_blank" href="https://www.adobe.com/products/animate.html#scroll"><span className="adobe">Adobe flash</span></a>.
                I also love people so i ultimately became an EMT where I learned a great
                deal about humanity.
            </p>
            <p className="about-me">
                I eventually decided I was going to pursue my love for technology and
                creation so I taught myself how to code.
                First with C# and unity and then later in college.
                I decided I needed more modern structure to my learning if I was to ever
                turn this into a career so I took a formal 9 month bootcamp at thinkful's fullstack academy.
                I also love Udemy and use it everyday to stay up to date with syntax.
            </p>
            <p className="about-me">
                I dream of one day combining my love for people and technology to write
                software that can help the disabled communicate easier with the rest of the world.
                I am still actively learning and am currently deeply interested in the world of
                gamified learning as well as other forms of alternative learning. I feel it will lead us
                to a new paradigm and I look forward to being a part of that.
            </p>
        </div>
    );
};

export default AboutMe;