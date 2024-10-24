import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Listings from "./pages/Listings"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/listings' element={<Listings />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
