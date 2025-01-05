import BlogCard from "./BlogCard";
import {
  blogcard1,
  blogcard2,
  blogcard3,
  blogcard4,
  blogcard5,
  blogcard6,
  blogcard7,
  blogcard8,
} from "../../assets";

const blogcardImages = [
  {
    id: 1,
    image: blogcard1,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    text: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
  },
  {
    id: 2,
    image: blogcard2,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title:
      "Curabitur massa orci, consectetur et blandit ac, auctor et tellus. ",
    text: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus. ",
  },
  {
    id: 3,
    image: blogcard3,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    text: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
  },
  {
    id: 4,
    image: blogcard4,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title:
      "Curabitur massa orci, consectetur et blandit ac, auctor et tellus. ",
    text: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus. ",
  },
  {
    id: 5,
    image: blogcard5,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    text: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
  },
  {
    id: 6,
    image: blogcard6,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title:
      "Curabitur massa orci, consectetur et blandit ac, auctor et tellus. ",
    text: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus. ",
  },
  {
    id: 7,
    image: blogcard7,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    text: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
  },
  {
    id: 8,
    image: blogcard8,
    user: "Floyd Miles",
    createAt: "24 May, 2020",
    comment: "826",
    title:
      "Curabitur massa orci, consectetur et blandit ac, auctor et tellus. ",
    text: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus. ",
  },
];

function BlogListComponent({setBlogModal, blogModal}) {

  function handleClick() {
    setBlogModal(!blogModal);
  }
  
  return (
    <div>
      <div className="flex mb-4 md:mb-6 justify-between flex-col md:flex-row gap-2 md:gap-0 items-center">
        <div className="flex border px-4 py-2 rounded-sm w-full md:w-[50%] items-center justify-between">
          <input
            type="text"
            name="blogcardsearch"
            placeholder="Search..."
            id="blogcardsearch"
            className="focus:outline-none"
          />
          <label htmlFor="blogcardsearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </label>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center">
          <p className="text-sm">Sort by:</p>
          <div class="relative w-28 mx-3 cursor-pointer">
            <select class="appearance-none w-full px-4 py-2 cursor-pointer text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 cursor-pointer right-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          </div>

          <div className="flex justify-center items-center lg:hidden">
          <p className="text-sm">Filter: &nbsp;</p>
          <svg
          onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-funnel cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
          </svg>
        </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {blogcardImages.map((item) => (
          <BlogCard key={item.id} cardItems={item} />
        ))}
      </div>
    </div>
  );
}

export default BlogListComponent;
