import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    
      //  <JobContext.Provider value= {job}>
       <BrowserRouter>
           <Dashboard/>
       </BrowserRouter>
  
  //  </JobContext.Provider>
  );
}

export default App;
