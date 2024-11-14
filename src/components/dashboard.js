import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Dashboard() { 
    return ( 
            <div className="container dashboard"> 
                <h1>Welcome to your Dashboard!</h1> 
                <div style={{ marginLeft: '50px' }}><Link to="/signin">Sign out</Link></div>
            </div> 
        );
     }
