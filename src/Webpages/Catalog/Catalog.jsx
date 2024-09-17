import SearchBar from '../../WebComponents/SearchBar/SearchBar.jsx'
import './Catalog.css';
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import { useNavigate } from 'react-router'
import Header from "../../WebComponents/Header/Header.jsx"
import { useState } from 'react';
import { useEffect } from 'react';
//import { Link } from '@react-navigation/native';

function Catalog() {
  //const books data moet in de toekomst uit de database komen
  const [books, setBooks] = useState([])

  useEffect(()=>{
    async function getCatalogData() {
      const catalogAPI = "http://localhost:8082/book/catalog";
      try {
          const response = await fetch(catalogAPI); // Wait for the fetch to complete
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const catalogDataJson = await response.json(); // Wait for the response to be parsed as JSON
          setBooks(catalogDataJson); // Pass the parsed JSON to your setBooks function
      } catch (error) {
          console.error('Error fetching catalog data:', error);
      };}
    
    getCatalogData()
    },[]  
  );

  const navigate = useNavigate();
  const navigateToAddBookPage = () => {
      navigate("/boektoevoegen")};
  const navigateToAddBookInfoPage = (value) => {
      navigate("/Info",{state:{isbn:value}})};


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
      <div className="columnTitle" onClick={()=>(navigateToAddBookInfoPage(book.isbn))}>
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
            <button className="darkButton" onClick={()=>(navigateToAddBookPage())}>+ Toevoegen</button>
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