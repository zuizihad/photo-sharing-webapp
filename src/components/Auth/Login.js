import React, { useContext, useState } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }
    const onSubmit = async data => {
        try {
            const userData = {
                email: data.email,
                password: data.password
            }
            // setUser(...user, userData)
            let newUserInfo = { ...user };
            newUserInfo = {
                email: data.email,
                password: data.password
            }
            setUser(newUserInfo);

            await axios.post(`http://localhost:5000/user/login`, { ...user })
            console.log(user)
            setLoggedInUser(user)
            history.replace(from)
        } catch (err) {
            alert(err.response?.data?.msg)
        }
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card ">
                <div className="card-body">
                    <h2 className="text-center text-secondary my-3">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">E</span>
                            <input type="text" {...register("email", { required: true })} class="form-control" placeholder="Email" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">P</span>
                            <input type="password" {...register("password", { required: true })} class="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div className="text-center"><button type="submit" class="btn btn-secondary ">login</button></div>
                        <div><p>create a new account?<Link to="/register">register</Link></p></div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;