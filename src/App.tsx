// import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';

function App() {

  return (
    <>

    <NavBar/>
    <Hero/>
    <Welcome/>
    </>
  )
}

export default App
