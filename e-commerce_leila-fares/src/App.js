import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import NewsPage from './Pages/NewsPage';
import ContactUs from './Pages/ContactUs';
import Register from './Pages/Register';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/news" element={<NewsPage />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
