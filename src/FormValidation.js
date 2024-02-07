import React from "react";
import './Form.css';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const FormValidation =()=>{
    const [inputs, setInputs] = useState("");
    const [status,setStatus] = useState(false);
    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const HandleSubmit = (e) =>{
        e.preventDefault();
        //below data to navigate to next page and store userdetails
        const data=new FormData(e.target)
        setStatus(true)
    };

    return(
        <div className='register'>
            <h1>New User Account</h1>
            {status ? 
            <div className='popup'>
                <div className='popup-inner'>
                    <h2>Your Form Submitted Successfully</h2>
                    <button onClick={()=>{setStatus(false);document.getElementById("newAccount").reset();}}>OK</button>
                </div>
            </div>
    :null}
            <form onSubmit={HandleSubmit} action="./BMI.js" id='newAccount'>
                <label>User Name</label>
                <input placeholder="username" name="userName" pattern="^[A-Za-z]{3,25}$" value={inputs.userName} onBlur={handleChange} required/>
                <label>Last Name</label>
                <input placeholder="lastName" name="LastName" pattern='^[A-Za-z]{3,25}$' value={inputs.LastName} onBlur={handleChange} required/>
                <label>Email</label>
                <input placeholder="email" name="email" type="email" value={inputs.email} onBlur={handleChange} required/>
                <label>Date of Birth</label>
                <input type='date' name='dob' placeholder="Date of Birth" value={inputs.dob} onBlur={handleChange} required/>
                <label>Password</label>
                <input type="password" name='password' placeholder="password" value={inputs.password} onBlur={handleChange} required/>
                <label>Confirm Password</label>
                <input type="password" name='confirm' placeholder="confirm password"  value={inputs.confirm} onBlur={handleChange} pattern={inputs.password} required/>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default FormValidation;