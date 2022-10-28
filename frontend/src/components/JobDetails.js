
import React, { useState, useEffect } from "react"
import JobCard from "./JobCard";

export const AllJobs = React.createContext();

export default function JobDetails(props) {

  const [jobState, setJobState] = useState([])


  useEffect(() => {
    getAllJobs();
  }, [])

  const getAllJobs = async () => {
    const response = await fetch('http://localhost:8080/jobHunter/list/jobs')
      .then((response) => response.json());
    setJobState(response);
  };

  return (

    <div>
      <AllJobs.Provider value={jobState}> 
      
      </AllJobs.Provider>
        {
          jobState.map((job) => (
            <JobCard key={job.id}
              title={job.title}
              postDate={job.postDate}
              expirationDate={job.expirationDate}
              description={job.description}
            />
          ))
        }
     
    </div>
  )
}
