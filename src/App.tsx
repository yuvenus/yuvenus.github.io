import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/nav'
import { Home } from './pages/home'
import { About } from './pages/about';

function App() {
  return (
    <div className="flex gap-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App
