import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import Navbar from './components/Navbar';
import Prediction from './pages/Prediction';
import Bmr from './pages/utilities/Bmr';
import Bmi from './pages/utilities/Bmi';

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
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
