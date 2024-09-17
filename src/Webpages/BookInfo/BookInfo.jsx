
import './BookInfo.css';
import Header from "../../WebComponents/Header/Header";
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import { useLocation, useNavigate } from 'react-router'
import { useState } from 'react';
import { useEffect } from 'react';


function BookInfo() {
  //define all variables in the form of states, so they can be changed to reflect the particulair book being viewed
  const [titel,setTitle] = useState("Java voor dummies");
  const [author,setAuthor] = useState("John Doe");
  const [publishDate,setPublishDate] = useState("10-12-2023");
  const [summary,setSummary] = useState("the brown fox jumps over the lazy dog, the brown fox jumps over the lazy dog, the brown fox jumps over the lazy dog, ");
  const [books, setBooks] = useState([]);
  const [isbn, setISBN] = useState("444445");
  const location = useLocation();

  // this variable an function are used to add routability to the "Exemplaar toevoegen" knop
  const navigate = useNavigate();
  const navigateToEditBookPage = () => {
      navigate("/boekaanpassen")}
  
  // this state + function pair is used to store which book instance items are expaned and which are closed.
  const [expandedBookIds, setExpandedBookIds] = useState(new Set());
  const toggleExpand = (id) => {
    setExpandedBookIds(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };
    // this function gets called only when the page loads, this function requests book information from the backend using an API call
    useEffect(()=>{
      async function getBookInfoData() {
        const {state} =  location;
        const baseBookInfoRequestURL = `http://localhost:8082/book/getBookInfo`;
        const allCopyInfoByISBN = `${baseBookInfoRequestURL}?isbn=${state?.isbn}`;
        try {
            const response = await fetch(allCopyInfoByISBN); // Wait for the fetch to complete
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const allCopyInfoByISBNJSON = await response.json(); // Wait for the response to be parsed as JSON
            //console.log(allCopyInfoByISBNJSON); //check the Json data.
            updateBookInformation(allCopyInfoByISBNJSON)
        } catch (error) {
            console.error('Error fetching catalog data:', error);
        };}
        getBookInfoData()
      },[]  
    );

    //updates all general book information from a specific title
  function updateBookInformation(book){
    setBooks(book);
    setTitle(book[0].physicalBook.book.title);
    let stringOfAllAuthors="";
    book[0].physicalBook.book.authors.map(authorElement=>(
        stringOfAllAuthors +=authorElement.name+", "
      ));
    setAuthor(stringOfAllAuthors);
    setPublishDate(book[0].physicalBook.book.year);
    setISBN(book[0].physicalBook.book.isbn);
    setSummary(book[0].physicalBook.book.summary);
  }



      //this function formates all the book data into two different divs, one to visualise a summary of the information, one to give a more expansive view.
  function createBookInstanceItem(physicalBookCopy){
    if(!expandedBookIds.has(physicalBookCopy.copyId)){
      return(
      <div key = {physicalBookCopy.copyId} className='containerBookInstanceItem smallBorder'> 
        <p className='bookInstanceText iSBNtext'>{physicalBookCopy.copyId}</p>
        <p className='bookInstanceText lendText'>Uitgeleend aan [WIP] </p>
        <p className='bookInstanceText condition'>{physicalBookCopy.physicalCondition.conditionType}</p>
        <button className="dropDownButton" onClick={() => toggleExpand(physicalBookCopy.copyId)}>\/</button>
      </div>
      );
    }else{
      return(
        <div className='containerBookInstanceItemExtended smallBorder'> 
          <div className='bookInstanceExtendedLeftContainer '>
            <p className='noMargin'>{physicalBookCopy.copyId}</p>
            <p className='noMargin'>Uitgeleend aan [WIP]</p>
            <p className='noMargin'>Conditie: {physicalBookCopy.physicalCondition.conditionType}</p>
            <p className='noMargin'>Aanschafdatum: {physicalBookCopy.purchaseDate.substring(0,10)}</p>
            <div>
              <button onClick={() => console.log("Aanpassen knop is geklickt van exemplaar: "+physicalBookCopy.copyId)}>Aanpassen</button>
              <button onClick={()=> console.log("Archieveren knop is geklickt van exemplaar: "+physicalBookCopy.copyId)}>Archieveren</button>
            </div>
          </div>
          <div key = {physicalBookCopy.copyId} className='bookInstanceExtendedRightContainer  scroll'>
            <div className='containerBookInstanceHistoryItem smallBorder'> 
                <span className= 'mediumRightMargin bookInstanceText'>10-10-2024</span>
                <span className='bookInstanceText'>Uitgeleend aan [WIP1]</span>
              </div>
              <div className='containerBookInstanceHistoryItem smallBorder'> 
                <span className= 'mediumRightMargin bookInstanceText'>10-09-2024</span>
                <span className='bookInstanceText'>Ingeleverd door [WIP1]</span>
              </div>
              <div className='containerBookInstanceHistoryItem smallBorder'> 
                <span className= 'mediumRightMargin bookInstanceText'>10-07-2024</span>
                <span className='bookInstanceText'>Uitgeleend aan [WIP2]</span>
              </div>
              <div className='containerBookInstanceHistoryItem smallBorder'> 
                <span className= 'mediumRightMargin bookInstanceText'>03-03-2024</span>
                <span className='bookInstanceText'>Ingeleverd door [WIP2]</span>
              </div>
            </div>
            <button className="dropDownButton" onClick={() => toggleExpand(physicalBookCopy.copyId)}>/\</button>
          </div>
      );

    }
  }
    return (
      <div className="BookInfo">
        <div>
        <Header />
        </div>
        <div className='content'>
        <div className="backToCatalog navigationRow flexRow">
          <ConfigurableRouteNavigationBTNoFill route={"/Catalogus"} text = {"Terug naar catalogus"}/>
          <button className='darkButton' onClick={()=>(navigateToEditBookPage())}> + Exemplaar toevoegen</button>
        </div>
        <div className='container bigBorder'>
          <div className='titleHeader bigBorder'>
            <h2 className='noMargin'>{titel}</h2>
          </div>
          <div className='containerBookInfo bigBorder'>
            <div id='imageAndBookInfoSubContainer'>
              <img className='coverImage' src='/logo192.png' alt= "Cover image"></img>
              <div>   
                <p className='noMargin'>{titel}</p>
                <p className='noMargin'>{author}</p>
                <p className='noMargin'>{publishDate}</p>
                <p className='noMargin'>ISBN: {isbn}</p>
              </div>
            </div>
            <div>{summary}</div>
          </div>
          <div id='bookInstanceContainer'className ='bigBorder scroll'> 
            {books.map((book)=>(createBookInstanceItem(book)))}  
          </div>
        </div>
      </div>
    </div>
    );
  }
  export default BookInfo;

