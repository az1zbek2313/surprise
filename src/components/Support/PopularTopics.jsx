import { popularTopics } from "../../util/contants"

function PopularTopics() {
  return (
    <div>
      <h3 className="text-2xl text-center font-semibold mb-4 lg:mb-10">Popular Topics</h3>
      <ul className="flex flex-wrap justify-between gap-4 p-4">
      {popularTopics.map((topic) => (
        <li
          key={topic.id}
          className={`text-start w-full md:w-[48%] xl:w-[32%] list-disc cursor-pointer hover:text-primary-600 transition-all duration-200`}
        >
          {topic.title}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default PopularTopics