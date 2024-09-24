function SearchBar() {
return(
    <div className="searchBar flexRow">
        <input className="searchInputField" type="search" placeholder="Zoeken..." />
        <button className="darkButton">Zoeken</button>
    </div>
)
}
export default SearchBar;