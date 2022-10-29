import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const RegisterSucess = () => {
  const navigate = useNavigate();

  // const onclicked=()=>{
  //     navigate()
  // }
  return (
    <>
    <br></br>
    <br></br>
    <div class="container">
    
        <h2>You are Successfully added Thank you fro Registration!</h2>
     
      <br></br>
      <div className="decor">
        <Link to="/log_in" className="btn btn-primary"> click here</Link>
        <label style={{'font-size':'25px'}}> to SignIn.....</label>
      </div>
      </div>
      </>
    
    
  );
};

export default RegisterSucess;
