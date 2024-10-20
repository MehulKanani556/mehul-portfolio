import React from 'react'
import Background from './Component/Background'
import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add Bootstrap's JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/Home';
import About from './Component/About';
export default function App() {
  return (
    <div className='app'>
      <Header />
      <Background />
      <div className="content">
        {/* <Home /> */}
        <About />
      </div>
      {/* <Home /> */}
    </div>
  )
}
