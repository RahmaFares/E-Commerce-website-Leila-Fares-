import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/News" />
        <Route path="/Contact" />

      </Routes>
    </Router>


  )

};

export default App;
