import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
const Ragister = () => {

    let navigate=useNavigate();
    let [data,setData]=React.useState({
        name:"",
        email:"",
        password:"",
        age:0
    })


    async function storeData(data){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify(data);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch(`${BASE_URL}/user/ragister`, requestOptions)
          .then((response) =>{
            if(response.ok){
                  alert("USER SAVED");
                  navigate("/login");
            }
               return response;
          })
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
    }


    function handleClick(e){
        e.preventDefault();
        storeData(data)
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
            <h3>Register your self</h3>
            <div>
                <form action="">
                    <input placeholder='name' name="name"  value={data.name} onChange={(e)=>handleChange(e)} type="text" />
                    <input placeholder='email' name='email'  value={data.email} onChange={(e)=>handleChange(e)} type="text" />
                    <input placeholder='password' name='password'  value={data.password} onChange={(e)=>handleChange(e)} type="text" />
                    <input placeholder='age' name='age'  value={data.age} onChange={(e)=>handleChange(e)} type="text" />
                    <input type="submit" onClick={(e)=>handleClick(e)} />
                 </form>

            </div>
        </div>
    );
}

export default Ragister;
