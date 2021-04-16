import React, {useState} from 'react'


import { Jumbotron } from "react-bootstrap";
import { Login } from "../../components/login/Login.comp.js";
import { ResetPassword } from "../../components/password-reset/PasswordReset.js";
import "./entry.style.css"

export const Entry = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formLoad, setFormLoad] = useState("login")

    const handleOnChange = e =>{
        const {name, value} = e.target

        switch(name){
            case 'email':
            setEmail(value);
            break;

            case 'password':
                setPassword(value);
                break;

            default:
                break
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(!email || !password){
        return alert('Fill up the details')
    }
    console.log(email,password)
    }

    const handleOnResetSubmit = e => {
        e.preventDefault()

        if(!email ){
        return alert('Fill up the details')
    }
    console.log(email)
    } 
    const formSwitcher = frmType =>{
setFormLoad(frmType)
    }

    return (
        <div className ="entry-page bg-info">
            <Jumbotron className="form-box">
                {formLoad ==='login' &&(
                <Login handleOnChange={handleOnChange} 
                email={email}
                password={password}
                handleOnSubmit = {handleOnSubmit}
                formSwitcher={formSwitcher}
                />)}
                {formLoad ==='reset' &&(
                <ResetPassword  
                handleOnChange={handleOnChange}
                handleOnResetSubmit = {handleOnResetSubmit}
 
                email={email}
                formSwitcher={formSwitcher}
                />)}
            </Jumbotron>
        </div>
    )
}
