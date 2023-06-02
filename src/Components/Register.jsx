import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Products from './Products';

function Register() {

    const [inputs, setInputs] = useState([])
    const localSIgnUp = localStorage.getItem("signUp");
    const [showHome, setShowHome] = useState(false)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Hey you register yourself successfully ! ")
        console.log(inputs);


    }

    useEffect(() => {
        if (inputs) {
            localStorage.setItem('name', JSON.stringify(inputs.email));
            localStorage.setItem('password', JSON.stringify(inputs.password));
            localStorage.setItem('signUp', JSON.stringify(inputs.email));
        }

        if (localSIgnUp) {
            setShowHome(true)
        }
    }, [inputs]);

    return (

        <div className='container py-5'>
            <h1 className='text-center mx-10'>Register Here</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' value={inputs.email} onChange={handleChange} className="form-control" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' value={inputs.password} onChange={handleChange} className="form-control" />
                </div>
                <Link to="/login" >  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button></Link>
            </form>
        </div>

    )
}

export default Register
