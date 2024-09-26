import { ConfigurableRouteNavigationBTNoFill } from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton"
import Header from "../../WebComponents/Header/Header"
import "./BorrowingOverview.css"
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import ReturnButton from "../../WebComponents/Buttons/ReturnButton"

function BorrowingOverview() {
    const userId = 4;
    const getAllBorrowingsAPI = `${process.env.REACT_APP_BASE_API_URL}/borrowing/getBorrowings?userId=${userId}`;
    const getAllRequestsAPI = `${process.env.REACT_APP_BASE_API_URL}/borrowing/getRequests?userId=${userId}`;

    const navigate = useNavigate();
    const navigateToBorrowingInfo = (value) => {
        navigate("/leningInformatie",{state:{borrowingId:value}})};
   
    const [activeBorrowings, setActiveBorrowings] = useState([]);
    const [inactiveBorrowings, setInactiveBorrowings] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [deniedRequests, setDeniedRequests] = useState([]);

    useEffect(()=>{
      async function getAllBorrowings() {
        try {
            const response = await fetch(getAllBorrowingsAPI); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const allBorrowingsJson = await response.json();
            
            const collectionActiveBorrowings = allBorrowingsJson.filter(borrowing => borrowing.status==="actief");
            collectionActiveBorrowings.map(borrowing=>(borrowing.borrowingDate = borrowing.borrowingDate.slice(0,10)));
            console.log("select collections activeborrowings: "+allBorrowingsJson)
            const collectionInactiveBorrowings = allBorrowingsJson.filter(borrowing => borrowing.status==="ingeleverd");    
            collectionInactiveBorrowings.map(borrowing=>(borrowing.borrowingDate = borrowing.borrowingDate.slice(0,10)));
            collectionInactiveBorrowings.map(borrowing=>(borrowing.returnDate = borrowing.returnDate.slice(0,10))) ; 

            setActiveBorrowings(collectionActiveBorrowings);
            setInactiveBorrowings(collectionInactiveBorrowings);      
        } catch (error) {
            console.error('Error fetching catalog data:', error);
        };};

        async function getAllRequests() {
            try {
                const response = await fetch(getAllRequestsAPI); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const allRequestsJson = await response.json();
                console.log(allRequestsJson);
                
                const collectionPendingRequests = allRequestsJson.filter(request => request.status==="pending");
                collectionPendingRequests.map(request=>(request.requestDate = request.requestDate.slice(0,10)));
    
                setPendingRequests(collectionPendingRequests);   
            } catch (error) {
                console.error('Error fetching catalog data:', error);
            };};
      
        getAllRequests();
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

    function pendingRequestsTable(){
        if (pendingRequests.length > 0){
        return(
            <div className="pendingRequestsTable mediumBorder">
            <div className="tableHeader tableRow">
                <p className="column1 noMargin">Titel</p>
                <p className="column2 noMargin">Auteur</p>
                <p className="column3 noMargin">Aavraagdatum</p>
                <p className="column4 noMargin"></p>
                <p className="column5 noMargin"></p>
            </div>
            {pendingRequests.map(propsPendingRequest=>(pendingRequestRow(propsPendingRequest)))}                   
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

    function pendingRequestRow(propsPendingRequest){
        return(
            <div className="tableRow noMargin thinBorder">
                <p className="column1">{propsPendingRequest.title}</p>
                <p className="column2">{propsPendingRequest.authorName}</p>
                <p className="column3">{propsPendingRequest.requestDate}</p>
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
                <div className="pendingRequests">
                    <h1>Aanvragen</h1>
                    {pendingRequestsTable()}
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