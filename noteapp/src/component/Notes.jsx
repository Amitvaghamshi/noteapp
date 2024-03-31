import React from 'react';
import AddNote from './AddNote';

const Notes = () => {

    let [data,setData]= React.useState([]);

   async function deleteNote(id){
        const myHeaders = new Headers();
        let token=localStorage.getItem("jwt");
        myHeaders.append("Authorization", token);
        
        const requestOptions = {
          method: "DELETE",
         headers: myHeaders,
        };
        
       let response= await fetch(`http://localhost:5000/notes/delete/${id}`,requestOptions);
       await response.json();
       getData();
     }

   async function getData(){
         
    const myHeaders = new Headers();
    let token=localStorage.getItem("jwt");
    myHeaders.append("Authorization", token);
    
    const requestOptions = {
      method: "GET",
     headers: myHeaders,
    };
    
   let response= await fetch("http://localhost:5000/notes",requestOptions);
   let data= await response.json();
   console.log(data);
   if(data.data){
      setData(data.data);
   }

}

    React.useEffect(()=>{
        getData();
          
    },[]);

    return (
        <div>
            <h1  >All the Notes</h1>
            <AddNote  getData={getData} />
            {data.length==0?<div>
                <h3 style={{marginLeft:"30px"}} > Opps! you dont have any Notes</h3>
            </div>:
                data.map((el)=>{  
                     return <div key={el._id} style={{border:"1px solid green",marginBottom:"20px",padding:"15px"}}>
                              <h2>{el.title}</h2>
                              <p>{el.description}</p>
                              <button onClick={()=>{
                                  deleteNote(el._id);
                              }} >DELETE NOTE</button>
                            </div>
                })
            }
        </div>
    );
}

export default Notes;
