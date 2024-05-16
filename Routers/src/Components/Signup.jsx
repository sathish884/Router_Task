import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {

    const navigate = useNavigate()

    const handleRouter = () => {
        navigate('/')
    }
    return (
        <>
            <div className='registeration-body'>
                <div className="card" style={{ width: "50%" }} >
                    <div className="card-header">
                        <h5 className='p-3 text-center'>Registeration of Course</h5>
                    </div>
                    <div className="card-body">
                        <form className='p-3'>
                            <div className="row mb-3">
                                <div className="col">
                                    <label className='form-label' htmlFor="name">Name</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="row mb-3"> <div className="col">
                                <label className='form-label' htmlFor="password">Password</label>
                                <input type="password" className='form-control' />
                            </div></div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className='form-control' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <button className='btn btn-primary' onClick={handleRouter} style={{ width: "100%" }}>Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Signup