import React,{useState, useContext} from "react";
import { AllJobs } from "./JobDetails";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import {GolbalContext} from './Dashboard'

function AddJob() {
    const [newJobSate , setNewJob] = React.useState({title:"",postDate:"", expirationDate:"",
     description:"",website:"" });
     const {getAllJobs} = useContext(GolbalContext)
    
    
    // const job = useContext(AllJobs)
    const navigation = useNavigate();
    
    const saveUserApi = async (data) => {
        // data.userId= user.id
        await axios
          .post("http://localhost:8080/jobHunter/addnewjob", data)
          .then();
        //   .then(() => alert("Job Advertisment added"));
      };

    const onchangeHandler = (event) => {
        const copyJobSate = { ...newJobSate };
        copyJobSate[event.target.name] = event.target.value;
        setNewJob(copyJobSate);
      };
      

    
      const addOnClickHandler= async ()=>{
        console.log(newJobSate, "the new state.......");
        await saveUserApi(newJobSate);
        await getAllJobs();
        
        navigation("/job_details");
        
      }
    return ( 
  <>
  <br></br>
   <div className="container">
    <div className="row">
        <div className="col-lg-6 col-md-6 container justify-content-center card">
            <h2 className="text-center">Add New  Form</h2>
            <p className="textpar">Fields marked with asterisks (<span className="errorMessage">*</span>) are required</p>
            <div className="card-body">
               
                    <div>
                        <label>Title <span className="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                           value={newJobSate.title}
                           name="title"
                           onChange={onchangeHandler}
                        //    onChange={(event) => onChangeField(event)}
                        className="form-control"></input>
                    </div>
                    <div>
                        <label>Post Date <span className="errorMessage">*</span></label>
                       
                        <input type="date"  autoFocus
                               className="form-control"
                               value={newJobSate.postDate}
                               name="postDate"
                               onChange={onchangeHandler}></input>
                    </div>
                    <div>
                        <label>Expiration Date <span className="errorMessage">*</span></label>
                       
                        <input type="date"  autoFocus
                               className="form-control"
                               value={newJobSate.expirationDate}
                               name="expirationDate"
                               onChange={onchangeHandler}></input>
                    </div>
                    <div>
                        <label>Description <span className="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                               className="form-control"
                               value={newJobSate.description}
                               name="description"
                               onChange={onchangeHandler}></input>
                    </div>

                    <div>
                        <label>Website <span className="errorMessage">*</span></label>
                       
                        <input type="text"  autoFocus
                               className="form-control"
                               value={newJobSate.website}
                               name="website"
                               onChange={onchangeHandler}></input>
                    </div>
                    
<br></br>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <button  onClick={addOnClickHandler} className="btn btn-primary">Submit</button>


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