import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from '../Components/About';
import Courses from '../Components/Courses';
import Signup from '../Components/Signup';

const Routers = () => {
    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path='/' element={<Courses />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/registeration' element={<Signup />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Routers