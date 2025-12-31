import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoveLetter from './pages/LoveLetter';
import Promises from './pages/Promises';
import MusicToggle from './components/MusicToggle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <MusicToggle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/letter" element={<LoveLetter />} />
          <Route path="/promises" element={<Promises />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
