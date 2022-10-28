import React from 'react'

export default function JobCard(props) {
    return (
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <h1>{props.title}</h1>
                            <h1>{props.postDate}</h1>
                            <h1>{props.expirationDate}</h1>
                            <h1>{props.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
