import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Distribuidores from './components/distribuidores/Distribuidores';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Producto from './components/productos/Producto';
import Home from './components/sections/Home';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Producto />} />
        <Route path="/distribuidores" element={<Distribuidores />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
