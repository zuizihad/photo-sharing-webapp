import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card ">
                <div className="card-body">
                    <h2 className="text-center text-secondary my-3">Login</h2>
                    <form action="">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">E</span>
                            <input type="text" class="form-control" placeholder="Email" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">P</span>
                            <input type="text" class="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                        <div className="text-center"><button type="button" class="btn btn-secondary ">login</button></div>
                        <div><p>create a new account?<Link to="/register">register</Link></p></div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;