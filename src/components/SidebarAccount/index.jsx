import { Outlet } from "react-router-dom";
import { SidebarData } from "../../util/contants";

function SidebarAccount() {
  const pathname = window.location.pathname;
  const active = (pathname == '/account') && 1 ||
  (pathname == '/account/likes') && 2 ||                    
  (pathname == '/account/orders') && 3 ||                    
  (pathname == '/account/adress') && 4 ||                    
  (pathname == '/account/commit') && 5 

  return (
    <>
      <div className={`container mx-auto px-4 md:px-6 mt-[-8px]`}>
        <div className="flex justify-between items-start w-full">
          <aside
            id="default-sidebar"
            className="hidden lg:block sticky top-[-10px] left-0 z-40 w-[36%] h-full transition-transform -translate-x-full lg:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-[100vh] px-3 py-4 overflow-y-auto border-x-[1.6px]">
              <ul className="space-y-2 font-medium">
                {SidebarData.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`flex items-center ${item.id == active && "bg-gray-100"} p-2 text-gray-900 rounded-lg hover:bg-gray-100 group`}
                    >
                      <img src={item.image} alt={item.alt} width={20}/>
                      <span className="ms-3">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarAccount;
