
import React  from 'react'

export default function JobCard(props) {
  

    return (
        <div>
            {/* <AllJobs.Consumer> */}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <h1>Job Id : {props.id}</h1>
                                <h1>Title : {props.title}</h1>
                                <h1>Post Date: {props.postDate}</h1>
                                <h1>Expiration Date : {props.expirationDate}</h1>
                                <h1>Description : {props.description}</h1>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            {/* </AllJobs.Consumer> */}
        </div>
    )
}
