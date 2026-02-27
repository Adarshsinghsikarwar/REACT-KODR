const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <input
        className="w-[50%] px-2 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
