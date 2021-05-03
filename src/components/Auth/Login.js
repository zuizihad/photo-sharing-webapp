import React, { useContext, useState } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userContext } from '../../App';

const Login = () => {
    const [user, setUser] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }

    const onSubmit = async data => {
        let newUserInfo = { ...user };
        newUserInfo = {
            email: data.email,
            password: data.password
        }
        const url = `https://shrouded-plains-92067.herokuapp.com/user/login`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUserInfo)
        })
            .then(result => result.json())
            .then(data => {
                if (data.user) {
                    alert(data.msg)
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    history.replace(from)
                } else {
                    alert(data.msg)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card ">
                <div className="card-body">
                    <h2 className="text-center text-secondary my-3">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">E</span>
                            <input type="text" {...register("email", { required: true })} className="form-control" placeholder="Email" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">P</span>
                            <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div className="text-center"><button type="submit" className="btn btn-secondary ">login</button></div>
                        <div><p>create a new account?<Link to="/register">register</Link></p></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;