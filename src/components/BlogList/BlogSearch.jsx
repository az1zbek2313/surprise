function BlogSearch() {
  return (
    <div className="rounded p-2 md:p-6 border max-w-[400px] border-[#E4E7E9]">
      <div className="flex justify-between flex-col">
        <h2 className="font-medium mb-2 uppercase sm:mb-4">Search</h2>
        <div className="flex border px-4 py-2 rounded-sm w-full items-center justify-between">
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
      </div>
    </div>
  );
}

export default BlogSearch;
