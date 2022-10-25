import { FaSearch } from "react-icons/fa";

const SearchBar = ({ templates, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(templates);

    const resultsArray = templates.filter(
      (template) =>
        template.notebook.includes(e.target.value) ||
        template.tool.includes(e.target.value) ||
        template.tags.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search__button">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
