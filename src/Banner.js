import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Banner.css';
import YouTube from 'react-youtube';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this._onReady = this._onReady.bind(this);
    }

    render() {

        const opts = {
            height: '300',
            width: '500',
            playerVars: { // https://developers.google.com/youtube/player_parameters 
                autoplay: 1
            }
        };

        return (
            <div className="banner">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Knowledge Tree</h1>
                <h2>Learn anything you want, anytime you want</h2>
                <br />
                <YouTube
                    videoId="vMYVmzXNDFc"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );

    }

    _onReady(event) {
        // access to player in all event handlers via event.target 
        event.target.pauseVideo();
    }

}