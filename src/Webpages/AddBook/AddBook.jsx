
import {ConfigurableRouteNavigationBTNoFill} from "../../WebComponents/RoutingButtonCreation/ConfigurableRouteNavigationButton.jsx"
import Header from "../../WebComponents/Header/Header.jsx"
import { useForm } from "react-hook-form";
import "./AddBook.css"


function AddBook(){
 
    const {
        register,
        handleSubmit,
        watch,
        reset
      } = useForm();
    
      const watchIsPhysical = watch('book.isPhysical', false);
    
    const onSubmit = async (data)=> {
        try{
            await fetch(`api/book/addBook`, 
                {   method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                })
                console.log("added: "+JSON.stringify(data))
                reset();
        } catch (e) {
            console.log("Error: "+e)
        }

    }

    return(
        <div className="addBook">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
            <div className="navigation">
                <div className="catalogReturn" align="left">
                <ConfigurableRouteNavigationBTNoFill route={"/Catalogus"} text = {"terug naar catalogus"}/>
                </div>
            </div>
            
                <div id="addBookTable">
                <div className="tableHeader tableRow">
                    <p>Boek toevoegen</p>
                </div>
                <form id="bookForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="addBookTableContent tableRow">
                    <div className="column1and2">
                    <div className="tableRow">
                    <label className="column1" htmlFor="title">Title:</label>
                    <input className="column2" type="text" id="title" name="title" {...register('book.title', {required: true})}></input><br></br>
                    </div>
                    <div className="tableRow">
                    <label className="column1" htmlFor="isbn">ISBN:</label>
                    <input className="column2" type="number" id="isbn" name="isbn" {...register('book.isbn', {required: true, valueAsNumber: true})}></input><br></br>
                    </div>
                    <div className="tableRow">
                    <label className="column1" htmlFor="year">Year:</label>
                    <input className="column2" type="number" id="year" name="year" {...register('year', {required: true, valueAsNumber: true})}></input><br></br>
                    </div>                    
                    <div className="tableRow">
                    <label className="column1" htmlFor="authorName">Auteur:</label>
                    <input className="column2" type="text" id="authorName" name="authorName" {...register('author.0.name', {required: true})}></input><br></br>
                    </div>
                    <div className="tableRow">
                    <label className="column1" htmlFor="categoryName">Category:</label>
                    <input className="column2" type="text" id="categoryName" name="categoryName" {...register('categories.0.categoryName', {required: true})}></input><br></br>
                    </div>
                    <div className="tableRow checkboxRow">
                    <input type="checkbox" id="isOnline" name="isOnline" {...register('book.isOnline')}></input>
                    <label htmlFor="isOnline">Online boek</label><br></br>                   
                    <input type="checkbox" id="isPhysical" name="isPhysical" {...register('book.isPhysical')}></input>
                    <label htmlFor="isPhysical">Fysiek boek</label><br></br>
                    </div>
                    {watchIsPhysical &&  
                        (<div className="tableRow">
                            <label className="column1" htmlFor="amount">Hoeveelheid:</label>
                            <input className="column2" type="number" id="amount" name="amount" {...register('amount', {required: true, valueAsNumber: true})}></input><br></br>
                        </div>)
                    }                       
                    <div className="tableRow">                    
                    <label htmlFor="summary">Samenvatting:</label>
                    </div>
                    <div className="tableRow">
                    <textarea className="scroll" type="text" id="summary" name="summary" {...register('book.summary', {required: true})}></textarea><br></br>
                    </div>   
                    <div className="tableRow">              
                    <button className="darkButton" type="submit">Toevoegen</button>
                    </div>   
                    </div>
                    </div>
                </form>
                </div>
            </div>                 
        </div>
    );
    
}
export default AddBook