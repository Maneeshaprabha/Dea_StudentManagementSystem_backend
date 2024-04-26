import React, { useState, useEffect } from 'react';
import StudentService from '../service/StudentService';
import {Link ,useNavigate,useParams } from 'react-router-dom';


export const AddStudentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    
    useEffect(()=>{
        StudentService.getStudentById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    
    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
    
        const student = { firstName, lastName, emailId,address };

        if(id){
            StudentService.updateStudent(id, student).then((response) => {
                navigate('/student',{replace:true})
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        }else
        {
    
        StudentService.createStudent(student)
            .then((response) => {
                navigate('/student',{replace:true})
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }


    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Student</h2>
        }else{
            return <h2 className = "text-center">Add Student</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="form-group">
                    {
                           title()
                       }
                        <div className="card-body">
                            <form >
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <   label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Address :</label>
                                    <input
                                        type="address"
                                        placeholder="Enter Address"
                                        name="address"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateStudent(e)} >Submit </button>
                               <Link to="/student" className="btn btn-danger"> Cancel </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
