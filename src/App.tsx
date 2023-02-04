import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './styles/globals.scss'

function App() {

  return (
    <Router>
      <Navbar active={0} />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
