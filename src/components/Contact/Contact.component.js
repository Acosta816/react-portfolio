import React from 'react'
import './Contact.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faLinkedin, faLinkedinIn, fa, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleUp, faArrowUp, faCoffee } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
    return (
        <footer id="connect" className="contact-container">
            <h2 className="contact-title">Let's Connect</h2>
            <hr />
            <div className="links-container">
                <a href="mailto:acosta816@gmail.com" className="contact-email" title="Email me" rel="noreferrer" target="_blank">davidacosta.dev@gmail.com</a>
                <ul className="links">
                    <li>
                        <a href="https://github.com/acosta816" title="@acosta816 on GitHub" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon className="fa github" icon={faGithubAlt} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-acosta-aab06b182/" rel="noreferrer" title="David Acosta's resume on LinkedIn" target="_blank">
                            <FontAwesomeIcon className="fa linked-in" icon={faLinkedinIn} />
                        </a>
                    </li>
                </ul>

                <div className="info">
                    <p>© 2021 David Acosta</p>
                </div>

                <div className="up-arrow-container">
                    <a href="#home">
                        <FontAwesomeIcon className="up-arrow" icon={faArrowCircleUp} />
                    </a>
                </div>



            </div>
        </footer>
    )
}
