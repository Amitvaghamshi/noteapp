import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate=useNavigate();
    
    let btn_style={margin:"10px",color:"White",fontWeight:"500",fontSize:"18px",padding:"7px",backgroundColor:"green",outline:"none",borderRadius:"5px",cursor:"pointer"};
    return (
        <div style={{margin:"40px"}} >
            <h2>WELCOME TO NOTE APP, CREATE YOUR NOTES </h2>
            <button style={btn_style} onClick={()=>navigate("/login")} >LOGIN</button>
            <button style={{...btn_style,backgroundColor:"teal"}} onClick={()=>navigate("/ragister")} >RAGISTER</button>
        </div>
    );
}

export default Home;
