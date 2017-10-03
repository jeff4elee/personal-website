import React, { Component } from 'react';
import './css/Banner.css';
import YouTube from 'react-youtube';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this._onReady = this._onReady.bind(this);
    }

    render() {

        const opts = {
            height: '66%',
            width: '40%',
            playerVars: { // https://developers.google.com/youtube/player_parameters 
                autoplay: 0
            }
        };

        return (
            <div className="banner">
                <br />
                <h1>Jeffrey Lee</h1>
                <h2>UCSD Class of 2020</h2>
                <p>(Warning, the video below may be loud, and also not very serious)</p>
                <YouTube
                    videoId="vwrvbjBF7YQ"
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