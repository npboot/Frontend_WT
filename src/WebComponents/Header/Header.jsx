import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {CatalogBT, HomePageBT, ReserveBookBT, BorrowingOverviewBT} from '../RoutingButtonCreation/HeaderNavigationButtons';
import "./Header.css"

function Header(){
return (
<ButtonGroup id="ButtonGroup"  sx={{
    ".MuiButtonGroup-grouped": {
    borderColor:"#black",
    fontWeight: 700,
    color: "black",
    borderRadius: 0,
    },
  }}variant="contained" size="lg" fullWidth aria-label="Basic button group">
  <HomePageBT>Home</HomePageBT>/
  <CatalogBT >Catalogus</CatalogBT>
  <ReserveBookBT>Reservering</ReserveBookBT>
  <BorrowingOverviewBT>Leningen</BorrowingOverviewBT>
  <Button>TBA</Button>
</ButtonGroup>
);
}


export default Header;