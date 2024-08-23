import { Header, Footer } from "..";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
