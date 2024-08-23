import { LandingPage, AboutUs, Detail, Category, Cart, SignIn, SignUp, MyFavourites } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/account/favourites" element={<MyFavourites />}></Route>
        </Route>
      </Routes>
    </>
  );
}
