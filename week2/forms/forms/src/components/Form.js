import React,{useState} from 'react';
import {form} from 'react-bootstrap'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fNameError, setFNameError] = useState("")
    const [lastName, setLastName] = useState("");
    const [lNameError, setlNameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password,setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confPass, setConfPass] = useState("");
    const [confPassError, setConfPassError] = useState("");
    const createDude = (e) => {e.preventDefault(); const newDude = {firstName:firstName, lastName:lastName, email:email, password:password, confPass:confPass};};

    const handleFName = (e)=> {
        setFirstName(e.target.value)
        if(e.target.value.length < 1){
            setFNameError("First Name Is A Required Field")
        }
        else if (e.target.value.length < 2){
            setFNameError("First Name Must Be At Least 2 Characters")
        }
        else {
            setFNameError("")
        }
    }

    const handleLName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 1){
            setlNameError("Last Name Is A Required Field")
        }
        else if (e.target.value.length < 2){
            setlNameError("Last Name Must Be At Least 2 Characters")
        }
        else {
            setlNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1){
            setEmailError("Email Is A Required Field")
        }
        else if (e.target.value.length < 2){
            setEmailError("Email Must Be At Least 2 Characters")
        }
        else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1){
            setPasswordError("Password is A Required Field")
        }
        else if (e.target.value.length < 8){
            setPasswordError("Password Must Be At Least 8 Characters")
        }
        else {
            setPasswordError("")
        }
    }

    const handleConfPass = (e) => {
        setConfPass(e.target.value)
        if(confPass != password){
            setConfPassError("Passwords Must Match")
        }
        if (e.target.value.length < 8){
            setConfPassError("Password Must Be At Least 8 Characters")
        }
        else {
            setConfPassError("")
        }
    }

    return (
    <div>
        <form onSubmit = {createDude} className = "form">
            <div>
                <label>First Name:</label>
                <input type = "text" onChange={handleFName}/>
                {fNameError ?
                    <p>{fNameError}</p> : ""
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type = "text" onChange={handleLName}/>
                { lNameError ?
                    <p>{lNameError}</p> : ""
                }
            </div>
            <div>
                <label>Email:</label>
                <input type = "text" onChange={handleEmail}/>
                {emailError ?
                    <p>{emailError}</p> : ""
                }
            </div>
            <div>
                <label>Password:</label>
                <input type = "password" onChange={handlePassword}/>
                {passwordError ?
                    <p>{passwordError}</p> : ""
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type = "password" onChange={handleConfPass}/>
                {confPassError ?
                    <p>{confPassError}</p> : ""
                }
            </div>
            <div>
                <input type = "SUBMIT" value = "Submit"/>
            </div>
        </form>
        <div>
            First Name: {firstName}
        </div>
        <div>
            Last Name:  {lastName}
        </div>
        <div>
            Email:  {email}
        </div>
        <div>
            Password:  {password}
        </div>
        <div>
            Confirm Password:  {confPass}
        </div>
    </div>
    
    )

}

export default Form;