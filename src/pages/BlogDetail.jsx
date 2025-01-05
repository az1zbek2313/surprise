import { styles } from "../util/style";
import mainImage from "../assets/Blog/BlogDetailImage.png";
import { useState } from "react";
import { BlogComments, UserBlogMessage, BlogCategory, LatestBlog, BlogGallery, PopularTag, BlogSearch } from "../components";

function BlogDetail() {
  const [blogModal, setBlogModal] = useState(false);

  return (
    <div className={`${styles.container}`}>
      <img
        src={mainImage}
        alt="Blog main image"
        className="rounded w-full my-9"
      />
      <div className="flex w-full gap-10 h-full">
      <div className="lg:w-2/3">
          <UserBlogMessage blogModal={blogModal} setBlogModal={setBlogModal}/>
          <BlogComments />
        </div>
        {blogModal && (
          <div className="fixed top-0 left-0 w-full h-full z-[1000] bg-black/30"></div>
        )}
        <div
          className={`${
            blogModal
              ? "absolute bg-white z-[10000] left-0 top-0"
              : "hidden w-1/3"
          } lg:flex flex-col gap-3`}
        >
          <BlogSearch />
          <BlogCategory setBlogModal={setBlogModal} blogModal={blogModal} />
          <LatestBlog />
          <BlogGallery />
          <PopularTag />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
