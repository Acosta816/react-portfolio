import React from 'react'
import './Contact.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faLinkedin, faLinkedinIn, fa } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
    return (
        <footer id="connect" className="contact-container">
            <h2 className="contact-title">Let's Connect</h2>
            <hr />
            <div className="link-container">
                <h3>Github</h3>
                <div class="down-below">
                    <div class="contact">
                        <a href="mailto:acosta816@gmail.com" title="Email me" rel="me" target="_blank">acosta816@gmail.com</a>
                    </div>

                    <ul class="links">
                        <li><a href="https://github.com/acosta816" title="@acosta816 on GitHub" rel="me" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="https://twitter.com/cr0ybot" title="@cr0ybot on twitter" rel="me" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://plus.google.com/+CoryHughart/posts" rel="me" title="+Cory Hughart on Google+" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="https://www.facebook.com/cory.hughart" rel="me" title="Cory Hughart on Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/coryhughart" rel="me" title="Cory Hughart's resume on LinkedIn" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    </ul>

                    <div class="info">
                        <p>© 2021 David Acosta</p>
                    </div>

                    <button type="button" class="to-top"><i class="fa fa-arrow-up"></i></button>
                </div>

            </div>
        </footer>
    )
}
