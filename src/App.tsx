import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './styles/globals.scss'

function App() {
  return (
    <Router>
      <Navbar active={0} />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
