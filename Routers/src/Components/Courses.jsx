import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import data from '../data.json';
import './Course.css';

function Courses() {

    // Initialize the useNavigate hook for navigation
    const navigate = useNavigate();

    // Initialize courseData state with initial value from data.courseData
    const [courseData, setCourseData] = useState(data.courseData)

    // Function to handle navigation to the '/about' route and pass id as data using state in the location object
    const handleRouterNavigate = (id) => {
        // console.log("ggggg", getId);
        navigate('/about', { state: { data: id } });
    }

    // Function to handle navigation to the '/registeration' route
    const registerationCourse = () => {
        navigate('/registeration')
    }

    return (
        <>



            <main>
                <div className="row" style={{ backgroundColor: "rgb(49, 46, 46)", width: "100%" }}>
                    <div className="col p-5">
                        <h2 className='text-center text-white'>Course Details</h2>
                        <p className='text-white text-center'>If your course offering will be publicized through an online course management platform with a catalog or brochure.</p>
                    </div>
                </div>

                <div className="row card-row">
                    {courseData.map((item, index) => (
                        <div className="col-12 p-5" key={item.id}>
                            <div className="card">
                                <div className="card-body d-flex">
                                    <div className='card-img-container'>
                                        <img className='card-img' src={item.img} alt="" />
                                    </div>
                                    <div className='d-flex content-body'>
                                        <div className='p-3' style={{ width: "70%" }}>
                                            <p>Classroom based teaching</p>
                                            <h4 className='pb-3'><a className='course-title' onClick={() => handleRouterNavigate(item.id)}>{item.courseName}</a></h4>
                                            <p className='descriptions'>{item.description}</p>
                                            <p>on <b>{item.day}</b></p>
                                            <button type='button' className='btn btn-danger' onClick={registerationCourse}>Apply</button>
                                            <button type='button' className='btn btn-outline-danger ms-3' onClick={() => handleRouterNavigate(item.id)}>Read More</button>
                                        </div>
                                        <div className='mt-5 p-3 price-card'>
                                            <h4>{item.price}</h4>
                                            <div className='calenders'>
                                                <p><b>{item.from} - {item.to}</b></p>
                                                <p>{item.time}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </main>
        </>
    )
}

export default Courses