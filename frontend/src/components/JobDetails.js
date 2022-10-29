
import React, { useState, useEffect } from "react"
import JobCard from "./JobCard";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


export const AllJobs = React.createContext();
export const JobContext = React.createContext();

export default function JobDetails(props) {

  const [jobState, setJobState] = useState([])


  useEffect(() => {
    getAllJobs();
  }, [])
  
const updateState=(id,newObj)=>{
const newList = jobState.map(job=>{
  if(job.id==id){
    return newObj

  }
    return job
  
})

setJobState(newList)
}
  const getAllJobs = async () => {
    const response = await fetch('http://localhost:8080/jobHunter/list/jobs')
      .then((response) => response.json());

    setJobState(response);
  };

  const navigation = useNavigate()

  const addHandler =()=> {
    navigation("/add_job");
  }



  //delete
  const deleteJobonClick = async (id) => {
   // const response = await axios.delete(`http://localhost:8080/jobHunter/delete/${id}`)
  const response = await fetch(`http://localhost:8080/jobHunter/delete/${id}`,
  {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    }
  })
   //console.log(id, "Id of the delete");
   const result =  response.json();
   //for the fornt end
   if(result){
    const filterdJobs = jobState.filter((job) => job.job_id !== id)
    setJobState(filterdJobs);
   }
  }


  return (

    
      <AllJobs.Provider value={{ jobState, deleteJobonClick }}> 
      <div className="container">
      <br></br>
      
      <button style={{'font-size':'22px','margin-left': ''}} onClick={addHandler}
       className="btn btn-primary">Add Job</button>
      <br></br>
        {
          jobState.map((job) => (
            <JobCard key={job.job_id}
             id={job.job_id}
              title={job.title}
              postDate={job.postDate}
              expirationDate={job.expirationDate}
              description={job.description}
              website={job.website}
              updateState={updateState}
            />
          ))
        }
        </div>
     </AllJobs.Provider>
    
  )
}
