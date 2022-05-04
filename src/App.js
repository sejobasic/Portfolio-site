// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styling/home.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Cursor from './components/Cursor'
import Photo from './components/Photo'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <div className="noise">
        <div className="App">
          <Cursor />
          <Navbar />
          <Home />
          <Projects />
          <Photo />
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
