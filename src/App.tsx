import { useState } from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Raid from './pages/Raid';
import Sponsors from './pages/Sponsors';
import './styles/globals.scss'

function App() {

  const [active, setActive] = useState(0)

  return (
    <Router>
      <Navbar active={active} />
      <Switch>
        <Route path="/" element={<Home changeActive={setActive} />} />
        <Route path="/a-propos" element={<About changeActive={setActive} />} />
        <Route path="/raid" element={<Raid changeActive={setActive} />} />
        <Route path="/sponsors" element={<Sponsors changeActive={setActive} />} />
        <Route path="/contact" element={<Contact changeActive={setActive} />} />
        <Route path="/gallerie" element={<Gallery />} />
        <Route path="*" element={<NotFound changeActive={setActive} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
