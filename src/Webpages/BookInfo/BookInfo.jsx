
import './BookInfo.css';
import Header from "../../WebComponents/Header/Header";

function BookInfo() {
    return (
      
      
 
      <div className="BookInfo">
        <div>
        <Header />
      </div>
        <img src = "/logo192.png" alt= "image" class = "backToCatalogusArrow"></img>
      
      <span>Terug naar catalogus</span>
      <div class='container bigBorder'>
        <div class='titleHeader bigBorder'>
          <h2 class='noMargin'>Java voor dummies</h2>
          <button id='exemplaarToevoegenButton'>+ exemplaar toevoegen</button>
          
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
          <div id='bookInstanceContainer'class ='bigBorder '>

            <div class='containerBookInstanceItem smallBorder'> 
              <p class='bookInstanceText iSBNtext'>324.001</p>
              <p class='bookInstanceText lendText'>uitgeleend aan jopus maximus </p>
              <p class='bookInstanceText condition'>beschadigd</p>
              <button class="dropDownButton">\/</button>
            </div>
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
          </div>
      </div>
      </div>
    );
  }
  
  export default BookInfo;