import React, { useState } from 'react';
import './Login.css';
import loginLogo from './Amazon_logo_2.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <>
            <div className='login'>
                <Link to='/'>
                    <img className='login__logo' src={loginLogo} alt='Amazon-Logo' />
                </Link>
                <div className='login__details'>
                    <h1 className='login__title' >Sign in</h1>
                    <form>
                        <h5>E-mail</h5>

                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className='signInButton' onClick={signIn}>Sign in</button>
                    </form>
                    <small>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</small>
                    <button className='signUpButton' onClick={register}>Create your Amazon account</button>
                </div>
            </div>
        </>
    )
}

export default Login;