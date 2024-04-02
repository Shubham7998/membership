import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Home from './Components/Home';
import Settings from './Components/Settings';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element = {<Home />}>Home</Route>
        <Route path='/about' element = {<About />}>About</Route>
        <Route path='/settings' element = {<Settings />}>Settings</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
