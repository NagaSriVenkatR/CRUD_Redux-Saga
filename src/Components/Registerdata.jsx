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
import { deleteEntry, editEntry, setEditing} from '../Redux/Action/Action';
function Registerdata() {
  const submittedData = useSelector((state) => state.submittedData);
  console.log(submittedData);
  useEffect(() => {
    console.log("Submitted form Data:", submittedData);
    // console.log("Form Data Submitted Successfully : " , submitFormData);
  }, [submittedData]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (index) => {
    console.log("Submitted data:", submittedData);
    const dataToEdit = submittedData.find((data) => data.index === index);

    if (!dataToEdit) {
      console.error("No data found for ID:", index);
      return; // Exit if no match
    }

    dispatch(editEntry(dataToEdit)); // Dispatch with id
    dispatch(setEditing(true));
    navigate(`/form?edit=${index}`); // Navigate with id
  };

  const handleDelete = (index) => {
    dispatch(deleteEntry(index));
  };
  const handleNewData = () => {
    navigate("/form"); // Navigate to the form for adding new data
  };
  return (
    <div className="container">
      <div className="m-2 row col-sm-12 parent-register">
        <div className="d-flex justify-content-between register-heading p-3">
          <div className=''>
            <img className="pay-imager" height={50} src={PAY} alt="" />
          </div>
          <div className=''>
            <h1 className="text-white ">Registered Employees</h1>
          </div>
          <div className=''>
            <span
              className="create px-3 fs-5 btn btn-light text-end"
              onClick={handleNewData}
            >
              <IoPersonAdd className="me-2 " />
              New Employee
            </span>
          </div>
        </div>
        <div className="col-md-12 register-table table-responsive">
          <div className="register-table-head d-flex justify-content-between">
            <span className="dash-div px-2 pt-4">
              <img src={dash} alt="" />
              <p className="dash icon">DASHBOARD</p>
            </span>
            <span className="pt-4">
              <img src={user} alt="" />
              <p className='icon'>USERS</p>
            </span>
            <span className="pt-4">
              <img src={flag} alt="" />
              <p className='icon'>PRIORITY</p>
            </span>
            <span className="pt-4">
              <img className="short" src={short} alt="" />
              <p className='icon'>COLLECTIONS</p>
            </span>
            <span className="pt-4">
              <img src={fold} alt="" />
              <p className='icon'>ARCHIEVED</p>
            </span>
            <span className="pt-4">
              <img src={DEL} alt="" />
              <p className='icon'>DELETED</p>
            </span>
            <span className="pt-4">
              <img src={GRO} alt="" />
              <p className='icon'>TRENDS</p>
            </span>
            <span className="pt-4">
              <img src={clip} alt="" />
              <p className='icon'>TASKS</p>
            </span>
            <span className="pt-4">
              <img src={filt} alt="" />
              <p className='icon'>FILTERS</p>
            </span>
            <span className="pe-4 pt-4">
              <img src={Stats} alt="" />
              <p className='icon'>STATS</p>
            </span>
          </div>
          <div className="register-table p-lg-5 p-md-3 col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr className="">
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
                {submittedData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
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
                        className="btn btn-danger ms-2"
                        onClick={() => handleDelete(data.id)}
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
