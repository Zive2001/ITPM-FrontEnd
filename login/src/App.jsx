import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./Pages/SignIn"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element ={<SignIn/>} />
      <Route path="/sign-up" element ={<SignUp/>} />
    
    </Routes>
      
    </BrowserRouter>
  )
}

