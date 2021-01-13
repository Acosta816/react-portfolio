import React from 'react'
import Project from '../Project/Project.component';
import './ProjectsContainer.styles.scss';

const ProjectsContiner = () => {
    const projectData = [
        {
            title: "Build-A-Burger",
            tech: ["React", "Redux", "Firebase"],
            summary: "A scalable React-based Custom Burger Building Application featuring the ability to add/remove ingredients, place order with user info and send to a realtime database hosted on Google's Firebase. The app itself is also hosted on Firebase!",
            imageUrl: "https://lh3.googleusercontent.com/2GWdesnyYhXa4o6DIkG6Izsfv9zutZwzkQfO75d06_cvFilHxLCPISKknpmaBNRTwcGDt2op4w5zMoTSRZt-iB5LaxEdLCiYUT0TPJAGRn7BNXycBSOqAd9bmmSartFXvPV0u6-xj1fJWLqUb7crszbtyqwe9T6Ge6UHseHFVIgHddmz8mcNH6oqSskZ-OmevVjeNLB6Nv-Os6zSM_Go7a1GW-TLvxMc9xoNA18ZmYRLk7ysZLFeBL2s1jN3ZF7Z7JSSnENNrM_LMgdoHab53n_5nYCrWuaz-Kk8Ea_EkHn9WbhtInoniS8Ih5v0RCf2ekPOP20WuR7-Qz8_22zE9pwdvaUKHKfBdr8E8ixYVurGz1oUPeNcaJgt5CFry5RVhp17uZBBd9naQoAZlwcJ79EDpILmF9_Owc3HN2aXZCX2JHNfLXqFGOVPjdTP4MLUSci-yW1psrVObwe4EiZ88-Sx9coCE0Jfen5tQqzmRTgin2LXZGaYRILzPEFi63zynZNJbDrMmZrllKVuqHngHX_TctUPIUb-bva6YyP-gS8q8H29-9bAfBAbzHjlddmeGSstw6DGeKqcDPQfs1o1jtA52TIJzaCZSsbsautS_j_slG8bbjVKNVlHlkfar3XhtJOhtrbYR-VFjiaBQ8ACm86yN3ZcJh2JVEALmrgWtm4O6FhtOKaF4tcDjlYbaw=w461-h937-no?authuser=0"
        }
    ]

    return (
        <div className='projects-container'>
            <h2 className="title">PROJECTS</h2>
            <hr />
            <p className="category-summary">
                Various projects I've completed both alone and on a team using technologies such as React, Redux, MongoDB, Mongoose, Express, Firebase, HTML, CSS, Sass, Javascript, JQuery etc...
            </p>
            {
                projectData.map(proj => <Project project={proj} />)
            }
        </div>
    )
}

export default ProjectsContiner;
