import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router";
import {ToLogin,ToBookInfo,ToCatalog,ToEditBook} from "../../Navigation/initiateRouting.js"

function Header(){
return (
<ButtonGroup id="ButtonGroup"  sx={{
    ".MuiButtonGroup-grouped": {
    borderColor:"#black",
    background:"#05b336",
    fontWeight: 700,
    color: "black",
    borderRadius: 0,
    },
  }}variant="contained" size="lg" fullWidth aria-label="Basic button group">
  <Button onClick={()=>{ToHomePage()}}>Home</Button>
  <Button onClick={()=>{ToCatalog()}}>Catalogus</Button>
  <Button onClick={()=>{ToBookInfo()}}>Reservering</Button>
  <Button>TBA</Button>
  <Button>TBA</Button>
</ButtonGroup>
);
}

function ToHomePage(){
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

export default Header;