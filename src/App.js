
import React from 'react';
import './App.css';
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

  render() {
    return (
      <div onClick={this.appIsClicked} className="App">
        <Menu onInputChange={this.onInputChange} menuIsOpen={this.state.menuIsOpen} />
        <Header />
        <Waterfall />
        <main className="main">
          <ProjectsContiner />
          <AboutMe />
        </main>
        {this.state.menuIsOpen ? <NewBubbles numberOfBubbles={14} /> : null}
      </div>
    );
  }

}

export default App;
