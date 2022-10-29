import React,{useState, useContext} from "react";
import { AllJobs } from "./JobDetails";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function AddJob() {
    const [newJobSate , setNewJob] = React.useState({userName:"",password:""});
    
    
    const job = useContext(AllJobs)
    const navigation = useNavigate();
    const saveUserApi = (data) => {
        // data.userId= user.id
        axios
          .post("http://localhost:8080/jobHunter/addnewjob", data)
          .then();
      };

    const onchangeHandler = (event) => {
        const copyJobSate = { ...newJobSate };
        copyJobSate[event.target.name] = event.target.value;
        setNewJob(copyJobSate);
      };
      

    
      const addOnClickHandler= ()=>{
        console.log(newJobSate, "the new state.......");
        saveUserApi(newJobSate);
        navigation("/");
        
      }
    return ( 
  <>
  <br></br>
  <br></br>
   <div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-6 container justify-content-center card">
            <h2 class="text-center">Sign In</h2>
            <p class="textpar">Fields marked with asterisks (<span class="errorMessage">*</span>) are required</p>
            <div class="card-body">
               
                    <div>
                        <label>UserName <span class="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                           value={newJobSate.title}
                           name="title"
                           onChange={onchangeHandler}
                        //    onChange={(event) => onChangeField(event)}
                        className="form-control"></input>
                    </div>
                    <div>
                        <label>Password <span class="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                           value={newJobSate.title}
                           name="title"
                           onChange={onchangeHandler}
                        //    onChange={(event) => onChangeField(event)}
                        className="form-control"></input>
                    </div>
                    
                    {/* <div>
                        <label>Post Date <span class="errorMessage">*</span></label>
                       
                        <input type="date"  autoFocus
                               className="form-control"
                               value={newJobSate.postDate}
                               name="postDate"
                               onChange={onchangeHandler}></input>
                    </div> */}
                    {/* <div>
                        <label>Expiration Date <span class="errorMessage">*</span></label>
                       
                        <input type="date"  autoFocus
                               className="form-control"
                               value={newJobSate.expirationDate}
                               name="expirationDate"
                               onChange={onchangeHandler}></input>
                    </div> */}
                    {/* <div>
                        <label>Description <span class="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                               className="form-control"
                               value={newJobSate.description}
                               name="description"
                               onChange={onchangeHandler}></input>
                    </div> */}

                    {/* <div>
                        <label>Website <span class="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                               className="form-control"
                               value={newJobSate.website}
                               name="website"
                               onChange={onchangeHandler}></input>
                    </div> */}
                    
<br></br>
                    
                    <div class="row">
                        <div class="col-lg-6">
                            <button  onClick={addOnClickHandler} class="btn btn-primary">Submit</button>


                        </div>
                    </div>

          
        </div>
    </div>
    </div>
    </div>
    </>
   
    );
}

export default AddJob;