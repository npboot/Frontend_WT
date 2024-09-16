import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Button created without border or fill, shows a back arrow with text related to the route
export function ConfigurableRouteNavigationBTNoFill({route,text}) {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate(route);
    };
    return (
        <Button style={{paddingTop:"1%", paddingBottom:"1%", color: "black"}} onClick={()=>{SetNavigate()}}><ArrowBackIcon/> {text}</Button>
    );
  }

  export function ConfigurableRouteNavigationBTFill({route,text}) {
    const navigate = useNavigate();
    const SetNavigate = () => {
        navigate(route);
    };
    return (
  <Button onClick={()=>{SetNavigate()}}>{text}</Button>
    );
  }