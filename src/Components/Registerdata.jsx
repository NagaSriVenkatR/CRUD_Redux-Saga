import React, { useEffect } from 'react'
import { FaUserEdit } from 'react-icons/fa';
import {  IoPersonAdd } from 'react-icons/io5';
import { TiUserDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PAY from '../Assets/quickpay-logoo.png';
import short from '../Assets/shortlisted-logo.png'; 
import fold from '../Assets/folder.png'
import DEL from '../Assets/delete.png'
import GRO from '../Assets/growth.png'
import clip from '../Assets/clipboard.png'
import filt from '../Assets/filter.png'
import Stats from '../Assets/statistics.png'
import dash from '../Assets/speedometer .png'
import user from '../Assets/group.png'
import flag from '../Assets/red-flag.png'
import './registerdata.css'
import { deleteEntry, editEntry, setEditing } from '../Redux/Action/Action';


function Registerdata() {
  const submittedData = useSelector((state) => state.submittedData);
  console.log(submittedData);
  useEffect(() => {
    console.log("Updated Submitted Data:", submittedData);
  }, [submittedData]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (id) => {
    const dataToEdit = submittedData.find((data) => data.id === id);

    if (!dataToEdit) {
      console.error("No data found for ID:", id);
      return; // Exit if no match
    }

    dispatch(editEntry(id, dataToEdit)); // Dispatch with id
    dispatch(setEditing(true));
    navigate(`/form?edit=${id}`); // Navigate with id
  };

  const handleDelete = (index) => {
    dispatch(deleteEntry(index));
  };
  const handleNewData = () => {
    navigate("/form"); // Navigate to the form for adding new data
  };
  return (
    <div className="container">
      <div className="m-2 col-md parent-register">
        <div className="d-flex justify-content-between register-heading">
          <img className="pay-image m-3" height={50} src={PAY} alt="" />
          <h1 className="text-white m-3">Registered Employees</h1>
          <span
            className="create m-3 px-3 fs-5 btn btn-light text-end"
            onClick={handleNewData}
          >
            <IoPersonAdd className="me-2 " />
            New Employee
          </span>
        </div>
        <div className="register-table">
          <div className="register-table-head d-flex justify-content-between">
            <span className='dash-div px-2 pt-4'>
              <img src={dash} alt="" />
              <p className='dash'>DASHBOARD</p>
            </span>
            <span className='pt-4'>
              <img src={user} alt="" />
              <p>USERS</p>
            </span>
            <span className='pt-4'>
              <img src={flag} alt="" />
              <p>PRIORITY</p>
            </span>
            <span className='pt-4'>
              <img className="short" src={short} alt="" />
              <p>COLLECTIONS</p>
            </span>
            <span className='pt-4'>
              <img src={fold} alt="" />
              <p>ARCHIEVED</p>
            </span>
            <span className='pt-4'>
              <img src={DEL} alt="" />
              <p>DELETED</p>
            </span>
            <span className='pt-4'>
              <img src={GRO} alt="" />
              <p>TRENDS</p>
            </span>
            <span className='pt-4'>
              <img src={clip} alt="" />
              <p>TASKS</p>
            </span>
            <span className='pt-4'>
              <img src={filt} alt="" />
              <p>FILTERS</p>
            </span>
            <span className='pe-4 pt-4'>
              <img src={Stats} alt="" />
              <p>STATS</p>
            </span>
          </div>
          <div className="register-table p-5">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="">
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Phonenumber</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Location</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={data.id}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.location}</td>
                    <td>{data.gender}</td>
                    <td className="d-flex">
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit(data.id)}
                      >
                        <FaUserEdit />
                      </button>
                      <button
                        className="btn btn-warning ms-2"
                        onClick={() => handleDelete(index)}
                      >
                        <TiUserDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerdata
