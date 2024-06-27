import React from 'react';
import './App.css';
import Home from './paginas/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
);
}
export default App;