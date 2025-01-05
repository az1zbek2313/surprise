import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
} from "../../assets";

const galleryImages = [
  {
    id: 1,
    image: gallery1,
  },
  {
    id: 2,
    image: gallery2,
  },
  {
    id: 3,
    image: gallery3,
  },
  {
    id: 4,
    image: gallery4,
  },
  {
    id: 5,
    image: gallery5,
  },
  {
    id: 6,
    image: gallery6,
  },
  {
    id: 7,
    image: gallery7,
  },
  {
    id: 8,
    image: gallery8,
  },
];

function BlogGallery() {
  return (
    <div className="rounded p-2 md:p-6 border max-w-[400px] border-[#E4E7E9]">
      <h2 className="uppercase font-medium mb-3 sm:mb-6">Gallery</h2>
      <ul className="flex items-start flex-wrap gap-2 justify-center ss:justify-start">
        {galleryImages.map((item, index) => (
          <li
            key={index + 1}
          >
            <img src={item.image} alt="" className="object-cover rounded-sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogGallery;
