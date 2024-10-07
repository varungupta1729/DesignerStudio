import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Canva from './canvas/Canva';
import Sidebar from './components/Sidebar';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <main className='h-screen w-full transition-all ease-in'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customizer" element={<Customizer />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
