import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Listings from "./pages/Listings"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
    <header>
        <Link to="/">Home</Link>
      <nav>
        <NavLink 
            to="/projects"
            className={({isActive}) => isActive ? "active-link" : null}
        >
              Projects
        </NavLink>
        <NavLink 
            to="/listings"
            className={({isActive}) => isActive ? "active-link" : null}
        >
            Listings
        </NavLink>
        
        <NavLink 
            to="/contact"
            className={({isActive}) => isActive ? "active-link" : null}
        >
            Contact
        </NavLink>
      </nav>
    </header>
    <div className="bar"></div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/listings' element={<Listings />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
