import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
     
        {/* Aquí puedes agregar más rutas según lo necesites */}
      </Routes>
    </Router>
  );
};

export default App;