import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoutes from './PageRoutes/HomeRoutes';

function App() {
  return (
    <BrowserRouter >
      <HomeRoutes />
    </BrowserRouter>
  );
}

export default App;
