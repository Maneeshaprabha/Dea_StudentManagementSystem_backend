import React, { useState } from 'react';
import axios from "axios";

function Register() {

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function register(event) {
        event.preventDefault(); // Fixed typo: preventDefault() instead of preventDefult()

        try {
            await axios.post("http://localhost:8080/api/v1/register", {
                login: login,
                email: email,
                password: password,
            });
            alert("Student Registered Successfully");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div className="container1 mt-4">
                <div className="login-box">
                    <h1> Registration</h1>
                    <form>
                        <div className="user-box">
                            {/* <label>Student Name</label> */}
                            <input type='text' className='form-control' id="login" placeholder='Enter Name'
                                value={login}
                                onChange={(event) => {
                                    setLogin(event.target.value);
                                }}
                            />
                        </div>

                        <div className="user-box">
                            {/* <label>Student Email</label> */}
                            <input type='email' className='form-control' id="email" placeholder='Enter email'
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>

                        <div className="user-box">
                            {/* <label>Student Password</label> */}
                            <input type='password' className='form-control' id="password" placeholder='Enter password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <button type='submit' className='btn btn-primary mt-4' onClick={register}>Save</button>
                        <p class="message">Not registered? <a href="/login">Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
