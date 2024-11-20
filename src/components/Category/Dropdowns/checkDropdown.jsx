
function CheckDropdown() {
  return (
    <div
    className="absolute right-0 z-[1000] mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div className="py-1" role="none">
      <a
        href="#"
        className="block px-4 py-2 text-sm font-medium text-gray-900"
        role="menuitem"
        tabindex="-1"
        id="menu-item-0"
      >
        Most Popular
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-500"
        role="menuitem"
        tabindex="-1"
        id="menu-item-1"
      >
        Best Rating
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-500"
        role="menuitem"
        tabindex="-1"
        id="menu-item-2"
      >
        Newest
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-500"
        role="menuitem"
        tabindex="-1"
        id="menu-item-3"
      >
        Price: Low to High
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-500"
        role="menuitem"
        tabindex="-1"
        id="menu-item-4"
      >
        Price: High to Low
      </a>
    </div>
  </div>
  )
}

export default CheckDropdown