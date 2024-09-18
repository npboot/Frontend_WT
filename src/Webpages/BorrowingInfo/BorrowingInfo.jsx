import "./BorrowingInfo.css"
import Header from "../../WebComponents/Header/Header";
import { ConfigurableRouteNavigationBTNoFill } from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton";
import { useNavigate } from "react-router";

function BorrowingInfo() {
    const navigate = useNavigate();
    const navigateToAddBookInfoPage = (value) => {
        navigate("/Info",{state:{isbn:value}})};

    const data = {
            "borrowingId": 1,
            "request": {
                "requestId": 1,
                "user": {},
                "physicalBook": {
                    "book": {
                        "isbn": 444444,
                        "authors": [
                            {
                                "authorId": 6,
                                "name": "Joe"
                            },
                            {
                                "authorId": 5,
                                "name": "Loe"
                            },
                            {
                                "authorId": 4,
                                "name": "Hoe"
                            }
                        ],
                        "title": "check",
                        "summary": "Beste samenvatting die je ooit zult zien",
                        "year": "2014",
                        "categories": [
                            {
                                "categoryId": 6,
                                "category": "BEGINNER"
                            },
                            {
                                "categoryId": 4,
                                "category": "PROGRAMMING"
                            },
                            {
                                "categoryId": 5,
                                "category": "C#"
                            }
                        ],
                        "isOnline": true,
                        "isPhysical": true
                    },
                    "stock": 1,
                    "archived": false
                },
                "requestDate": "2024-09-10T00:00:00.000+00:00",
                "requestStatus": {
                    "requestStatusId": 2,
                    "requestStatusType": "afgekeurd"
                }
            },
            "physicalBookCopy": {
                "copyId": 1,
                "physicalBook": {
                    "book": {
                        "isbn": 444444,
                        "authors": [
                            {
                                "authorId": 6,
                                "name": "Joe"
                            },
                            {
                                "authorId": 5,
                                "name": "Loe"
                            },
                            {
                                "authorId": 4,
                                "name": "Hoe"
                            }
                        ],
                        "title": "check",
                        "summary": "Beste samenvatting die je ooit zult zien",
                        "year": "2014",
                        "categories": [
                            {
                                "categoryId": 6,
                                "category": "BEGINNER"
                            },
                            {
                                "categoryId": 4,
                                "category": "PROGRAMMING"
                            },
                            {
                                "categoryId": 5,
                                "category": "C#"
                            }
                        ],
                        "isOnline": true,
                        "isPhysical": true
                    },
                    "stock": 1,
                    "archived": false
                },
                "physicalCondition": {
                    "physicalConditionId": 1,
                    "conditionType": "nieuw"
                },
                "borrowingStatus": {
                    "borrowingStatusId": 2,
                    "borrowingStatusType": "actief"
                },
                "purchaseDate": "2024-09-17T11:51:07.000+00:00",
                "archived": false
            },
            "startDate": "2024-09-03T11:54:32.000+00:00",
            "returnDate": "2024-09-17T11:54:32.000+00:00",
            "borrowingStatus": {
                "borrowingStatusId": 2,
                "borrowingStatusType": "uitgeleend"
                /*"borrowingStatusType": "ingeleverd"*/
            }
        }
    const authors = data.physicalBookCopy.physicalBook.book.authors;
    const authorNames = authors.map(author=>(author.name));
    const props = {
            isbn: data.physicalBookCopy.physicalBook.book.isbn,
            status: data.borrowingStatus.borrowingStatusType,
            title: data.physicalBookCopy.physicalBook.book.title,
            author: authorNames.join(", "),
            copyNr: data.physicalBookCopy.copyId,
            startDate: data.startDate,
            endDate: data.returnDate
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

    function borrowingStatusRow(status, startDate, endDate){
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
        <div className="BorrowingInfo">
            {console.log(props)}
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
                <div className="BorrowingItemTable mediumBorder">
                    <div className="tableHeader tableRow">
                        <p>{props.title}, {props.author}</p>
                    </div>
                    <div className="tableRow thinBorder">
                        <p className="noMargin">Exemplaar #{props.copyNr}</p>
                    </div>
                    {borrowingStatusRow(props.status, props.startDate, props.endDate)}
                    <div className="tableRow thinBorder noMargin noteRow">
                        <p className="noMargin">Notities: <br></br>Neem contact op met de trainers voor meer infomatie over het ophalen, opsturen en inleveren van geleende boeken</p>
                    </div>
                </div>
            </div>
            <div />
        </div>     
);}

export default BorrowingInfo