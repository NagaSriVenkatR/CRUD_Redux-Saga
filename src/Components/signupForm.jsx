import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import PAY from '../Assets/quickpay-logo.png'
import gender from '../Assets/male-and-female.png'
import "./signup.css"
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
function SignupForm() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="d-flex col-md-10 m-5 py-2 parent">
          <div className="col-md-5 pay p-5">
            <div className="mt-5">
              <img src={PAY} alt="" />
            </div>
            <div className="mt-5">
              <p className="lorem text-center">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit.aperiam in autem perferendis. <br />
                Dolores dicta nulla modi qui odit numquam voluptate <br />{" "}
                itaque magni maiores, amet dicta excepturi error.
              </p>
            </div>
            <div className="mb-5 mt-5">
              <button className="btn btn-danger" type="button">
                Get Started
              </button>
            </div>
            <div>
              <span className="circle3">fghfgha</span>
              <span className="circle2">fghfgha</span>
              <span className="circle1">sdfvgaa</span>
            </div>
          </div>
          <div className="col-md-7 signup p-3">
            <div className="text-start text-white ps-5 ms-5 ">
              <h3 className="ms-5">Register</h3>
              <p className="ms-4">
                Create your account It's free and only take a minute
              </p>
            </div>
            <div>
              <form action="">
                <div className="mb-4 name-div">
                  <span className=''>
                    <FaRegUserCircle className="text-white fs-3 name-icon" />
                  </span>
                  <input
                    className="name ms-2"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Full Name"
                  />
                </div>
                <div className='mb-4 name-div'>
                  <BsFillTelephoneFill className="text-white fs-3" />
                  <input
                    className='ms-2'
                    type="tel"
                    name="phonenumber"
                    id=""
                    placeholder="Phone Number"
                  />
                </div>
                <div className='mb-4 name-div'>
                  <MdEmail className='text-white fs-3'/>
                  <input className='ms-2' type="email" name="email" id="" placeholder='Email' />
                </div>
                <div className='mb-4 name-div'>
                  <FaLocationDot className='text-white fs-3'/>
                  <input className='ms-2' type="text" name="location" id="" placeholder='Address' />
                </div>
                <div className='mb-4 name-div'>
                  <img className='gender' src={gender} alt="" />
                  <select name="gender" id="">
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className='mb-4 name-div'></div>
                <div className='mb-4 name-div'></div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm
