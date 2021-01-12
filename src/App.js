
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';
// import { ReactComponent as Cloud } from './components/Cloud/cloud.svg';
import Menu from './components/MobileMenu/Menu';
import ProjectsContiner from './components/ProjectsContainer/ProjectsContainer.component';
import WaterDrop from './components/WaterDrop.component';
import Waterfall from './components/Waterfall.component';
function App() {
  return (
    <div className="App">
      <Header />
      <Waterfall />
      <main className="main">
        <ProjectsContiner />
      </main>
    </div>
  );
}

export default App;
