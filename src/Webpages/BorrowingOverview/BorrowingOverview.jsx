import { ConfigurableRouteNavigationBTNoFill } from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import Header from "../../WebComponents/Header/Header"
import "./BorrowingOverview.css"
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import ReturnButton from "../../WebComponents/Buttons/ReturnButton"

function BorrowingOverview() {
    const userId = 1;
    const getAllBorrowingsAPI = `http://localhost:8082/borrowing/getBorrowings?userId=${userId}`;

    const navigate = useNavigate();
    const navigateToBorrowingInfo = (value) => {
        navigate("/leningInformatie",{state:{borrowingId:value}})};
   
    const [activeBorrowings, setActiveBorrowings] = useState([]);
    const [inactiveBorrowings, setInactiveBorrowings] = useState([]);
    const [activeRequests, setActiveRequests] = useState([]);
    
    useEffect(()=>{
      async function getAllBorrowings() {
        try {
            const response = await fetch(getAllBorrowingsAPI); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const allBorrowingsJson = await response.json();
            
            const collectionActiveBorrowings = allBorrowingsJson.filter(borrowing => borrowing.status==="uitgeleend");
            collectionActiveBorrowings.map(borrowing=>(borrowing.borrowingDate = borrowing.borrowingDate.slice(0,10)));

            const collectionInactiveBorrowings = allBorrowingsJson.filter(borrowing => borrowing.status==="ingeleverd");    
            collectionInactiveBorrowings.map(borrowing=>(borrowing.borrowingDate = borrowing.borrowingDate.slice(0,10)));
            collectionInactiveBorrowings.map(borrowing=>(borrowing.returnDate = borrowing.returnDate.slice(0,10))) ; 

            setActiveBorrowings(collectionActiveBorrowings);
            setInactiveBorrowings(collectionInactiveBorrowings);      
        } catch (error) {
            console.error('Error fetching catalog data:', error);
        };};
      
        getAllBorrowings();  
      },[]  
    );

    function activeBorrowingsTable(){
        if (activeBorrowings.length > 0){
        return(
            <div className="activeBorrowingsTable mediumBorder">
                    <div className="tableHeader tableRow">
                        <p className="column1 noMargin">Exemplaar</p>
                        <p className="column2 noMargin">Titel</p>
                        <p className="column3 noMargin">Auteur</p>
                        <p className="column4 noMargin">Startdatum</p>
                        <p className="column5 noMargin"></p>
                    </div>
                    
                    {activeBorrowings.map(borrowing=>(activeBorrowingRow(borrowing)))}                   
                </div>
        )
        } else {
            return(
                <div>
                    <p>Geen actieve leningen.</p>
                </div>
            )
        }
    }

    function activeBorrowingRow(borrowing){
        return(
            <div className="tableRow noMargin thinBorder">
                <p className="column1" onClick={()=>(navigateToBorrowingInfo(borrowing.borrowingId))}>{borrowing.copyID}</p>
                <p className="column2" onClick={()=>(navigateToBorrowingInfo(borrowing.borrowingId))}>{borrowing.title}</p>
                <p className="column3" onClick={()=>(navigateToBorrowingInfo(borrowing.borrowingId))}>{borrowing.authorName}</p>
                <p className="column4" onClick={()=>(navigateToBorrowingInfo(borrowing.borrowingId))}>{borrowing.borrowingDate}</p>
                <ReturnButton borrowingId={borrowing.borrowingId} name={"column5 darkButton"}/>
            </div>
        )
    }

    function activeRequestsTable(){
        if (activeRequests.length > 0){
        return(
            <div className="activeRequestsTable mediumBorder">
            <div className="tableHeader tableRow">
                <p className="column1 noMargin">Titel</p>
                <p className="column2 noMargin">Auteur</p>
                <p className="column3 noMargin">Aavraagdatum</p>
                <p className="column4 noMargin"></p>
                <p className="column5 noMargin"></p>
            </div>
            {activeRequests.map(propsActiveRequest=>(activeRequestRow(propsActiveRequest)))}                   
        </div>
        )
        } else {
            return(
                <div>
                    <p>Geen openstaande aanvragen.</p>
                </div>
            )
        }
    }

    function activeRequestRow(propsActiveRequest){
        return(
            <div className="tableRow noMargin thinBorder">
                <p className="column1">{propsActiveRequest.title}</p>
                <p className="column2">{propsActiveRequest.authorName}</p>
                <p className="column3">{propsActiveRequest.requestDate}</p>
                <p className="column4"></p>
                <button className="column5 darkButton">Verwijderen</button>
            </div>
        )
    }

    function inActiveBorrowingsTable(){
        if (inactiveBorrowings.length > 0){
        return(
            <div className="inactiveBorrowingsTable mediumBorder">
                    <div className="tableHeader tableRow">
                        <p className="column1 noMargin">Exemplaar</p>
                        <p className="column2 noMargin">Titel</p>
                        <p className="column3 noMargin">Auteur</p>
                        <p className="column4 noMargin">Startdatum</p>
                        <p className="column5 noMargin">Ingeleverd</p>
                    </div>
                    
                    {inactiveBorrowings.map(borrowing=>(inactiveBorrowingRow(borrowing)))}                   
            </div>
        )
        } else {
            return(
                <div>
                    <p>Geen ingeleverde boeken.</p>
                </div>
            )
        }
    }


    function inactiveBorrowingRow(borrowing){
        return(
            <div className="tableRow noMargin thinBorder" onClick={()=>(navigateToBorrowingInfo(borrowing.borrowingId))}>
                <p className="column1">{borrowing.copyID}</p>
                <p className="column2">{borrowing.title}</p>
                <p className="column3">{borrowing.authorName}</p>
                <p className="column4">{borrowing.borrowingDate}</p>
                <p className="column5">{borrowing.returnDate}</p>
            </div>
        )
    }

    return(
        <div className="borrowingOverview">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
                <div className="navigationRow flexRow">
                    <div className="catalogReturn" align="left">
                        <ConfigurableRouteNavigationBTNoFill route={"/Catalogus"} text={"terug naar catalogus"} />
                    </div>
                </div>
                <div className="activeBorrowings">
                    <h1>Actieve leningen</h1>
                    {activeBorrowingsTable()}
                <div className="activeRequests">
                    <h1>Aanvragen</h1>
                    {activeRequestsTable()}
                <div className="inactiveBorrowings">
                    <h1>Ingeleverd</h1>
                    {inActiveBorrowingsTable()}                
                </div>
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default BorrowingOverview