import { Outlet } from "react-router-dom";
import { SidebarData } from "../../util/contants";

function SidebarBottom() {
  const pathname = window.location.pathname;
  const active = (pathname == '/account') && 1 ||
  (pathname == '/account/likes') && 2 ||                    
  (pathname == '/account/orders') && 3 ||                    
  (pathname == '/account/adress') && 4 ||                    
  (pathname == '/account/commit') && 5 

  return (
    <>
      <div className={`block lg:hidden relative`}>
        <div className="container mx-auto md:px-6">
          <section
            id="default-sidebar"
            className="bg-white"
            aria-label="Sidebar"
          >
            <div className="mx-auto w-full px-3 py-4 overflow-y-auto">
              <ul className="flex justify-between font-medium">
                {SidebarData.map((item) => (
                  <li className="mt-0" key={item.id}>
                    <a
                      href={item.href}
                      className={`flex items-center ${item.id == active ? "scale-105 shadow-xl border-[1px]" : "shadow-sm bg-gray-50"} p-2 text-gray-900 rounded-md hover:bg-gray-100 group`}
                    >
                      <img src={item.image} alt={item.alt} className="w-5 h-5 md:w-6 md:h-6"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarBottom;
