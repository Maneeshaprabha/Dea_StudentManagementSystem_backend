import { useEffect, useState } from 'react';
import StudentService from '../service/StudentService';
import { Link } from 'react-router-dom'

const ListStudentComponent = () => {
  const [student, setStudent] = useState([])

  useEffect(() => {

    getAllStudent();
  }, [])

  const getAllStudent = () => {
    StudentService.getAllStudent().then((response) => {
      setStudent(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteStudent = (studentId) => {
    StudentService.deleteStudent(studentId).then((response) =>{
     getAllStudent();

    }).catch(error =>{
        console.log(error);
    })
  }


  return (
    <div className='container'>
      <h2 className='text-center'>List student</h2>
      <Link to="/add-student" className="btn btn-primary mb-2" > Add Student </Link>
      <table className="table table-bordered table-striped">
        <thead>

          <th>Student Id</th>
          <th>Student First Name</th>
          <th>Student Last Name</th>
          <th>Student Email Id</th>
          <th>Student Address</th>
          <th>Action</th>

        </thead>

        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.emailId}</td>
              <td>{student.address}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-Student/${student.id}`} >Update</Link>
                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}
                  style={{ marginLeft: "10px" }}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
