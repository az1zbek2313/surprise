import { useSelector } from "react-redux";
import { Header, Footer, DetailModal } from "..";
import { Outlet } from "react-router-dom";

function Layout() {
  const params = useSelector((state) => state.productIdReducer);

  console.log(8, params);
  return (
    <>
      <Header />
      {/* DETAIL MODAL  */}
      {
        params.id && <DetailModal />
      }
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
