import { ConfigurableRouteNavigationBTNoFill } from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import Header from "../../WebComponents/Header/Header"
import "./BorrowingOverview.css"
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function BorrowingOverview() {
    const userId = 1;
    const getAllBorrowingsAPI = `http://localhost:8082/borrowing/getBorrowings?userId=${userId}`;

    const navigate = useNavigate();
    const navigateToBorrowingInfo = (value) => {
        navigate("/leningInformatie",{state:{borrowingId:value}})};

    
   
    const [activeBorrowings, setActiveBorrowings] = useState([]);
    const [inactiveBorrowings, setInactiveBorrowings] = useState([]);
    const propsActiveRequests = [{
        isbn: 123456,
        status: "in afwachting",
        title: "python voor dummies",
        authorName: "Auteur",
        copyID: 1,
        note: "",
        requestDate: "2024-09-17"
    }]
    
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

   
    
    function activeBorrowingRow(borrowing){
        const borrowingId = borrowing.borrowingId;
    
        return(
            <div className="tableRow noMargin thinBorder" onClick={()=>(navigateToBorrowingInfo(borrowing.borrowingId))}>
                <p className="column1">{borrowing.copyID}</p>
                <p className="column2">{borrowing.title}</p>
                <p className="column3">{borrowing.authorName}</p>
                <p className="column4">{borrowing.borrowingDate}</p>
                <button className="column5 darkButton"  >Inleveren</button>
            </div>
        )
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
                <div className="activeRequests">
                    <h1>Aanvragen</h1>
                <div className="activeRequestsTable mediumBorder">
                    <div className="tableHeader tableRow">
                        <p className="column1 noMargin">Titel</p>
                        <p className="column2 noMargin">Auteur</p>
                        <p className="column3 noMargin">Aavraagdatum</p>
                        <p className="column4 noMargin"></p>
                        <p className="column5 noMargin"></p>
                    </div>
                    {propsActiveRequests.map(propsActiveRequest=>(activeRequestRow(propsActiveRequest)))}                   
                </div>
                <div className="inactiveBorrowings">
                    <h1>Ingeleverd</h1>
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
                </div>
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default BorrowingOverview