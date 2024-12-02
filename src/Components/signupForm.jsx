import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from '../Assets/reset-password.png'
import PAY from '../Assets/quickpay-logo.png'
import gender from '../Assets/male-and-female.png'
import lock from '../Assets/lock.png'
import "./signup.css"
import { FaFacebookSquare, FaRegUserCircle } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { setError, submitFormData, updateForm} from '../Redux/Action/Action';
import { useNavigate } from 'react-router-dom';
function SignupForm() {
    const isEditing = useSelector((state) => state.isEditing); 
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.error);
    const navigate = useNavigate();
    const formData = useSelector((state) => state.formData); 
    const submittedData = useSelector((state) => state.submittedData);
    useEffect(
      () => {
        console.log("Updated submittedData from Redux:", submittedData);
        console.log("form Data :", submitFormData);
      },
      [submittedData],
      // submitFormData
    );
    let emailPattern =
      /^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-zA-Z]+).([a-zA-Z]{2,20})$/;
    let upperCasePattern = /[A-Z]/;
    let lowerCasePattern = /[a-z]/;
    let numberPattern = /[0-9]/;
    let specialCharacterPattern = /[~!@#%&()$^_?]/;
    let minlengthCharacterPattern = /^.{8,16}$/;
    let phonenumberPattern = /^([0-9]{10})$/;
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateForm(name, value));
    };
    const handleBlur = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "name":
          if (!value.trim()) {
            dispatch(setError("name", "Name is required"));
          } else {
            dispatch(setError("name", ""));
          }
          break;
        case "email":
          if (!formData.email) {
            dispatch(setError("email", "email is required"));
          } else {
            if (!emailPattern.test(value)) {
              dispatch(setError("email", "Enter a valid email address"));
            } else {
              dispatch(setError("email", ""));
            }
          }
          break;
        case "password":
          if (!formData.password) {
            dispatch(setError("password", "Password is required"));
          } else {
            if (!minlengthCharacterPattern.test(value)) {
              dispatch(
                setError(
                  "password",
                  "Password must be at least 8 characters required"
                )
              );
            } else if (!lowerCasePattern.test(value)) {
              dispatch(
                setError(
                  "password",
                  "Password must be at least 1 lowercase required"
                )
              );
            } else if (!numberPattern.test(value)) {
              dispatch(
                setError(
                  "password",
                  "Password must be at least 1 number required"
                )
              );
            } else if (!specialCharacterPattern.test(value)) {
              dispatch(
                setError(
                  "password",
                  "Password must be at least 1 special character required"
                )
              );
            } else if (!upperCasePattern.test(value)) {
              dispatch(
                setError(
                  "password",
                  "Password must be at least 1 uppercase required"
                )
              );
            } else {
              dispatch(setError("password", ""));
            }
          }
          break;
        case "confirmPassword":
          if (formData.password === "") {
            dispatch(
              setError("confirmPassword", "Confirm password is required")
            );
          } else {
            if (formData.password !== formData.confirmPassword) {
              dispatch(
                setError(
                  "confirmPassword",
                  "Confirm password do not match with password"
                )
              );
            } else {
              dispatch(setError("confirmPassword", ""));
            }
          }
          break;
        case "phoneNumber":
          if (!formData.phoneNumber) {
            dispatch(setError("phoneNumber", "Phonenumber is required"));
          } else {
            if (!phonenumberPattern.test(value)) {
              dispatch(
                setError("phoneNumber", "Enter a valid 10-digit phone number")
              );
            } else {
              dispatch(setError("phoneNumber", ""));
            }
          }
          break;
        case "location":
          if (!value.trim()) {
            dispatch(setError("location", "Location is required"));
          }
          break;
        case "gender":
          if (!value.trim()) {
            dispatch(setError("gender", "gender is required"));
          }
          break;
        default:
          break;
      }
    };
    const validateForm = () => {
      let isValid = true;
      if (formData.name === "") {
        dispatch(setError("name", "Name is required"));
        isValid = false;
      } else {
        dispatch(setError("name", ""));
      }
      if (formData.phoneNumber === "") {
        dispatch(setError("phoneNumber", "Phonenumber is required"));
        isValid = false;
      } else {
        if (!phonenumberPattern.test(formData.phoneNumber)) {
          dispatch(
            setError("phoneNumber", "Enter a valid 10-digit phone number")
          );
          isValid = false;
        } else {
          dispatch(setError("phoneNumber", ""));
        }
      }
      if (formData.email === "") {
        dispatch(setError("email", "Email is required"));
        isValid = false;
      } else {
        if (!emailPattern.test(formData.email)) {
          dispatch(setError("email", "Enter a valid email address"));
          isValid = false;
        } else {
          dispatch(setError("email", ""));
        }
      }
      if (formData.password === "") {
        dispatch(setError("password", "Password is required"));
        isValid = false;
      } else {
        if (!minlengthCharacterPattern.test(formData.password)) {
          dispatch(
            setError(
              "password",
              "Password must be at least 8 characters required"
            )
          );
          isValid = false;
        } else if (!lowerCasePattern.test(formData.password)) {
          dispatch(
            setError(
              "password",
              "Password must be at least 1 lowercase required"
            )
          );
          isValid = false;
        } else if (!numberPattern.test(formData.password)) {
          dispatch(
            setError("password", "Password must be at least 1 number required")
          );
          isValid = false;
        } else if (!specialCharacterPattern.test(formData.password)) {
          dispatch(
            setError(
              "password",
              "Password must be at least 1 special character required"
            )
          );
          isValid = false;
        } else if (!upperCasePattern.test(formData.password)) {
          dispatch(
            setError(
              "password",
              "Password must be at least 1 uppercase required"
            )
          );
          isValid = false;
        } else {
          dispatch(setError("password", ""));
        }
      }
      if (formData.confirmPassword === "") {
        dispatch(setError("confirmPassword", "Confirm Password is required"));
        isValid = false;
      } else {
        if (formData.password !== formData.confirmPassword) {
          dispatch(
            setError(
              "confirmPassword",
              "Confirm password do not match with password"
            )
          );
          isValid = false;
        } else {
          dispatch(setError("confirmPassword", ""));
        }
      }
      if (formData.location === "") {
        dispatch(setError("location", "Location is required"));
        isValid = false;
      } else {
        dispatch(setError("location", ""));
      }
      if (formData.gender === "") {
        dispatch(setError("gender", "Gender is required"));
        isValid = false;
      } else {
        dispatch(setError("gender", ""));
      }
      return isValid;
    };
    const buttonSignin = formData.isEditing ? "Update" : "Sign Up";
    console.log("isEditing:", isEditing);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("formData Id:", formData.id);
      console.log("isEditing:", formData.isEditing);
      console.log("formData before submit:", formData);
      if (validateForm()) {
        // dispatch(setIsSubmitting(true));
        if (formData.isEditing) {
          dispatch(submitFormData(formData));
          console.log(
            "Updating entry with ID:",
            formData.id,
            "Data:",
            formData
          );
        } else {
          dispatch(submitFormData(formData));
          console.log("Submitted Form Data: ", formData);
        }
        navigate("/table"); 
      }
      // else{
      //   dispatch(setIsSubmitting(false));
      // }
    };

    const handleReset = () => {
      dispatch(updateForm("name", ""));
      dispatch(updateForm("email", ""));
      dispatch(updateForm("password", ""));
      dispatch(updateForm("confirmPassword", ""));
      dispatch(updateForm("phoneNumber", ""));
      dispatch(updateForm("gender", ""));
      dispatch(updateForm("location", ""));
    };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="d-flex col-md-12 col-xxl-10 col-lg-12 mt-2 py-md-3 parent">
          <div className="col-md-5 pay p-xxl-5 d-none d-md-block">
            <div className="mt-5">
              <img className="pay-image" src={PAY} alt="" />
            </div>
            <div className="mt-5 d-none d-md-block">
              <p className="lorem text-center">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit.aperiam in autem perferendis. <br />
                Dolores dicta nulla modi qui odit numquam voluptate <br />
                itaque magni maiores, amet dicta excepturi error.
              </p>
            </div>
            <div className="mb-5 mt-5">
              <button className="btn btn-success" type="button">
                Get Started
              </button>
            </div>
            <div className="d-md-block d-none">
              <span className="circle3"></span>
              <span className="circle2"></span>
              <span className="circle1"></span>
            </div>
          </div>
          <div className="col-md-7 signup p-3">
            <div className="pay-div d-block d-md-none">
              <span className="pay-circle">
                <img className="pay-image" src={PAY} alt="" />
              </span>
            </div>
            <div className="text-start text-white ps-md-5 ms-md-5 register ">
              <h3 className="ms-md-5">Register</h3>
              <p className="ms-md-4">
                Create your account It's free and only take a minute
              </p>
            </div>
            <div>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 name-div">
                  <span className="">
                    <FaRegUserCircle className="text-white fs-3 name-icon" />
                  </span>
                  <input
                    className="name ms-md-2 fw-bold"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <p className="errors text-danger fw-bold">{errors.name}</p>
                </div>
                <div className="mb-3 name-div">
                  <BsFillTelephoneFill className="text-white fs-3" />
                  <input
                    className="ms-md-2 fw-bold"
                    type="tel"
                    name="phoneNumber"
                    id=""
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <p className="errors text-danger fw-bold">
                    {errors.phoneNumber}
                  </p>
                </div>
                <div className="mb-3 name-div">
                  <MdEmail className="text-white fs-3" />
                  <input
                    className="ms-md-2 fw-bold"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <p className="errors text-danger fw-bold">{errors.email}</p>
                </div>
                <div className="mb-3 name-div">
                  <FaLocationDot className="text-white fs-3" />
                  <input
                    className="ms-md-2 fw-bold"
                    type="text"
                    name="location"
                    id=""
                    placeholder="Address"
                    value={formData.location}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <p className="errors text-danger fw-bold">
                    {errors.location}
                  </p>
                </div>
                <div className="mb-3 name-div">
                  <img className="gender" src={gender} alt="" />
                  <select
                    className="ms-md-2 fw-bold"
                    name="gender"
                    id=""
                    value={formData.gender}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <p className="errors text-danger fw-bold">{errors.gender}</p>
                </div>
                <div className="mb-3 name-div">
                  <img src={lock} alt="" />
                  <input
                    className="ms-md-2 fw-bold"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <p className="errors text-danger fw-bold">
                    {errors.password}
                  </p>
                </div>
                <div className="mb-3 name-div">
                  <img src={Clock} alt="" />
                  <input
                    className="ms-md-2 fw-bold"
                    type="password"
                    name="confirmPassword"
                    id=""
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                  <p className="errors text-danger fw-bold">
                    {errors.confirmPassword}
                  </p>
                </div>
                <div className="">
                  <label className="check-container text-white">
                    I accept the terms of use and privacy policy
                    <input type="checkbox" placeholder="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="">
                  <p className="text-white member d-flex">
                    <span className="d-none d-md-block">
                      Already a member ?
                    </span>
                    <a className="text-white" href="none" target="_self">
                      Signin
                    </a>
                    <button
                      className="btn btn-success ms-lg-3 px-lg-3"
                      type="submit"
                      // disabled={isSubmitting}
                    >
                      {buttonSignin}
                    </button>
                    <button
                      className="btn btn-danger ms-lg-3 ms-md-2 px-lg-4"
                      type="button"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </p>
                </div>
                <div className="text-white text-center ">
                  <p className="ms-3 d-none d-lg-block">
                    _____________________or sign up with ______________________
                  </p>
                  <p className="d-lg-none d-block">
                    ___________or sign up with ___________
                  </p>
                  <p className="">
                    <FcGoogle className="me-2" />
                    <FaFacebookSquare className="me-2" />
                    <FaSquareXTwitter />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm
