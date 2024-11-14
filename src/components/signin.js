import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
export default function Signin(){
    const [input, setInput]=useState({
        email:"",
        password:""
    });
    const navigate= useNavigate();
    const login=(event)=>{
        event.preventDefault();
        const userdata=JSON.parse(localStorage.getItem('Inputs')) || [];
        const user = userdata.find(user => user.email === input.email && user.password === input.password);

        if(user) {
            alert("Login sucessful!");
            navigate('/dashboard');
        }
        else{
            alert("Invalid credentials. Please try again.");
        }
    };
    const newValues=(e)=>{
        const {name, value}=e.target;
        setInput(previousState=>({
            ...previousState,
            [name]:value
        }));
    };


    return(
        <div className="container signin">
            <div className="notes">
                <div><h1>Welcome Back!</h1></div>
                <div><strong>To keep connected with us please login with your personal info.</strong></div>
            </div>
            <form onSubmit={login}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" value={input.email} onChange={newValues} name='email'/>
                <input type="password" placeholder="Password" value={input.password} onChange={newValues} name='password'/>                
                <button type='submit'><strong>SIGN IN</strong></button>
            </form>
        </div>
    );
}