import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { data } from './../data.json'

function Courses() {

    const navigate = useNavigate();

    const handleRouterNavigate = () => {
        navigate('/about')
    }

    return (
        <>
            <div className="container-fluid" id="contentBody">

                <div className="row header-content">
                    <div className="col p-5">
                        <h2 className='text-center text-white'>Course Details</h2>
                    </div>
                </div>

                <div className="row card-row">
                    {data.map((item, index) => (
                        <div className="col-12 p-5" key={index}>
                            <div className="card">
                                <div className="card-body d-flex">
                                    <div className=''>
                                        <img className='card-img' src={item.img} alt="" />
                                    </div>
                                    <div className='d-flex'>
                                        <div className='p-3' style={{ width: "70%" }}>
                                            <p>Classroom based teaching</p>
                                            <h4 className='pb-3'><Link to={'/about'} style={{ color: "red" }}>{item.courseName}</Link></h4>
                                            <p className='descriptions'>{item.description}</p>
                                            <p>on <b>Mondays</b> and <b>Thursdays</b></p>
                                            <button type='button' className='btn btn-danger'>Sign up</button>
                                            <button type='button' className='btn btn-outline-danger ms-3' onClick={handleRouterNavigate}>Read More</button>
                                        </div>
                                        <div className='mt-5 p-3' style={{ width: "30%", textAlign: "right" }}>
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
            </div>

        </>
    )
}

export default Courses