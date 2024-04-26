import React, { useEffect, useState } from 'react';
import GradeService from '../service/GradeService';
import { Link } from 'react-router-dom';


const ListGradeComponent = () => {
  const [grade, setGrade] = useState([])

  useEffect(() => {

    getAllGrade();
  }, [])

  const getAllGrade = () => {
    GradeService.getAllGrade().then((response) => {
      setGrade(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteGrade = (gradeId) => {
    GradeService.deleteGrade(gradeId).then((response) =>{
     getAllGrade();

    }).catch(error =>{
        console.log(error);
    })
  }


  return (
    <div className='container'>
      <h2 className='text-center'>List Grades</h2>
      <Link to="/add-grade" className="btn btn-primary mb-2" > Add grade </Link>
      <table className="table table-striped table-hover">
        <thead>

          <th>Student Id</th>
          <th>Student Grades</th>
          <th>Student Marks</th>
          <th>subject Code</th>
          <th>SUbject Name</th>
          <th>Action</th>

        </thead>

        <tbody>
          {grade.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.id}</td>
              <td>{grade.grades}</td>
              <td>{grade.marks}</td>
              <td>{grade.subjectCode}</td>
              <td>{grade.subject}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-grade/${grade.id}`} >Update</Link>
                <button className="btn btn-danger" onClick={() => deleteGrade(grade.id)}
                  style={{ marginLeft: "10px" }}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ListGradeComponent;
