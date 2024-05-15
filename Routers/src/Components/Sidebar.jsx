import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {


    return (
        <>
            <div className="sidebar-menus">
                <ul className='list-menu'>
                    <li className='list-tems'><Link className='list-item-content' to={'/'}><i class="bi bi-house-fill"></i>&nbsp;Courses</Link></li>
                    <li className='list-tems'><Link className='list-item-content' to={'/about'}><i class="bi bi-credit-card-2-front-fill"></i>&nbsp;About</Link></li>
                    <li className='list-tems'><Link className='list-item-content' to={'/service'}><i class="bi bi-database-fill"></i>&nbsp;Service</Link></li>
                    <li className='list-tems'><Link className='list-item-content' to={'/contact'}><i class="bi bi-telephone-fill"></i>&nbsp;Contact</Link></li>
                    <li className='list-tems'><Link className='list-item-content' to={'/projects'}><i class="bi bi-collection-fill"></i>&nbsp;Projects</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar