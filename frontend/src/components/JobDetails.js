import React, { useContext } from "react";
import JobCard from "./JobCard";
import {useNavigate } from "react-router-dom";

import { GolbalContext } from "./Dashboard";

export const AllJobs = React.createContext();


export default function JobDetails() {
  const { jobState } = useContext(GolbalContext);

  const navigation = useNavigate();

  const addHandler = () => {
    navigation("/add_job");
  };

  return (
    <div className="container">
      <br></br>

      <button
        style={{ "font-size": "22px", "margin-left": "" }}
        onClick={addHandler}
        className="btn btn-primary"
      >
        Add Job
      </button>
      <br></br>
      {jobState.map((job) => (
        <JobCard
          key={job.job_id}
          id={job.job_id}
          title={job.title}
          postDate={job.postDate}
          expirationDate={job.expirationDate}
          description={job.description}
          website={job.website}
        />
      ))}
    </div>
  );
}
