import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
 import Instituto from './pages/instituto';
 import Ofertas from './pages/ofertas';
 import Carrera from './pages/Carrera';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
         <Route path="/quienes-somos" element={<Instituto />} />
         <Route path="/ofertas-academica" element={<Ofertas />} />
         <Route path="/carrera" element={<Carrera />} />
     
        {/* Aquí puedes agregar más rutas según lo necesites */}
      </Routes>
    </Router>
  );
};

export default App;