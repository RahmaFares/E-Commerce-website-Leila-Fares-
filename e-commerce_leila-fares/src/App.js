import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from '../src/Pages/Home';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/News" />
        <Route path="/Contact" />
      </Routes>
      <Home />
      <Footer />
    </Router>

  )

};

export default App;
