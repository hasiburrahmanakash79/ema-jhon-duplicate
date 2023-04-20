import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [error, setError] = useState('')

    const handleSignUp = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('')
        if(password !== confirm){
            setError('Password dose not match.')
            return
        }else if(password.length < 8){
            setError('Password must be 8 character')
        }

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
           <form onSubmit={handleSignUp} action="">
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" required/>
            </div>
            <p className='error'>{error}</p>
            <input className='BTN-submit' type="submit" value="Sign Up" />
            <p className='toggle'>Already have an account? <Link to='/logIn' className='link'> Log in</Link></p>
            
           </form>
        </div>
    );
};

export default SignUp;