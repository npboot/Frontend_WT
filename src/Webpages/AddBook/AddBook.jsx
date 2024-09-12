
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton.jsx"
import { useNavigate } from 'react-router'
import Header from "../../WebComponents/Header/Header.jsx"
import { useEffect } from 'react';

 

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
                fetch("http://localhost:8082/book/addBook", {
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
            <div name="header">
                <Header/>
            </div>
            <div className="navigation">
                <div class="catalogReturn" align="left">
                <ConfigurableRouteNavigationBTNoFill route={"/Catalogus"} text = {"terug naar catalogus"}/>
                </div>
            </div>
            <div className="content">
                <form id="bookForm">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required></input><br></br>
                    <label for="isbn">ISBN:</label>
                    <input type="number" id="isbn" name="isbn" required></input><br></br>
                    <label for="year">Year:</label>
                    <input type="number" id="year" name="year" required></input><br></br>
                    <label for="isOnline">Online boek</label>
                    <input type="checkbox" id="isOnline" name="isOnline"></input><br></br>
                    <label for="isPhysical">Fysiek boek</label>
                    <input type="checkbox" id="isPhysical" name="isPhysical"></input><br></br>
                    <label for="summary">Samenvatting:</label>
                    <input type="text" id="summary" name="summary" required></input><br></br>
                    <label for="authorName">Auteur:</label>
                    <input type="text" id="authorName" name="authorName" required></input><br></br>
                    <label for="categoryName">Category:</label>
                    <input type="text" id="categoryName" name="categoryName" required></input><br></br>                    
                    <button type="submit">Submit</button>
                </form>
            </div>                 
        </div>
    );
    
}
export default AddBook