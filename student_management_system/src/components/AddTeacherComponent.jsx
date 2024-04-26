import React, { useState, useEffect } from 'react';
import TeacherService from '../service/TeacherService';
import {Link ,useNavigate,useParams } from 'react-router-dom';


export const AddTeacherComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [subject, setSubject] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    
    useEffect(()=>{
        TeacherService.getTeacherById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setSubject(response.data.subject)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    
    const saveOrUpdateTeacher = (e) => {
        e.preventDefault();
    
        const teacher = { firstName, lastName, emailId,subject };

        if(id){
            TeacherService.updateTeacher(id, teacher).then((response) => {
                navigate('/teacher',{replace:true})
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        }else
        {
    
        TeacherService.createTeacher(teacher)
            .then((response) => {
                navigate('/teacher',{replace:true})
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }


    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Teacher</h2>
        }else{
            return <h2 className = "text-center">Add Teacher</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
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
                                    <label className="form-label"> Subject :</label>
                                    <input
                                        type="subject"
                                        placeholder="Enter subject"
                                        name="subject"
                                        className="form-control"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateTeacher(e)} >Submit </button>
                               <Link to="/teacher" className="btn btn-danger"> Cancel </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
