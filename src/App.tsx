import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
 import Instituto from './instituto/instituto';
 import Ofertas from './ofertas/ofertas';
 import Carrera from './Carrera/Carrera';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/instituto" element={<Instituto />} />
         <Route path="/ofertas" element={<Ofertas />} />
         <Route path="/carrera" element={<Carrera />} />
     
        {/* Aquí puedes agregar más rutas según lo necesites */}
      </Routes>
    </Router>
  );
};

export default App;