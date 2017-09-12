import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import NavigationBar from './Navigation.js'
import SearchBar from './Search.js'
import AboutPage from './pages/AboutPage.js'
import RoadmapPage from './pages/RoadmapPage.js'
import MissionPage from './pages/MissionPage.js'
import TechnicalPage from './pages/TechnicalPage.js'
import Banner from './Banner.js'
import Footer from './Footer.js'
import './css/App.css';

configureAnchors({ offset: -60 })

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolling: false
    }

    this._handleScroll = this._handleScroll.bind(this);
  }

  _handleScroll(event) {

    if (!this.state.isScrolling) {
      this.setState({
        isScrolling: true
      });
    }

    if (this._timeout) { //if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        isScrolling: false
      });
    }, 500);

  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }

  render() {
    return (
      <div>

        <div>
          <NavigationBar
            isScrolling={this.state.isScrolling}
          />
        </div>

        <br />
        <br />
        <div>
          <SearchBar />
        </div>

        <div className="App">

          <ScrollableAnchor id={'home'}>
            <Banner />
          </ScrollableAnchor>
          <br />

          <div className="App-body">

            <ScrollableAnchor id={'mission'}>
              <div><h1>Mission</h1></div>
            </ScrollableAnchor>
            <MissionPage />

            <ScrollableAnchor id={'roadmap'}>
              <div><h1>Roadmap</h1></div>
            </ScrollableAnchor>
            <RoadmapPage />

            <ScrollableAnchor id={'about'}>
              <div><h1>About</h1></div>
            </ScrollableAnchor>
            <AboutPage />

            <ScrollableAnchor id={'technical'}>
              <div><h1>Technical</h1></div>
            </ScrollableAnchor>
            <TechnicalPage />

          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
