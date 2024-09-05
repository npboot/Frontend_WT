import {Button,Box,Grid2 as Grid,TextField} from '@mui/material';
import Header from "../../WebComponents/Header/Header";
import { EditBookCatalogBT } from '../../WebComponents/RoutingButtonCreation/EditBookNavigationButtons';

function EditBook() {
    return (
      <div>
        <div name="header">
        <Header/>
        </div>
        <div className="EditBook">
          <div class="catalogReturn" align="left">
          <EditBookCatalogBT/>
          </div>
          <div class= "AddBookContainer">
          <Box sx={{ border: 1,borderColor: 'text.primary'}} style={{marginLeft:"7%",marginRight:"7%", paddingBottom:"1%"}}>
            <Box sx={{background:"#447535", alignContent:"flex-start"}}>
              <p style={{color: "white", fontWeight: 700, textAlign:"left", paddingLeft:"2%"}}>Boek toevoegen aan catalogus</p>
            </Box>
          <Grid container spacing={2}>
            <Grid size={3} align={"left"} paddingLeft={"2%"}>
              <h4 style={{marginTop:15}}>Boek id</h4>
              <h4 style={{marginTop:25}}>Titel</h4>
              <h4 style={{marginTop:30}} >Auteur</h4>
              <h4 style={{marginTop:25}}>ISBN</h4>
              <h4 style={{marginTop:25}}>Aantal</h4>
              <h4 style={{marginTop:15}}>Uitgave datum</h4>
              <h4 style={{marginTop:25}}>Aanschaf datum</h4>
            </Grid>
            <Grid size={1} width={"20%"}marginRight={"10%"} align="left" rowSpacing={"2%"}>
              <TextField  sx={{marginTop:1}}  size='small' disabled={true}></TextField>
              <TextField sx={{marginTop:1}} fullWidth size='small'></TextField>
              <TextField sx={{marginTop:1}} fullWidth size='small'></TextField>
              <TextField sx={{marginTop:1}} fullWidth size='small'></TextField>
              <TextField sx={{marginTop:1}} fullWidth size='small'></TextField>
              <TextField sx={{marginTop:1}} fullWidth size='small'></TextField>
              <TextField sx={{marginTop:1}} fullWidth size='small'></TextField>
            </Grid>
          <Grid size={4}>
              <h4>Samenvatting</h4>
              <TextField fullWidth multiline rows={5} label="Samenvatting" size='medium'/>
              <Button sx={{background:"#77b2bf", color:"black", fontWeight:510,border:1, marginTop:"2%",borderColor:"#black",align:"flex-center"}}variant='contained' size="small" >Omslag afbeelding toevoegen</Button>
              <p></p>
              <Button sx={{background:"black", color:"white", fontWeight:510,marginLeft:3,border:1, borderColor:"#black",align:"bottom"}}variant='contained'  size="small" >Toevoegen</Button>
            </Grid>
          </Grid>
          </Box>
          </div>

        </div>
      </div>
    );
  }
  
  export default EditBook;