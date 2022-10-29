import React from 'react'
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



export default function Dashboard() {

    
    return (
        <>
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
            
        </>
    )
}
