import React, { Component } from 'react';
import './css/Footer.css'

export default class Banner extends Component {

    render() {
        return (
            <footer>
                <div className="social-container">
                        
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeff4elee?tab=repositories">
                            <img src={require('./icons/icon-github-w.png')} alt="" className="footer-icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jeffrey.lee.7146557">
                            <img src={require('./icons/icon-facebook-w.png')} alt="" className="footer-icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeffrey-lee-0a5933123/">
                            <img src={require('./icons/icon-linkedin-w.png')} alt="" className="footer-icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="mailto:jeff4elee@gmail.com">
                            <img src={require('./icons/icon-email-w.png')} alt="" className="footer-icon" />
                        </a>

                </div>
            </footer>
        );
    }
}