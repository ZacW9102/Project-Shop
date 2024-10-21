import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
