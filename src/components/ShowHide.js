import React, { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

export default function ShowHide() {
    const [password, setPassword]= useState(false);
    const ShowHide=()=>{
        setPassword(password ? false : true);
    }
    return (
        <div>
            <div>
                <h2>LOGIN FORM</h2>
            </div>
            
            
            <div>
                <label>User Name:</label>
                <input ></input>
            </div>
            <div>
                <label>Password:</label>
                <input type={ password ? "text" : "password"}></input>
                <i onClick={ShowHide}>{password ? <AiFillEye/>:<AiFillEyeInvisible/>}</i>
            </div>
        </div>
    )
}
