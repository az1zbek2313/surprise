import { LandingPage, AboutUs, Detail, Category, Cart, SignIn, SignUp, MyFavourites, MyData, MyCommit, MyOrders, Location, Notifications } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SidebarAccount, Layout } from "./components";

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
          <Route path="/account" element={<SidebarAccount/>}>
            <Route index element={<MyData />}></Route>
            <Route path="likes" element={<MyFavourites />}></Route>
            <Route path="orders" element={<MyOrders />}></Route>
            <Route path="adress" element={<Location />}></Route>
            <Route path="commit" element={<MyCommit />}></Route>
            <Route path="notifications" element={<Notifications />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
