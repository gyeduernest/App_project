import { Route, Routes } from "react-router-dom"
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import { Logout } from "./SignOut";




function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>



    </>
  )
}

export default App
