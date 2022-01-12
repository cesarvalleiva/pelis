import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import PeliProvider from './store/peliContext';
import Peliculas from './pages/Peliculas';
import Pelicula from './pages/Pelicula/Pelicula';

function App() {
  return (
    <Router>
      <PeliProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Peliculas />} />
          <Route path="/pelicula/:id" element={<Pelicula />} />
        </Routes>
      </PeliProvider>
    </Router>
  );
}

export default App;
