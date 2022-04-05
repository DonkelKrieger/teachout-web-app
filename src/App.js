import './App.css';
import Links from "./components/Links.js";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/authContext';


function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/crud" element={<Links />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;