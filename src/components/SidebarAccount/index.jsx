import { Outlet } from "react-router-dom";
import { SidebarData } from "../../util/contants";

function SidebarAccount() {
  return (
    <>
      <div className={`container mx-auto px-4 md:px-6 mt-[-8px]`}>
        <div className="flex justify-between items-start w-full">
          <aside
            id="default-sidebar"
            className="hidden sm:block sticky top-[-10px] left-0 z-40 w-[36%] h-full transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-[100vh] px-3 py-4 overflow-y-auto border-x-[1.6px] dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                {SidebarData.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
