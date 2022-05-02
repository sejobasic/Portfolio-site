// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Cursor from './components/Cursor'
import Design from './components/DesignIndex'
// import Photo from './Photo'
// import Contact from './Contact'

function App() {
  return (
    <div>
      <div className="noise">
        <div className="App">
          <Cursor />
          <Home />
          <Projects />
          <Design />
          {/* <Photo />
          <Contact /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
