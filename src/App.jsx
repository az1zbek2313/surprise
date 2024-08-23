import { LandingPage, AboutUs, Detail, Category, Cart } from "./pages"
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Footer, Header } from "./components";

export default function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}
