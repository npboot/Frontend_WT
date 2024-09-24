import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton.jsx"
import Header from "../../WebComponents/Header/Header.jsx"
import { useEffect } from 'react';
import "./Login.css"
//import jwt from 'jsonwebtoken';
import { jwtDecode }from 'jwt-decode'


function Login() {
  
  useEffect(() => {
    // Attaching the event listener after the component mounts
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
            // Gather the input values from the form
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Create the JSON object in the expected format
            const jsonData = {
                email: email,
                password: password ,                      
                };
            const baseURL= 'http://localhost:8082';
            try{
              const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json" 
              },
                body: JSON.stringify(jsonData)})
                
              getTheAccesToken(await response.json() );

            } catch (error) {
              console.error('Error fetching catalog data:', error);
          };
        });
    }
    

    // Clean up the event listener when the component unmounts
    return () => {
        if (form) {
            form.removeEventListener("submit", () => {});
        }
    };
}, []); // Empty dependency array ensures this effect runs only once (on mount)



function getTheAccesToken(data){
  
  const decodedResult = jwtDecode(data.accessToken);
  localStorage.setItem("UserEmail",decodedResult.sub);
  localStorage.setItem("UserAuthorities",decodedResult.authorities[0]);

  localStorage.setItem("UserToken",data.accessToken);
  //console.log("UserEmail: "+localStorage.getItem("UserEmail"));
  //console.log("UserAuthorities: "+localStorage.getItem("UserAuthorities"));
  
}

    
console.log(localStorage.getItem("UserInfo"));
return (
      <div className="Login">
                    <div className="header">
                <Header/>
            </div>

      <div className="content">
      
          <div id="addBookTable">
          <div className="tableHeader tableRow">
              <p>vul uw email en wachtwoord in om in te loggen.</p>
          </div>
          <form id="loginForm">
              <div className="addBookTableContent tableRow">
              <div className="column1and2">
              <div className="tableRow">
              <label className="column1" htmlFor="email">Email:</label>
              <input className="column2" type="text" id="email" name="email" required></input><br></br>
              </div>
              <div className="tableRow">
              <label className="column1" htmlFor="password">Wachtwoord:</label>
              <input className="column2" type="text" id="password" name="password" required></input><br></br>
              </div>

              <div className="tableRow">              
              <button className="darkButton" type="submit">Login</button>
              </div>   
              </div>
              </div>
          </form>
          </div>
      </div>                 
  </div>
    );
  }
  
  export default Login;