import React from 'react'
import Project from '../Project/Project.component';
import './ProjectsContainer.styles.scss';

const ProjectsContiner = () => {
    const projectData = [
        {
            title: "Build-A-Burger (WEB APP)",
            classProp: "burger-app",
            hrefTarget: "burger-desc",
            liveLink: "https://react-my-burger-3f060.web.app/",
            tech: ["React", "Redux", "Firebase"],
            summary: "A scalable React-based Custom Burger Building Application featuring the ability to add/remove ingredients, place order with user info and send to a realtime database hosted on Google's Firebase. The app itself is also hosted on Firebase!",
            imageUrl: "https://i.ibb.co/vsP0wr8/react-my-burger-3f060-web-app-i-Phone-6-7-8.png"
        },
        {
            title: "Crown Clothing (Ecommerce)",
            classProp: "crown-clothing",
            hrefTarget: "crown-desc",
            liveLink: "https://crown-clothing-live-ltd.herokuapp.com/",
            tech: ["React", "Redux", "Firebase", "StripeAPI"],
            summary: "Eccomerce Clothing SPA React website boasting a fully operating cart and payout featuring the stripeAPI.",
            imageUrl: "https://i.ibb.co/BwcH3Gm/crown-clothing-live-ltd-herokuapp-com-i-Pad.png"
        },
        {
            title: "VANILLA JS VIRTUAL PET FOX (WebApp Game)",
            classProp: "fox-game",
            hrefTarget: "fox-desc",
            liveLink: "https://fox-game-vanillajs.firebaseapp.com/",
            tech: ["HTML", "CSS", "JAVASCRIPT", "PARCEL"],
            summary: 'A "Tamagotchi"-inspired virtual pet simulator made entirely in Vanilla JS and hosted on Google Firebase!',
            imageUrl: "https://i.ibb.co/KxhpchC/larger-fox-game-vanillajs-firebaseapp-com-i-Pad-idle.jpg"
        }
    ]

    return (
        <div id="projects" className='projects-container'>
            <h2 className="project-container-title">PR<span className="project-gear">⚙</span>JECTS</h2>
            <hr />
            <p className="category-summary">
                Various projects I've completed both alone and on a team using technologies such as React, Redux, MongoDB, Mongoose, Express, Firebase, HTML, CSS, Sass, Javascript, JQuery etc...
            </p>
            {
                projectData.map((proj, index) => <Project project={proj} key={index} />)
            }
        </div>
    )
}

export default ProjectsContiner;
