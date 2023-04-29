import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/News" />
        <Route path="/Contact" />
      </Routes>
      <Footer />
    </Router>

  )

};

export default App;
