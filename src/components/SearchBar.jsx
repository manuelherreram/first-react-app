function SearchBar({ search, doSearch }) {
  return (
    <div className="d-flex p-3">
      <input
        value={search}
        onChange={(event) => {
          doSearch(event.target.value);
        }}
        className="form-control mb-3"
        type="search"
        placeholder="Buscar"
      />
    </div>
  );
}

export default SearchBar;
