import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Service from '../Components/Service';
import Projects from '../Components/Projects';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/service' element={<Service />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
            </Routes>
        </>
    )
}

export default Routers