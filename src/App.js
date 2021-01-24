
import React from 'react';
import './App.scss';
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';
// import { ReactComponent as Cloud } from './components/Cloud/cloud.svg';
import Menu from './components/MobileMenu/Menu';
import ProjectsContiner from './components/ProjectsContainer/ProjectsContainer.component';
import WaterDrop from './components/WaterDrop/WaterDrop.component';
import Waterfall from './components/Ocean/Waterfall.component';
import AboutMe from './components/About Me/AboutMe.component';
import Bubbles from './components/Bubbles/Bubbles.component';
import NewBubbles from './components/otherBubbles/NewBubbles';
import { Contact } from './components/Contact/Contact.component';
import WideNav from './WideNav/WideNav.component';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      appClicked: false,
    }
  }

  updateAppState = (isMenuOpen) => {
    console.log(isMenuOpen);
    this.setState((ps) =>
      ({ menuIsOpen: isMenuOpen })
    )
  }

  appIsClicked = () => {
    if (this.state.menuIsOpen && (this.state.appClicked === false)) {
      this.setState({ appClicked: true })
    }
    else {
      return
    }
  }

  onInputChange = () => {
    this.setState((prevState) =>
      ({ menuIsOpen: !prevState.menuIsOpen }),
      () => console.log(this.state.menuIsOpen)
    )

  }

  skipAnimation = () => {
    document.getElementById("Main").classList.add("skip"); //speedup main content transition
    document.getElementById("WideNav").classList.add("skip"); //speedup main content transition
    document.getElementById("drop-container").classList.add("skip"); //hide water drop
    document.getElementById("Header").classList.add("skip");
    // document.getElementById("avatar-container").classList.add("skip");
    document.getElementById("ocean").classList.replace("ocean-transition", "speedup-ocean"); //speedup waves avatar-container
    document.getElementById("pumpkin").classList.add("hide");


  }

  render() {
    return (
      <div id="home" onClick={this.appIsClicked} className="App">
        <button id="pumpkin" className="pumpkin" onClick={() => this.skipAnimation()}>>>skip</button>
        <WideNav />
        <Menu onInputChange={this.onInputChange} menuIsOpen={this.state.menuIsOpen} />
        <Header />
        <Waterfall />
        <main id="Main" className="main" >
          <ProjectsContiner />
          <AboutMe />
          <Contact />
        </main>
        {this.state.menuIsOpen ? <NewBubbles numberOfBubbles={14} /> : null}
      </div>
    );
  }

}

export default App;
