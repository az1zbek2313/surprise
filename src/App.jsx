import { LandingPage, AboutUs } from "./pages"
import { Route, Routes } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
      </Routes>
    </>
  )
}
