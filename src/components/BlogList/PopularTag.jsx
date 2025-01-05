import { useState } from "react";
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
    name: "Game",
  },
  {
    id: 2,
    name: "iPhone",
  },
  {
    id: 3,
    name: "TV",
  },
  {
    id: 4,
    name: "Asus Laptops",
  },
  {
    id: 5,
    name: "Macbook ",
  },
  {
    id: 6,
    name: "SSD",
  },
  {
    id: 7,
    name: "Graphics Card ",
  },
  {
    id: 8,
    name: "Speaker",
  },
  {
    id: 9,
    name: "Tablet",
  },
  {
    id: 10,
    name: "Microwave",
  },
  {
    id: 11,
    name: "Samsung",
  },
  {
    id: 12,
    name: "Power Bank ",
  },
];

function PopularTag() {
  const [checked, setChecked] = useState(1);

  return (
    <div className="p-2 md:p-6 max-w-[400px]">
      <h2 className="uppercase font-medium mb-3 sm:mb-6">Popular Tag</h2>
      <ul className="flex items-start flex-wrap gap-1 justify-center ss:justify-start">
        {galleryImages.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => {
                setChecked(item.id);
              }}
              className={`rounded-sm border px-3 py-1.5 text-sm font-medium hover:text-primary-600 hover:border-primary-600 transition-all duration-200 ${
                checked === item.id && "border-primary-600 text-primary-600 bg-gray-50"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularTag;
