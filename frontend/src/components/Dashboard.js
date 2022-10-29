import React, { useState, useEffect, createContext } from 'react'
import Header from './Header'
import Cards from './Cards'
import JobDetails from './JobDetails'
import AddJob from './AddJob'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Edit from './Edit'
import { AboutUs } from './AboutUs'
import SignUp from './SignUp'
import RegisterSucess from './RegisterSucess'
import SignIn from './SignIn'
import HomePage from './HomePage'
import axios from 'axios'

export const GolbalContext = createContext();

export default function Dashboard() {
    const [jobState, setJobState] = useState([])


  useEffect(() => {
    getAllJobs();
  }, [])
  

const updateState= async (id,newObj)=>{
 try {
    const response = await axios.put(`http://localhost:8080/jobHunter/update/${id}`, newObj)
    if(response.status == 200){
        const newList = jobState.map(job=>{
    
            if(job.job_id==id){
              console.log(newObj, "the new objec in dashboar");
              return {...newObj, id}
          
            }
              return job
            
          })
          
          setJobState(newList)
    }
 } catch (error) {

    alert(error.message);
 }

}
  const getAllJobs = async () => {
    console.log("fetchiinggggggggggggggggg");
    const response = await fetch('http://localhost:8080/jobHunter/list/jobs')
      .then((response) => response.json());
console.log(response);
    setJobState(response);
  };

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
        <GolbalContext.Provider value={{jobState,getAllJobs, setJobState,updateState,deleteJobonClick}}>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path="/job_details" element={<JobDetails/>}></Route>
                <Route path='/add_job' element={<AddJob/>}></Route>
                <Route  path='/edit/:id' element={<Edit/>}></Route>  
                <Route  path='/about_us' element={<AboutUs/>}></Route>  
                <Route  path='/register' element={<SignUp/>}></Route>    
                <Route  path='/register_sucsess' element={<RegisterSucess/>}></Route>  
                <Route  path='/log_in' element={<SignIn/>}></Route>      
                   </Routes>
            {/* <JobDetails />
            <AddJob/> */}
            <Footer/>
            
        </GolbalContext.Provider>
    )
}
