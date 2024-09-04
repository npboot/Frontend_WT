import SearchBar from '../../WebComponents/SearchBar/SearchBar.jsx'
import './Catalog.css';
function Catalog() {
  //const books data moet in de toekomst uit de database komen
  const books = [
    {
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5
    },
    {
      title: "Figma for dummies",
      author: "John Doe",
      year: "2023",
      available: 1,
      total: 1
    },
    {
      title: "Figma for dummies 2023",
      author: "John Doe",
      year: "2023",
      available: 1,
      total: 1
    },
    {
      title: "Figma for dummies 2023",
      author: "John Doe",
      year: "2023",
      available: 1,
      total: 1
    },
    {
      title: "Figma for dummies 2023",
      author: "John Doe",
      year: "2023",
      available: 1,
      total: 1
    },
    {
      title: "Figma for dummies 2023",
      author: "John Doe",
      year: "2023",
      available: 1,
      total: 1
    },
    {
      title: "Figma for dummies 2023",
      author: "John Doe",
      year: "2023",
      available: 1,
      total: 1
    }
  ]


  function addBookToCatalogTable(book) {
  /*
  function to add a book to the catalog table.
  @param book: should be in the following format:
  {
    title: "Python for dummies",
    author: "John Doe",
    year: "2024",
    available: 4,
    total: 5
  }
  */
    return(
    <div className="book tableRow">               
      <div className="columnTitle">
        {book.title}
      </div>
      <div className="columnAuthor">
        {book.author}
      </div>
      <div className="columnYear">
        {book.year}
      </div>
      <div className="columnAvailability">
        {book.available} van {book.total} beschikbaar
      </div>
    </div>
    )}
  
    return (
      <div className="catalog">
          <div className="searchRow flexRow">
            <SearchBar/>
          </div>
          <div className="navigationRow flexRow">
            <a href="#">Terug naar homepage</a>
            <button className="darkButton">+ Toevoegen</button>
          </div>
          <div className="catalogTable">
            <div className="tableHeader tableRow">
              <div className="columnTitle">
                Titel
              </div>
              <div className="columnAuthor">
                Auteur
              </div>
              <div className="columnYear">
                Jaartal
              </div>
              <div className="columnAvailability">
                Beschikbaarheid
              </div>
            </div>
            <div className="tableContent scroll">
              {books.map(book=>(addBookToCatalogTable(book)))}     
            </div>
          </div>
      </div>
    );
  
}
  export default Catalog;