import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import React, { useState } from 'react';
import './assets/css/styles.scss';
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import MentionsLegales from "./Components/MentionsLegales";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:project' element={<Project />} />
                    <Route path='/mentions-legales' element={<MentionsLegales />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
