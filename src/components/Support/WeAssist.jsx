import { weAssistData } from "../../util/contants"

function WeAssist() {
  return (
    <div className="py-16">
      <h1 className="text-center font-semibold text-[32px]">What can we assist you with today?</h1>
      <ul className="list-none flex flex-wrap gap-3 mt-10">
        {
          weAssistData.map(item => (
            <li className="w-full sm:w-[49%] lg:w-[32%] xl:w-[24%] cursor-pointer hover:border-primary-600 hover:shadow-md transition-all duration-200 rounded border-2 flex items-center" key={item.id}>
              <img className="p-8" src={item.image} alt="track order" />
              <h2 className="font-medium">{item.title}</h2>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default WeAssist