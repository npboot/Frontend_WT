import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ConfigurableRouteNavigationBT({route,text}) {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate(route);
    };
    return (
        <Button style={{marginLeft:"5%", paddingTop:"1%", paddingBottom:"1%"}} onClick={()=>{SetNavigate()}}><ArrowBackIcon/> {text}</Button>
    );
  }