function SearchBar() {
  return (
    <div>
      <form className="form-inline p-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}
export default SearchBar;
