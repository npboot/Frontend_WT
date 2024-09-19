import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

export function HomePageBT() {
    let tempUserType="Trainee";
    const navigate = useNavigate();
    const SetNavigate = (tempUserType) => {
    if(tempUserType==="Trainee"){
        navigate("/Trainee");
    }
    else{
        navigate("/Trainer") ;
    }
    };
    return (
  <Button onClick={()=>{SetNavigate()}}>Home</Button>
    );
  }

  export function CatalogBT() {
    const navigate = useNavigate();
    const SetNavigate = (tempUserType) => {
        navigate("/Catalogus");
    };
    return (
  <Button onClick={()=>{SetNavigate()}}>Catalogus</Button>
    );
  }

  export function LoginBT() {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate("");
    };
    return (
  <Button onClick={()=>{SetNavigate()}}>Log Out</Button>
    );
  }

  export function BookInfoBT() {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate("/Info");
    };
    return (
        <Button onClick={()=>{SetNavigate()}}>Boek info</Button>
    );
  }

  export function EditBookBT() {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate("/BoekAanpassen");
    };
    return (
        <Button onClick={()=>{SetNavigate()}}>Boek aanpassen</Button>
    );
  }
  
  export function ReserveBookBT() {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate("/Reservering");
    };
    return (
        <Button onClick={()=>{SetNavigate()}}>Reservering</Button>
    );
  }

  export function BorrowingOverviewBT() {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate("/LeningenOverzicht");
    };
    return (
        <Button onClick={()=>{SetNavigate()}}>Leningen</Button>
    );
  }