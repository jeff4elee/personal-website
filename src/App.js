import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import NavigationBar from './Navigation.js'
import AboutPage from './pages/AboutPage.js'
import ExperiencePage from './pages/ExperiencePage.js'
import ContactPage from './pages/ContactPage.js'
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

        <div className="App">



          <br />
          <br />

          <ScrollableAnchor id={'home'}>
            <Banner />
          </ScrollableAnchor>
          <br />

          <div className="App-body">

            <ScrollableAnchor id={'about'}>
              <div>
                <br />

                <h1>About</h1>
              </div>
            </ScrollableAnchor>
            <AboutPage />

            <br />
            <hr />
            <br />

            <ScrollableAnchor id={'experience'}>
              <div>
                <br />

                <h1>Experience</h1>
              </div>
            </ScrollableAnchor>
            <ExperiencePage />

            <br />
            <hr />
            <br />

            <ScrollableAnchor id={'contact'}>
              <div>
                <br />
                <h1>Contact Info</h1>
              </div>
            </ScrollableAnchor>
            <ContactPage />

            <br />
            <br />

          </div>


        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
