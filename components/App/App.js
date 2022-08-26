import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Lab from '../../pages/Lab';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div>

      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
        <br />
      </Router>
      <Footer />
    </div>
  );
}

export default App 