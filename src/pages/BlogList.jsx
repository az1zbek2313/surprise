import { useState } from "react";
import {
  BlogCategory,
  LatestBlog,
  BlogGallery,
  PopularTag,
  BlogListComponent,
} from "../components";
import { styles } from "../util/style";

function BlogList() {
  const [blogModal, setBlogModal] = useState(false);

  return (
    <div className={`${styles.container}`}>
      <div className="flex w-full h-full">
      {blogModal && (
          <div className="fixed top-0 left-0 w-full h-full z-[1000] bg-black/30"></div>
        )}
        <div className={`${blogModal ? "absolute bg-white z-[10000] left-0 top-0" : "hidden w-1/3"} lg:flex flex-col gap-3`}>
          <BlogCategory setBlogModal={setBlogModal} blogModal={blogModal}/>
          <LatestBlog />
          <BlogGallery />
          <PopularTag />
        </div>
        <div className="lg:w-2/3">
        <BlogListComponent setBlogModal={setBlogModal} blogModal={blogModal}/>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
