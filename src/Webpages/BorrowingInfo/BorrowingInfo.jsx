import "./BorrowingInfo.css"
import Header from "../../WebComponents/Header/Header";
import { ConfigurableRouteNavigationBTNoFill } from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton";
import { useNavigate } from "react-router";

function BorrowInfo() {
    const navigate = useNavigate();
    const navigateToAddBookInfoPage = (value) => {
        navigate("/Info",{state:{isbn:value}})};
    /*
    const props = {
        isbn: 123456,
        status: "uitgeleend",
        title: "Java voor dummies",
        author: "John Doe",
        copyNr: "001", 
        note: "Staat in de kast op kantoor in Amsterdam. Mag uit de kast gepakt worden bij lening",
        startDate: "01-01-2024",
        endDate: ""
    };
    */
    const props = {
        isbn: 12336412376,
        status: "ingeleverd",
        title: "Java voor dummies",
        author: "John Doe",
        copyNr: "001",
        note: "Staat in de kast op kantoor in Amsterdam. Mag uit de kast gepakt worden bij lening.",
        startDate: "01-01-2024",
        endDate: "15-01-2024"
    };
    

    function navigationRowButtons(status, isbn){
        if (status=="uitgeleend") {
            return(
                <div className="navigationRowButtons">
                    <button className="darkButton" onClick={()=>(navigateToAddBookInfoPage(props.isbn))}>Boek informatie</button>
                    <button className="darkButton">Inleveren</button>
                </div>
            )   
        } else {
            return( 
            <div className="navigationRowButtons">
                <button className="darkButton" onClick={()=>(navigateToAddBookInfoPage(props.isbn))}>Boek informatie</button>
            </div>
        )}
    }

    function borrowStatusRow(status, startDate, endDate){
        if (status=="uitgeleend") {
            return(
                <div className="tableRow thinBorder">
                    <p className="noMargin">Status: <strong>geleend</strong>&emsp;Geleend sinds: {startDate}</p>
                </div>
            );
        } else {
            return(
                <div className="tableRow thinBorder">
                    <p className="noMargin">Status: <strong>ingeleverd</strong>&emsp;Geleend op: {startDate}&emsp;Teruggebracht op: {endDate}</p>
                </div>
            );
        }

    }

    

    return (
        <div className="BorrowInfo">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
                <div className="navigationRow flexRow">
                    <div className="catalogReturn" align="left">
                        <ConfigurableRouteNavigationBTNoFill route={"/Catalogus"} text={"terug naar catalogus"} />
                    </div>
                    {navigationRowButtons(props.status, props.isbn)}
                </div>
                <div className="BorrowItemTable mediumBorder">
                    <div className="tableHeader tableRow">
                        <p>{props.title}, {props.author}</p>
                    </div>
                    <div className="tableRow thinBorder">
                        <p className="noMargin">Exemplaar #{props.copyNr}</p>
                    </div>
                    {borrowStatusRow(props.status, props.startDate, props.endDate)}
                    <div className="tableRow thinBorder noMargin noteRow">
                        <p className="noMargin">Notities: <br></br>{props.note}</p>
                    </div>
                </div>
            </div>
            <div />
        </div>     
);}

export default BorrowInfo