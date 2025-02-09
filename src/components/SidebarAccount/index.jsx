import { Outlet } from "react-router-dom";
import { SidebarData } from "../../util/contants";
import { SidebarBottom } from "..";
import { useTranslation } from "react-i18next";

function SidebarAccount() {
  const { t } = useTranslation();
  const pathname = window.location.pathname;
  const active =
    (pathname == "/account" && 1) ||
    (pathname == "/account/likes" && 2) ||
    (pathname == "/account/orders" && 3) ||
    (pathname == "/account/adress" && 4) ||
    (pathname == "/account/commit" && 5) ||
    (pathname == "/account/notifications" && 6) ||
    (pathname == "/account/history" && 7)

  return (
    <>
      <div
        className={`hidden lg:block container mx-auto px-4 md:px-6 mt-[-8px] `}
      >
        <div className="flex justify-between items-start w-full border-x-[1.6px]">
          <aside
            id="default-sidebar"
            className="hidden lg:block sticky top-[-10px] left-0 z-40 w-[36%] h-full transition-transform -translate-x-full lg:translate-x-0"
            aria-label="Sidebar"
          >
            <div className=" h-screen px-3 py-4 overflow-y-auto border-r-[1.6px]">
              <ul className="space-y-2 font-medium">
                {SidebarData.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`flex items-center ${
                        item.id == active && "bg-gray-100"
                      } p-2 text-gray-900 rounded-lg hover:bg-gray-100 group`}
                    >
                      <img src={item.image} alt={item.alt} width={20} />
                      <span className="ms-3">
                        {
                        item.id == 1 && t("myinformations") ||
                        item.id == 2 && t("myfavourites") ||
                        item.id == 3 && t("allorders") ||
                        item.id == 4 && t("locations") ||
                        item.id == 5 && t("mycommit") ||
                        item.id == 6 && t("notifications") ||
                        item.id == 7 && t("history") 
                        }
                      </span>
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

      <SidebarBottom />
    </>
  );
}

export default SidebarAccount;
