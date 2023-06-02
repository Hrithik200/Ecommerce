import React, { useState } from 'react'

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState([]);
    const loaclEmail = localStorage.getItem("email");
    const loaclPassword = localStorage.getItem("password");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loaclEmail);
        if (data.email == loaclEmail && data.password == loaclPassword) {
            console.log("Success");
        }

    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    return (
        <div className='container py-5'>
            <h1 className='text-center mx-10'>Login</h1>
            <form >
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" value={data.email} onChange={handleChange} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' onChange={handleChange} className="form-control" value={data.password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
