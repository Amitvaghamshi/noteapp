import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
   
    const navigate = useNavigate();
    let [data,setData]=React.useState({
        email:"",
        password:"",
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
        
        fetch("http://localhost:5000/user/login", requestOptions)
          .then((response) =>{
            return response.json();
          })
          .then((result) => {
             if(result.token){
                localStorage.setItem("jwt",result.token);
                alert("Login Success");
                navigate("/notes")
             }else{
                alert(result.msg);
             }
            
          })
          .catch((error) => console.error(error));
    }


    function handleClick(e){
        e.preventDefault();
        storeData(data)
       // console.log(data);
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
            <h3>Login To account</h3>
            <div>
                <form action="">
                    <input placeholder='email' name='email'  value={data.email} onChange={(e)=>handleChange(e)} type="text" />
                    <input placeholder='password' name='password'  value={data.password} onChange={(e)=>handleChange(e)} type="text" />
                    <input type="submit" onClick={(e)=>handleClick(e)} />
                 </form>
            </div>
        </div>
    );
}

export default Login;
