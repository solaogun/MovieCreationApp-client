import logo from './logo.svg';
import './App.css';
import Topbar from './components/nav/topbar'
import SideMenu from './components/sideMenu.jsx/sideMenu'
import { SliderData } from './components/sliderData/sliderData'
import Feed from './components/feed/feed'
import { BrowserRouter as Router } from 'react-router-dom'
import Body from './components/body/auth/body'

function App() {
  return (
    <Router>
      <div className="App">
        <Body />
        {/* <Topbar />
        <div className='side-menu'>
          <SideMenu />
          <Feed slides={SliderData} /> */}

      </div>

    </Router>

  );
}

export default App;
