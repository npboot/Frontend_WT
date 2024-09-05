import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function EditBookCatalogBT() {
    const navigate = useNavigate();
    const SetNavigate = (tempUserType) => {
        navigate("/Catalogus");
    };
    return (
  <Button color='Black' style={{marginLeft:"5%", paddingTop:"1%", paddingBottom:"1%"}} onClick={()=>{SetNavigate()}}><ArrowBackIcon/> Terug naar catalogus</Button>
    );
  }