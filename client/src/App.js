import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './components/Admin';
import { Candidate } from './components/Candidate';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home />} />
             <Route path="/candidate" element={<Candidate />} />
             <Route path="/admin" element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
