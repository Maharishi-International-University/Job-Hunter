import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{'font-size':'36px'}}>Job Hunter&copy;</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item active">
                        <Link style={{'font-size':'26px' ,'color':'black'}} class="nav-link" to={"/"}>Dashboard
                            <span class="visually-hidden">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link style={{'font-size':'26px' ,'color':'black'}} class="nav-link" to={"/job_details"}>All Jobs
                            <span class="visually-hidden">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item active">
                    <Link style={{'font-size':'26px' ,'color':'black'}} class="nav-link" to={"/about_us"}>AboutUs
                            <span class="visually-hidden">(current)</span>
                        </Link>
                    </li>
                   
                    <li class="nav-item">
                    <Link  style={{'font-size':'26px','color':'black'}}class="nav-link" to={"/register"}>Register
                            <span class="visually-hidden">(current)</span>
                        </Link>
                    </li>

                </ul>
               
            </div>
        </div>
    </nav>
        </div>
    );
}

export default Header;