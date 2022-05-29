import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (

    <Router>
        <Navbar />
    
    <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/About' element= {<About />} />
        <Route path='/Contact' element= {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
