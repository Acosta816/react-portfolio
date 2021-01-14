
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';
// import { ReactComponent as Cloud } from './components/Cloud/cloud.svg';
import Menu from './components/MobileMenu/Menu';
import ProjectsContiner from './components/ProjectsContainer/ProjectsContainer.component';
import WaterDrop from './components/WaterDrop/WaterDrop.component';
import Waterfall from './components/Ocean/Waterfall.component';
import AboutMe from './components/About Me/AboutMe.component';
function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Waterfall />
      <main className="main">
        <ProjectsContiner />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
