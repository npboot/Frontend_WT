import { useNavigate } from "react-router";
import { useEffect } from "react";

export function ToHomePage(){
//ToDo How to validate active user type to route to homepage
    let tempUserType="";
    const navigate = useNavigate();

    if(tempUserType==="Trainee"){
        navigate("/Trainee");
        }
        else{
        navigate("/Trainer") ;
        }
 }

 export function ToLogin(){
    const navigate = useNavigate();

     navigate("");

}

export function ToBookInfo(){
    const navigate = useNavigate();

      navigate("/Info");

}

export function ToCatalog(){
    const navigate = useNavigate();

      navigate("/Catalogus");

}

export function ToEditBook(){
    const navigate = useNavigate();

     navigate("/BoekAanpassen",{});
}

