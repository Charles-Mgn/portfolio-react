import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import React, { useState } from 'react';
import './assets/css/styles.scss';
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:project' element={<Project />} />
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default App
