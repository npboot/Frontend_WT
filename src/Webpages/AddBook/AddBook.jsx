
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton.jsx"
import Header from "../../WebComponents/Header/Header.jsx"
import { useEffect } from 'react';
import "./AddBook.css"


function AddBook(){
    useEffect(() => {
        // Attaching the event listener after the component mounts
        const form = document.getElementById("bookForm");
        if (form) {
            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent the default form submission behavior
                // Gather the input values from the form
                const title = document.getElementById("title").value;
                const isbn = parseInt(document.getElementById("isbn").value);
                const year = parseInt(document.getElementById("year").value);
                const isOnline = document.getElementById("isOnline").checked;
                const isPhysical = document.getElementById("isPhysical").checked;
                const summary = document.getElementById("summary").value;
                const authorName = document.getElementById("authorName").value;
                const categoryName = document.getElementById("categoryName").value;

                // Create the JSON object in the expected format
                const jsonData = {
                    book: {
                        title: title,
                        isbn: isbn,
                        isOnline: isOnline,
                        isPhysical: isPhysical,
                        summary: summary
                    },
                    
                    author: [{
                        name: authorName
                        }],                    
                    
                    categories: [{
                        name: categoryName
                    }],

                    year: year,                        
                    };
                // Send the POST request to the backend API
                fetch("${BASE_API_URL}/book/addBook", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Ensure the server expects JSON
                    },
                    body: JSON.stringify(jsonData) // Convert the data to JSON format
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Success check:", JSON.stringify(jsonData));
                    // You can handle success or failure here
                })
                .catch(error => {
                    console.error("Error check:", JSON.stringify(jsonData));
                });
            });
        }
 
        // Clean up the event listener when the component unmounts
        return () => {
            if (form) {
                form.removeEventListener("submit", () => {});
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once (on mount)
 


    return(
        <div className="addBook">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
            <div className="navigation">
                <div className="catalogReturn" align="left">
                <ConfigurableRouteNavigationBTNoFill route={"/Catalogus"} text = {"terug naar catalogus"}/>
                </div>
            </div>
            
                <div id="addBookTable">
                <div className="tableHeader tableRow">
                    <p>Boek toevoegen</p>
                </div>
                <form id="bookForm">
                    <div className="addBookTableContent tableRow">
                    <div className="column1and2">
                    <div className="tableRow">
                    <label className="column1" htmlFor="title">Title:</label>
                    <input className="column2" type="text" id="title" name="title" required></input><br></br>
                    </div>
                    <div className="tableRow">
                    <label className="column1" htmlFor="isbn">ISBN:</label>
                    <input className="column2" type="number" id="isbn" name="isbn" required></input><br></br>
                    </div>
                    <div className="tableRow">
                    <label className="column1" htmlFor="year">Year:</label>
                    <input className="column2" type="number" id="year" name="year" required></input><br></br>
                    </div>                    
                    <div className="tableRow">
                    <label className="column1" htmlFor="authorName">Auteur:</label>
                    <input className="column2" type="text" id="authorName" name="authorName" required></input><br></br>
                    </div>
                    <div className="tableRow">
                    <label className="column1" htmlFor="categoryName">Category:</label>
                    <input className="column2" type="text" id="categoryName" name="categoryName" required></input><br></br>
                    </div>
                    <div className="tableRow checkboxRow">
                    <input type="checkbox" id="isOnline" name="isOnline"></input>
                    <label htmlFor="isOnline">Online boek</label><br></br>                   
                    <input type="checkbox" id="isPhysical" name="isPhysical"></input>
                    <label htmlFor="isPhysical">Fysiek boek</label><br></br>
                    </div>
                    <div className="tableRow">                    
                    <label htmlFor="summary">Samenvatting:</label>
                    </div>
                    <div className="tableRow">
                    <textarea className="scroll" type="text" id="summary" name="summary" required></textarea><br></br>
                    </div>   
                    <div className="tableRow">              
                    <button className="darkButton" type="submit">Toevoegen</button>
                    </div>   
                    </div>
                    </div>
                </form>
                </div>
            </div>                 
        </div>
    );
    
}
export default AddBook