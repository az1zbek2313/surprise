import latestImage from "../../assets/Blog/BlogListImage.png"

const latestBlogNames = [
  {
    id:1,
    name:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    crateAt:"28 Nov, 2015",
    image:latestImage
  },
  {
    id:2,
    name:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    crateAt:"28 Nov, 2015",
    image:latestImage
  },
  {
    id:3,
    name:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    crateAt:"28 Nov, 2015",
    image:latestImage
  },
];

function LatestBlog() {

  return (
    <div className="rounded p-2 md:p-6 border max-w-[400px] border-[#E4E7E9]">
      <h2 className="uppercase font-medium mb-3 sm:mb-6">Latest Blog</h2>
      <ul className="flex flex-col items-start gap-4">
        {latestBlogNames.map((item, index) => (
          <li key={index+1} className="flex flex-wrap cursor-pointer items-center gap-2">
           <img src={item.image} alt="" className="object-cover rounded-sm" />
            <div className="flex flex-col items-start gap-1 sm:gap-2">
              <p className="text-sm font-medium max-w-56">
              {item.name}
              </p>
              <span className="text-gray-500 text-sm ">{item.crateAt}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestBlog;
