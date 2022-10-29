
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    major: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  };
  const navigate = useNavigate();

  const [savePersonState, setSavePersonState] = useState(initialState);

  const [formError, setformError] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeField = (event) => {
    const copyState = { ...savePersonState };
    copyState[event.target.name] = event.target.value;
    setSavePersonState(copyState);
  };
  // const onChangeField = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   let copyState = Object.assign(savePersonState);
  //   copyState[name] = value;
  //   setSavePersonState(copyState);
  // };
  const saveUserApi = (data) => {
    axios
      .post("http://localhost:8000/signups", data)
      .then(() => alert("user added"));
  };

  const onClicked = (e) => {
    console.log(savePersonState);

    const err = validate(savePersonState);
    setformError(err);
    //setformError(err);
    //  if(!err.password&&! err.email){
    // if (!err.fname && !err.lname && !err.confirmPassword && !err.password) {
    //   saveUserApi(savePersonState);
      navigate("/register_sucsess");
    // } else {
    //   setIsSubmit(false);
    // }
  };
  const validate = (value) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.fname) {
      error.fname = "first name is requried";
    }
    if (!value.lname) {
      error.lname = "last name is required";
    }
    if (!value.email) {
      error.email = "email is requried";
    } else if (!regex.test(value.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!value.password) {
      error.password = "password is requried";
    } else if (value.password.length < 4) {
      error.password = "password must be more than 4 characters!";
    } else if (value.password.length > 10) {
      error.password = "password must be more than 4 characters!";
    }
    // } if (!value.confirmPassword) {
    //   error.confirmPassword = "password is requried";
    // }
    else if (value.password !== value.confirmPassword) {
      // error.password="password should be the same"
      error.confirmPassword = "password don't match";
    } else if (
      value.password.length > 10 &&
      value.confirmPassword.length > 10
    ) {
      error.password = "password can't exceed more than 10 characters!";
    }
    return error;
  };

  return (
    <div className="container">
      <br></br>
      <div className="sigup">
        <div className="holder">
          <h2 className="login">Registration Form</h2>
            <p class="textpar">Fields marked with asterisks (<span class="errorMessage">*</span>) are required</p>
            <div class="card-body">
          <div className="form-row">
            <div className="form-group col-md-6 inputToleft">
              <label>FirstName<span class="errorMessage">*</span></label>
              <input
                type="text"
                className="form-control"
                name="fname"
                placeholder="First Name"
                defaultValue={savePersonState.fname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.fname}</p>
            </div>
            <div className="form-group col-md-6 inputToleft">
              <label>Last Name<span class="errorMessage">*</span></label>
              <input
                type="text"
                className="form-control"
                name="lname"
                placeholder="Last Name"
                defaultValue={savePersonState.lname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.lname}</p>
            </div>

            <div className="form-group col-md-6 inputToleft">
              <label>Email<span class="errorMessage">*</span></label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                defaultValue={savePersonState.email}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.email}</p>
            </div>
            <div className="form-group col-md-6 inputToleft">
              <label> Role<span class="errorMessage">*</span> </label>
              <br></br>
              <select
                defaultValue={"Student"}
                onChange={(event) => onChangeField(event)}
              >
                <option  value="JOB_SEEKER" selected>
                  Job_Seeker
                </option>
                <option value="ROLE_EMPLOYER">Employer</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
            </div>
            <div className="form-group col-md-6 inputToleft">
              <label>Password<span class="errorMessage">*</span></label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                defaultValue={savePersonState.password}
                onChange={(event) => onChangeField(event)}
              ></input>
              {/* {formError&&<div className="validation">{formError}</div>} */}
              <p className="validation">{formError.password}</p>
            </div>
            <div className="form-group col-md-6 inputToleft">
              <label>Confirm Password<span class="errorMessage">*</span></label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Password"
                defaultValue={savePersonState.confirmPassword}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.confirmPassword}</p>
              {/* {formError&&<div className="validation">{formError}</div>} */}
            </div>
          </div>

          <br></br>
          <div className="input-group mb 3">
            <div className="form-group col-md-6  ">
              <label>Employer<span class="errorMessage">*</span></label>
              <input
                type="text"
                className="form-control"
                name="major"
                placeholder="Department"
                //defaultValue={savePersonState.fname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.major}</p>
            </div>

            <br></br>

            <div className="form-group col-md-6 ">
              <label>Street<span class="errorMessage">*</span></label>
              <input
                type="text"
                className="form-control"
                name="street"
                placeholder="street"
                //defaultValue={savePersonState.fname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.street}</p>
            </div>
            <br></br>

            <div className="form-group col-md-6 inputToleft">
              <label>City<span class="errorMessage">*</span></label>
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="city"
                //defaultValue={savePersonState.fname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.city}</p>
            </div>
            <br></br>

            
            <div className="col-md-6 inputToleft">
              <label for="inputState" className="form-label">
                State<span class="errorMessage">*</span>
              </label>
              <select
              
               id="inputState" 
               className="form-select"
               name="state"
               onChange={(event) => onChangeField(event)}
               >
                <option selected>Choose State</option>
                <option>...</option>
              </select>
            </div>
            <br></br>

            <div className="form-group col-md-6">
              <label>Zip Code<span class="errorMessage">*</span></label>
              <input
                type="text"
                className="form-control"
                name="zipCode"
                placeholder="zipCode"
                //defaultValue={savePersonState.fname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p className="validation">{formError.zipCode}</p>
            </div>
          </div>
          <br></br>
          <button className="btn btn-primary" onClick={onClicked}>
            SignUp
          </button>
          <div className="value">
           <label style={{'font-size':'22px'}}> Already have an account? SignIn</label>
            <Link to="/log_in"  style={{'font-size':'23px'}}>here</Link>
          </div>
        </div>
        <br></br>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
