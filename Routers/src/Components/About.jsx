import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './About.css';
import courseData from '../data.json';

function About() {

    const [aboutCourse, setAboutCourse] = useState(courseData.aboutCourseData)

    // used to access the current location object, 
    const location = useLocation();

    // Access the data passed from the previous route
    const getID = location.state.data;
    // console.log("idss", data);

    return (
        <>
            <div className="about-page">
                {aboutCourse.map((item, index) => (
                    item.id === getID ? (
                        <div key={item.id}>
                            <nav className='pt-5 ps-5' aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About - {item.id}</li>
                                </ol>
                            </nav>
                            <h3 className='ps-5 pb-3' style={{ color: "red" }}>{item.courseName}</h3>
                            <div className="row">
                                <div className="col-sm-12 col-lg-6 ps-5 about-img">
                                    <img className='course-logo' src={item.img} alt="" />
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <div className="body-content">
                                        <p>{item.description}</p>
                                        <p><b> Course Duration</b> : {item.duration}</p>
                                        <p className='d-flex justify-content-between'><span><b>From : </b>{item.fromDate} - <b>To</b> : {item.toDate}</span>  <span className='pe-3'><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></span></p>
                                        <div className='course-details mt-5'>
                                            <p><b> Course Details :</b></p>
                                            {item.coverCourses ? (item.coverCourses.map((covercourse, index) => (
                                                <ul className='course-list' key={index}>
                                                    <li className='course-list-item'>{covercourse}</li>
                                                </ul>
                                            ))) : null}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
        </>
    )
}

export default About