import React from "react";

const HomePage = () => {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <div class="container">
        
            <form class="d-flex" action="/patient/search" method="get">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
                name="search"
                id="search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
    
  );
};

export default HomePage;
