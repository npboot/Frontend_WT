import SearchBar from '../../WebComponents/SearchBar/SearchBar.jsx'
import './Catalog.css';
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import { useNavigate } from 'react-router'
import Header from "../../WebComponents/Header/Header.jsx"

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

  const navigate = useNavigate();
  const navigateToEditBookPage = () => {
      navigate("/boekaanpassen")}


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
          <div>
            <Header/>
          </div>
          <div className='content'>
          <div className="searchRow flexRow">
            <SearchBar/>
          </div>
          <div className="navigationRow flexRow trainer">
            <ConfigurableRouteNavigationBTNoFill route={"/Trainer"} text = {"terug naar homepage"}/>
            <button className="darkButton" onClick={()=>(navigateToEditBookPage())}>+ Toevoegen</button>
          </div>
          {/* logic should be added later to make sure that the trainer and trainee see appropriate version
          <div className="navigationRow flexRow trainee">
            <ConfigurableRouteNavigationBTNoFill route={"/Trainee"} text = {"terug naar homepage"}/>
          </div>
          */}
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
      </div>
    );
  
}
  export default Catalog;