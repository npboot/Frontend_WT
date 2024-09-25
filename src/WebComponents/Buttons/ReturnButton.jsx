function ReturnButton({borrowingId, name}){
    const returnBorrowingAPI = `api/borrowing/returnBorrowing?borrowingId=${borrowingId}`;
    const options = {
        method: 'PUT'
      };
    async function returnBorrowing(){
        await fetch(returnBorrowingAPI, options)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log('Resource updated successfully:', data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
            
            window.location.reload(false);  
                }
            return(
                <button className={name} onClick={()=>(returnBorrowing())}>Inleveren</button>
            )
            }

export default ReturnButton