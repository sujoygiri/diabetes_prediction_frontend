import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import Navbar from './components/Navbar';
import Prediction from './pages/Prediction';
import Bmr from './pages/utilities/Bmr';
import Bmi from './pages/utilities/Bmi';
import Ideal_weight from './pages/utilities/IdealWeight';
import LeanBodyMass from './pages/utilities/LeanBodyMass';

function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/ideal-weight" element={<Ideal_weight />} />
          <Route path="/lean-body-mass" element={<LeanBodyMass />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
