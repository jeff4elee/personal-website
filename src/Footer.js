import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Footer.css'

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/NemProject">
                            <img src={require('./icons/icon-github-w.png')} alt="" className="footer-icon" />
                            <span>Github</span>
                        </a>
                    </div>

                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Knowledge Tree</h1>
                <h2>Learn anything you want, anytime you want</h2>
                <br />

                <div className="social-container">

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/NemProject">
                            <img src={require('./icons/icon-twitter-w.png')} alt="" className="footer-icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/NemProject">
                            <img src={require('./icons/icon-facebook-w.png')} alt="" className="footer-icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/NemProject">
                            <img src={require('./icons/icon-linkedin-w.png')} alt="" className="footer-icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="mailto:605industries@gmail.com">
                            <img src={require('./icons/icon-email-w.png')} alt="" className="footer-icon" />
                        </a>

                </div>
            </footer>
        );
    }
}