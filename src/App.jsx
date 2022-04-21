import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import Prediction from './pages/Prediction';
import './App.css';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        {/* <div className='main-container'> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
        {/* </div> */}
      </GlobalProvider>
    </>
  );
}

export default App;
