import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from '../Store/Action'

export const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const loginuser = () => {
        let user = {
            email,
            password
        }
        dispatch(login(user, history))
            .then((uid) => {
                history.push(`/user/${uid}`)
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <div className="container bg-light p-3 mt-5" style={{ margin: "auto" }}>
            
            <center>
                <h1>Login Form</h1>
            </center>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
            </form>
                <button onClick={loginuser} type="submit" className="btn btn-primary">Login</button>
                <div id="emailHelp" className="form-text">
                    <Link to="/signup">create a new account</Link>
                </div>
            
        </div>
    )
}
