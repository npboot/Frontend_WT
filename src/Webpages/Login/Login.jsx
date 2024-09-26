import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton.jsx"
import Header from "../../WebComponents/Header/Header.jsx"
import { useEffect } from 'react';
import "./Login.css"
//import jwt from 'jsonwebtoken';
import { jwtDecode }from 'jwt-decode';
import { useState } from 'react';
import {  useNavigate } from 'react-router'


function Login() {
  const [titel,setTitle] = useState("Vul uw email en wachtwoord in om in te loggen.");
  
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
            try{
              const response = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json" 
              },
                body: JSON.stringify(jsonData)})
                
              getTheAccesToken(await response.json() );

            } catch (error) {
              setTitle("Probeer het opnieuw, wij herkennen deze email en wachtwoord combinatie niet.");
              console.error('Error incorrect login data:', error);
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

const navigate = useNavigate();
  const navigateToCatalogusPage = () => {
      navigate("/Catalogus")}

function getTheAccesToken(data){
  
  const decodedResult = jwtDecode(data.accessToken);
  localStorage.setItem("UserEmail",decodedResult.sub);
  localStorage.setItem("UserAuthorities",decodedResult.authorities[0]);
  localStorage.setItem("UserID",decodedResult.userID);
  localStorage.setItem("UserToken",data.accessToken);

  setTitle("Even gedult, u wordt nu ingelogd.");
  navigateToCatalogusPage();
  //console.log("UserEmail: "+localStorage.getItem("UserEmail"));
  //console.log("UserAuthorities: "+localStorage.getItem("UserAuthorities"));
  
}

    
console.log(localStorage.getItem("UserInfo"));
return (
      <div className="Login">


      <div className="content">
      
          <div id="addBookTable">
          <div className="tableHeader tableRow">
              <p>{titel}</p>
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
              <input className="column2" type="password" id="password" name="password" required></input><br></br>
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