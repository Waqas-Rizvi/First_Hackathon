import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {signup} from '../Store/Action'

export const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()

    const signupuser = () => {
        let user = {
            name,
            email,
            password
        }
        dispatch(signup(user))
    }

    return (
        <div className="container bg-light p-3 mt-5" style={{ margin: "auto" }}>
            <center>
                <h1>SignUp Form</h1>
            </center>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                    <input onChange={(e) => setname(e.target.value)} value={name} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
            </form>
                <button onClick={signupuser} type="submit" className="btn btn-primary">Signup</button>
                <div>
                    <Link to="/">Login</Link>
                </div>
        </div>
    )
}
