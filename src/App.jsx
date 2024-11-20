import {
  LandingPage,
  AboutUs,
  Detail,
  Category,
  Cart,
  SignIn,
  SignUp,
  MyFavourites,
  MyData,
  MyCommit,
  MyOrders,
  Location,
  Notifications,
  NotFound,
  MyFavouritesLogout,
  Code,
  TrandingSurprizes,
  Section
} from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SidebarAccount, Layout } from "./components";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";

export default function App() {
  const token = useSelector((state) => state.userIdReducer.uid);

  console.log();

  return (
    <>
          <Toaster
        toastOptions={{
          classNames: {
            error: "bg-red-400 text-white",
            success: "text-green-400",
          },
        }}
      />
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/code" element={<Code />}></Route>

        <Route path="/" element={<Layout />}> 
          <Route index element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/category/:id" element={<Category />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/tranding" element={<TrandingSurprizes />}></Route>
          <Route path="/section/:id" element={<Section />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {token ? (
            <Route path="/account" element={<SidebarAccount />}>
              <Route index element={<MyData />}></Route>
              <Route path="orders" element={<MyOrders />}></Route>
              <Route path="adress" element={<Location />}></Route>
              <Route path="commit" element={<MyCommit />}></Route>
              <Route path="likes" element={<MyFavourites />}></Route>
              <Route path="notifications" element={<Notifications />}></Route>
            </Route>
          ) : (
            <Route path="/likes" element={<MyFavouritesLogout />}></Route>
          )}
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
