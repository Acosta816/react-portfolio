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

    render() {
        const { title, imageUrl, summary, tech, liveLink } = this.props.project;

        return (
            <div onClick={this.toggleVisibility} className="project">
                <h3 className="project-title">{title}</h3>
                <img className="project-image" src={imageUrl} alt="blahhh" />
                <div className={`project-info-container ${this.state.isClicked ? null : "hidden"}`}>
                    <p className="project-summary">{summary}</p>
                    <p>Technologies used: {(tech.map(t => t))}</p>
                    <div className="project-links">
                        <p><a href={liveLink} rel="noreferrer" target="_blank">LIVE DEMO</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;