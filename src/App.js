// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projects from './Projects'
import Cursor from './Cursor'
// import Design from './Design'
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
          {/* <Design />
          <Photo />
          <Contact /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
