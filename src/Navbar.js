import React from 'react'
import { Link } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './allcss.css'


function Navbar(){
    return(
        <div className="my-nav" >
            <div className="row ">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <h2>React Meals</h2>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Link  to="/body">Home</Link>
                    <Link to="/orders">Order</Link>
                    <Link to="/contactus">Contact Us</Link>
                </div>
            </div>
        </div>
    )
     
}

export default Navbar