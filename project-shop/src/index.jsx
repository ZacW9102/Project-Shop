import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
      <Link to="/">Home</Link>
      <nav>
        <Link tp="/projects">Projects</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
