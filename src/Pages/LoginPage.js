import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage=()=>{

    const navigate=useNavigate();

    const login=()=>{
       navigate('/weather');
    }

    return(
        <>
        <div className="back">
        <div className="loginbox">
                
                <table>
                   <tr>
                     <td>UserName </td>
                     <td><input type="text"></input></td>
                   </tr>
                   <tr>
                     <td>Password </td>
                     <td><input type="password"></input></td>
                   </tr>
                </table>

                <button type="button" class="btn btn-primary" onClick={login}>Login</button>
             </div>
        </div>
            
        
        </>
    )
}

export default LoginPage;