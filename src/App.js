import './App.css';
import Links from "./components/Links.js";
import Homepage from './pages/homepage';
import Login from './pages/login';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div> <Homepage/> </div>
        } />
        <Route path='/crud' element={
          <div> <Links/> </div>
        } />
        <Route path='/login' element={
          <div> <Login/> </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;