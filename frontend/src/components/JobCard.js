
import React, { useContext, useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AllJobs } from './JobDetails';
import { JobContext } from './JobDetails';

export default function JobCard(props) {
    
    const { deleteJobonClick }  = useContext(AllJobs)

    const navigation = useNavigate();

const onClickUpdate =(id)=>{
       navigation(`/edit/${id}`);
       
}


    return (
        
            // <JobContext.Provider value={{job}}> 
            <>
            <br></br>
            <div className='container'>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body"  style={{'borderRadius':'20px','color':'white',
                            "background-color": '#2fa4e7'}}>
                                {/* <h5 className="card-title">Special title treatment</h5> */}
                                {/* <h1>Job Id : {id}</h1> 
                                <h1>Title : {title}</h1>
                                <h1>Post Date: {postDate}</h1>
                                <h1>Expiration Date : {expirationDate}</h1>
                                <h1>Description : {description}</h1> */}
                                 <h1>Job Id : {props.id}</h1> 
                                <h1>Title : {props.title}</h1>
                                <h1>Post Date: {props.postDate}</h1>
                                <h1>Expiration Date : {props.expirationDate}</h1>
                                <h1>Description : {props.description}</h1> 
                                 {/* <h1>Website Name : {props.website}</h1> */}
                                 <div class="row"  style={{"padding-left": "40px;"}}>
                                    <div className="col-lg-6">
                                <a  href={props.website} class="btn btn-dark" > Apply</a> |
                                <button  onClick={()=>onClickUpdate(props.id)} class="btn btn-primary"> Update</button> |
                                <button onClick={()=> deleteJobonClick(props.id)} class="btn btn-danger"> Delete</button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </>
                // </JobContext.Provider>
        
    )
}
