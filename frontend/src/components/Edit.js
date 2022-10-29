import React, { useState, useContext } from "react";
import { AllJobs, JobContext } from "./JobDetails";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Edit({route}) {
  // const initialState ={
  //     title:
  //     postDate:
  //     expirationDate:
  //     description:
  //     website:

  // }
  const{id}=useParams();
  // const navigate = useNavigate();
  //const params = { id, updateState };

  const [newJobSate, setNewJob] = React.useState({
    title: "",
    postDate: "",
    expirationDate: "",
    description: "",
    website: "",
  });
  //console.log(newJobSate, "the single value..");

  // const job = useContext(AllJobs)
  const navigation = useNavigate();

  const saveUserApi = (data) => {
    // data.userId= user.id
    axios
      .post("http://localhost:8080/jobHunter/addnewjob", data)
      .then(() => alert("Job Advertisment added"));
  };

  const onchangeHandler = (event) => {
    const copyJobSate = { ...newJobSate };
    copyJobSate[event.target.name] = event.target.value;
    setNewJob(copyJobSate);
  };

  const addOnClickHandler = () => {
    console.log(newJobSate, "the new state.......");
    saveUserApi(newJobSate);
    navigation("/");
  };
  return (
    <>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 container justify-content-center card">
            <h2  style={{'font-size':'40px'}} class="text-center">Update Form</h2>

            <div class="card-body">
              <div>
                <label>Title</label>

                <input
                  type="text"
                  autoFocus
                  value={newJobSate.title}
                  name="title"
                  onChange={onchangeHandler}
                  //    onChange={(event) => onChangeField(event)}
                  className="form-control"
                ></input>
              </div>
              <div>
                <label>Post Date </label>

                <input
                  type="date"
                  autoFocus
                  className="form-control"
                  value={newJobSate.postDate}
                  name="postDate"
                  onChange={onchangeHandler}
                ></input>
              </div>
              <div>
                <label>Expiration Date</label>

                <input
                  type="date"
                  autoFocus
                  className="form-control"
                  value={newJobSate.expirationDate}
                  name="expirationDate"
                  onChange={onchangeHandler}
                ></input>
              </div>
              <div>
                <label>Description</label>

                <input
                  type="text"
                  autoFocus
                  className="form-control"
                  value={newJobSate.description}
                  name="description"
                  onChange={onchangeHandler}
                ></input>
              </div>

              {/* <div>
                <label>Website </label>

                <input
                  type="text"
                  autoFocus
                  className="form-control"
                  value={newJobSate.website}
                  name="website"
                  onChange={onchangeHandler}
                ></input>
              </div> */}

              <br></br>

              <div class="row">
                <div class="col-lg-6">
                  <button onClick={addOnClickHandler} class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
