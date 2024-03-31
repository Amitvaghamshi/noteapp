import React from 'react';

const AddNote = ({getData}) => {
    let initial_data={
        title:"",
        description:""
     };
    let [data,setData]=React.useState(initial_data)

    async function storeNote(data){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let token=localStorage.getItem("jwt");
        myHeaders.append("Authorization", token);

        const raw = JSON.stringify(data);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:5000/notes/create", requestOptions)
          .then((response) => {
               if(response.ok){
                   alert("DATA SAVED");
                   getData();
                   setData(initial_data);
               }
               return response.json();
          })
          .then((result) => {
                console.log(result);
          })
          .catch((error) => console.error(error));
    }


    function handleClick(e){
        e.preventDefault();
        storeNote(data)
        console.log(data);
    }


    function handleChange(e){
        let val=e.target.value;
        data[e.target.name]=val;
        setData({
            ...data
        })
    }

    return (
        <div>
            <h3 style={{marginLeft:"30px",marginBottom:"-20px",color:"green"}} >Add Note</h3>
            <div style={{margin:"30px"}} >
                <form action="">
                    <input placeholder='title' name="title"  value={data.title} onChange={(e)=>handleChange(e)} type="text" />
                    <input placeholder='description' name='description'  value={data.description} onChange={(e)=>handleChange(e)} type="text" />
                    <input type="submit" onClick={(e)=>handleClick(e)} />
                 </form>

            </div>
        </div>
    );
}

export default AddNote;
