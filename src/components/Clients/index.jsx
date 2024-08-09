import { clients } from "../../util/contants";
import { styles } from "../../util/style";

function Clients() {
  return (
    <div className="pt-8 md:pt-20">
      <div className={`${styles.container}`}>
        <h1 className="font-semibold text-2xl sm:text-4xl text-center mb-10 sm:mb-20 ">
          Our details for clients
        </h1>
        <div className={`${styles.flexBetween} gap-12 lg:gap-0`}>
          {clients.map((items) => (
            <div
              key={items.id}
              className={`${styles.flexCenter} relative flex-col gap-2 mx-auto p-5 pt-10 lg:w-[31%] rounded-md shadow-lg`}
            >
              <div className="absolute top-[-20px] p-3 bg-blue-600 rounded-full">
                {(items.id == 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-box"
                    color="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                  </svg>
                )) ||
                  (items.id == 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      class="bi bi-bar-chart"
                      color="white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                    </svg>
                  )) ||
                  (items.id == 3 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      class="bi bi-kanban"
                      color="white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
                    </svg>
                  ))}
              </div>
              <span className="text-blue-600 font-semibold text-base sm:text-lg">
                {items.id == 1 && "+"}
                {items.amount}
                {items.id == 2 && "%"}
              </span>
              <h3 className="font-medium text-base sm:text-lg opacity-75">{items.title}</h3>
              <p className="text-center text-xs sm:text-sm">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
