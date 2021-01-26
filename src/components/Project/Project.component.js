import { render } from '@testing-library/react';
import React from 'react';
import './Project.styles.scss';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    toggleVisibility = () => {
        this.setState((prevState) => {
            return ({ isClicked: !prevState.isClicked })
        })
    }

    autoScroll = () => {
        if (!this.state.isClicked) {
            console.log(this.props.project.hrefTarget)
            // document.getElementById("burger-desc").scrollIntoView({ block: "center" });
            setTimeout(() => {
                document.getElementById(this.props.project.hrefTarget).scrollIntoView({ block: "center" });
            }, 100)
        } return
    }

    render() {
        const { title, imageUrl, summary, tech, liveLink, classProp, hrefTarget } = this.props.project;

        return (
            <div onClick={this.toggleVisibility} className={`project ${this.state.isClicked ? "project-margin" : null}`}>
                <h3 className="project-title">{title}</h3>
                <img onClick={() => this.autoScroll()} className={`project-image ${classProp}`} src={imageUrl} alt="blahhh" />
                <div id={hrefTarget} className={`project-info-container ${this.state.isClicked ? null : "hidden"}`}>
                    <p className="project-summary">{summary}</p>
                    <p className="tech-used">Technologies used: {(tech.map(t => t))}</p>
                    <div className="project-links">
                        <p><a href={liveLink} rel="noreferrer" target="_blank">LIVE DEMO</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;