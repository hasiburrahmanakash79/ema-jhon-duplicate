import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log in</h2>
           <form action="">
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <input className='BTN-submit' type="submit" value="Log in" />
            <p className='toggle'>New to Ema-john? <Link to='/signUp' className='link'>Create New Account</Link> </p>
            
           </form>
        </div>
    );
};

export default Login;