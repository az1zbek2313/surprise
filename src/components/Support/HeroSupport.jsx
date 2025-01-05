import { supportBack } from "../../assets";

function HeroSupport() {
  return (
    <div className="mt-6 lg:mt-0 relative border-none">
      <div className="lg:absolute z-10 flex flex-col items-center gap-2 lg:items-start w-full lg:gap-5 bottom-1/4">
        <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3 w-full">
          <button className="font-semibold max-w-32 text-sm px-4 py-2 rounded-sm bg-yellow-200 ">
            Help center
          </button>
          <h1 className="font-semibold text-center text-2xl md:text-[32px]">How we can help you!</h1>
        </div>
        <div className="border rounded flex justify-between p-3 w-full lg:w-[40%]">
          <div className="flex items-center gap-3 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-search w-6 h-6 text-primary-600"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" placeholder="Enter your question or keyword" className="w-full focus:outline-none"/>
          </div>
          <button className="rounded-sm px-4 py-2 bg-primary-600 hover:bg-primary-500 transition-all duration-200 text-white">Search</button>
        </div>
      </div>
      <img
        className="w-full hidden lg:inline-block mx-10 min-h-72 object-cover  border-none"
        src={supportBack}
        alt="Support image"
      />
    </div>
  );
}

export default HeroSupport;
