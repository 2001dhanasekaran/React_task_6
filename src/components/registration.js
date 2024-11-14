import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './style.css';
export default function Registration(){
    const[input,setinput]=useState({
        user:"",
        email:"",
        password:""
    });
    const navigate=useNavigate();
    const submitform=(event)=>{
        event.preventDefault();
        const existingData=JSON.parse(localStorage.getItem('Inputs')) || [];
        const dupsignin=existingData.some(item=>item.email===input.email);
        if(dupsignin){
            alert("Email id already registered");
        }
        else{
            const updatedData = [...existingData, input];
            localStorage.setItem('Inputs',JSON.stringify(updatedData));
            alert("Registration successful!");
            navigate('/Signin');
        }

    }
    const newValues=(e)=>{
        const{name,value}=e.target;
        setinput(previousState=>({
                ...previousState,
                [name]:value
            }));
    };
    return(
        <div className="container signup">
            <div className="notes">
                <h3>Welcome to our new Registration form. Please fill the details to Signup!.</h3>
            </div>
            <form onSubmit={submitform}>
                <h1>Register now!</h1>
                <input type="text" placeholder="User" value={input.user} onChange={newValues} name="user"/>
                <input type="email" placeholder="Email" value={input.email} onChange={newValues} name="email"/>
                <input type="password" placeholder="Password" value={input.password} onChange={newValues} name="password"/>
                <button type="submit"><strong>SIGN UP</strong></button>
                <div className="redirect"><Link to="/signin">Already registered</Link></div>
            </form>
        </div>
    );
}