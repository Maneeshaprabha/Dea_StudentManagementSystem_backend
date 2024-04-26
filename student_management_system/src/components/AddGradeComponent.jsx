import React, { useState, useEffect } from 'react';
import GradeService from '../service/GradeService';
import {Link ,useNavigate,useParams } from 'react-router-dom';


export const AddGradeComponent = () => {
    const [grades, setGrades] = useState('');
    const [marks, setMarks] = useState('');
    const [subjectCode, setSubjectCode] = useState('');
    const [subject, setSubject] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    
    useEffect(()=>{
        GradeService.getGradeById(id).then((response)=>{
            setGrades(response.data.grades)
            setMarks(response.data.marks)
            setSubjectCode(response.data.subjectCode)
            setSubject(response.data.subject)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    
    const saveOrUpdateGrade = (e) => {
        e.preventDefault();
    
        const grade = { grades, marks, subjectCode,subject };

        if(id){
            GradeService.updateGrade(id, grade).then((response) => {
                navigate('/grade',{replace:true})
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
        }else
        {
    
            GradeService.createGrade(grade)
            .then((response) => {
                navigate('/grade',{replace:true})
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }


    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Grades</h2>
        }else{
            return <h2 className = "text-center">Add Grades</h2>
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
                                    <label className="form-label"> Grade :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Grade"
                                        name="grade"
                                        className="form-control"
                                        value={grades}
                                        onChange={(e) => setGrades(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <   label className="form-label"> marks :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter marks"
                                        name="marks"
                                        className="form-control"
                                        value={marks}
                                        onChange={(e) => setMarks(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Subject Code :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Subject Code "
                                        name="subjectCode"
                                        className="form-control"
                                        value={subjectCode}
                                        onChange={(e) => setSubjectCode(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> subject :</label>
                                    <input
                                        type="address"
                                        placeholder="Enter subject"
                                        name="subject"
                                        className="form-control"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateGrade(e)} >Submit </button>
                               <Link to="/grade" className="btn btn-danger"> Cancel </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
