import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Routes, Route } from "react-router-dom"
import Meals from './components/Meals'
import Instructors from './components/Instructor';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='meals' element={<Meals/>}> </Route>
        <Route path='instructors' element={<Instructors/>}> </Route>
        <Route path='services' element={<Services/>}> </Route>
        <Route path='booking' element={<Booking/>}> </Route>
        <Route path='about' element={<About/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
