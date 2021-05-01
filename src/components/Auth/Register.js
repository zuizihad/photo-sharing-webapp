import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }
    const onSubmit = async (data, e) => {
        e.preventDefault()
        // try {
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        setUser(userData)
        const url = `http://localhost:5000/user/register`
        // await axios.post(url, { ...user })

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                alert('registration successfully')
                console.log(response)
            })
        setLoggedInUser(user)
        history.replace(from)
        // } catch (err) {
        //     alert(err.response.data.msg)
        // }

    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card ">
                <div className="card-body ">
                    <h2 className="text-center text-secondary my-3">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">N</span>
                            <input type="text" {...register("name", { required: true })} class="form-control" placeholder="Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">E</span>
                            <input {...register("email", { required: true })} type="text" class="form-control" placeholder="Email" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">P</span>
                            <input {...register("password", { required: true })} type="password" class="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div className="text-center"><button type="submit" class="btn btn-secondary ">sign up</button></div>
                        <div><p>already have an account?<Link to="/login">login</Link></p></div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;