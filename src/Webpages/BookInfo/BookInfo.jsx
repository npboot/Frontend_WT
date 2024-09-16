
import './BookInfo.css';
import Header from "../../WebComponents/Header/Header";
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import { useNavigate } from 'react-router'

function BookInfo() {
  const books = [
    {
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "Bob",
      condition: "damaged"
    },{
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "uitgeleend aan jopus maximus Ultranus supirius dopius nalturius academius",
      condition: "damaged"
    },{
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "Bob",
      condition: "damaged"
    },{
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "Bob",
      condition: "damaged"
    },{
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "Bob",
      condition: "damaged"
    },{
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "Bob",
      condition: "damaged"
    },{
      title: "Python for dummies",
      author: "John Doe",
      year: "2024",
      available: 4,
      total: 5,
      iSBN: "301.112",
      lender: "Bob",
      condition: "damaged"
    }
  ]

  const navigate = useNavigate();
  const navigateToEditBookPage = () => {
      navigate("/boekaanpassen")}

  function createBookInstanceItem(book){
    return(
      <div class='containerBookInstanceItem smallBorder'> 
              <p class='bookInstanceText iSBNtext'>{book.iSBN}</p>
              <p class='bookInstanceText lendText'>uitgeleend aan {book.lender} </p>
              <p class='bookInstanceText condition'>{book.condition}</p>
              <button class="dropDownButton">\/</button>
            </div>

    );
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
        <div class='container bigBorder'>
          <div class='titleHeader bigBorder'>
            <h2 class='noMargin'>Java voor dummies</h2>
            
            
            </div>
          <div class='containerBookInfo bigBorder'>
            <div id='imageAndBookInfoSubContainer'>
            <img class='coverImage' src='/logo192.png' alt= "Cover image"></img>
            <div> 
              
            <p class='noMargin'>Java voor dummies</p>
            <p class='noMargin'>John Doe</p>
            <p class='noMargin'>01-01-2024</p>
            <p class='noMargin'>ISBN: 123.364.123.75</p>
              </div>
            </div>
            
            <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam consectetur voluptatem repellendus animi maiores vel dolores architecto fuga sint sequi, sed perspiciatis doloremque, possimus rem inventore, delectus deleniti cum ipsa harum incidunt. Molestias magni voluptas nemo quisquam, numquam possimus necessitatibus omnis cumque labore libero? Fugiat odio voluptatem qui optio hic.
            </div>
            </div>
            <div id='bookInstanceContainer'class ='bigBorder scroll'>

              <div class='containerBookInstanceItem smallBorder'> 
                <p class='bookInstanceText iSBNtext'>324.001</p>
                <p class='bookInstanceText lendText'>uitgeleend aan jopus maximus </p>
                <p class='bookInstanceText condition'>beschadigd</p>
                <button class="dropDownButton">\/</button>
              </div>
              {books.map(book=>(createBookInstanceItem(book)))}     
            </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default BookInfo;
  /*
            <div class='containerBookInstanceItem smallBorder'> 
              <p class='bookInstanceText iSBNtext'>324.</p>
              <p class='bookInstanceText lendText'>uitgeleend aan bob </p>
              <p class='bookInstanceText condition'>beschadigd</p>
              <button class="dropDownButton">\/</button>
            </div>
            <div class='containerBookInstanceItem smallBorder'> 
              <p class='bookInstanceText iSBNtext'>324.001</p>
              <p class='bookInstanceText lendText'>uitgeleend aan jopus maximus Ultranus supirius dopius nalturius academius </p>
              <p class='bookInstanceText condition'>beschadigd</p>
              <button class="dropDownButton">\/</button>
            </div>
            <div class='containerBookInstanceItem smallBorder'> 
              <p class='bookInstanceText iSBNtext'>324.001</p>
              <p class='bookInstanceText lendText'>uitgeleend aan jopus maximus </p>
              <p class='bookInstanceText condition'>nieuw</p>
              <button class="dropDownButton">\/</button>
            </div>
            <div class='containerBookInstanceItem smallBorder'> 
              <p class='bookInstanceText iSBNtext'>324.</p>
              <p class='bookInstanceText lendText'>uitgeleend aan bob </p>
              <p class='bookInstanceText condition'>nieuw</p>
              <button class="dropDownButton">\/</button>
            </div>
              */