import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function logins(event) {
        event.preventDefault();
    
        try {
            const res = await axios.post("http://localhost:8080/api/v1/logins", {
                login: login, // Adjusted to match backend expectation
                password: password,
            });
    
            console.log(res.data);
    
            if (res.data.id) {
                
                // If the response contains an 'id' field, consider it a successful login
                navigate('/student');
            } else {
                // Otherwise, handle other potential error messages
               if  (res.data.message === "Email not exists") {
                    alert("Email does not exist");
                } else {
                    alert("Incorrect email or password");
                }
            }
        } catch (error) {
            console.error(error);
            // Log the error response if available
            if (error.response) {
                console.error(error.response.data);
            }
        }
    }
    

    return (
        <div>
            <div className="container1 mt-4">
                <div className="login-box">
                    <h1> Login</h1>
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
                            {/* <label>Student Password</label> */}
                            <input type='password' className='form-control' id="password" placeholder='Enter password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        
                        <button type='submit' className='btn btn-primary mt-4' onClick={logins}>Login</button>
                        <p class="message">Not registered? <a href="/register">Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
