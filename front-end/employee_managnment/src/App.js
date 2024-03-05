import logo from './logo.svg';
import './App.css';
import AA from './Component/Login_page'
import Home from './Component/Home';
import Addemployee from './Component/addemployee';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Component/navBar';

function App() {
  return (
  <>
  <NavBar/>
  <Routes>
    <Route path='/login' exact element={<AA/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/addemployee' element={<Addemployee/>}/>
   


  </Routes>
  </>
  );
}

export default App;
