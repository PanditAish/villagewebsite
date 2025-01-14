import React from "react";
import './assets/style/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";

const App = () => {   
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/contact" element={<Contact />}/>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App
