import { useEffect, useState } from 'react';
import TeacherService from '../service/TeacherService';
import { Link } from 'react-router-dom'

const ListTeacherComponent = () => {
  const [teacher, setTeacher] = useState([])

  useEffect(() => {

    getAllTeacher();
  }, [])

  const getAllTeacher = () => {
    TeacherService.getAllTeacher().then((response) => {
      setTeacher(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteTeacher = (teacherId) => {
    TeacherService.deleteTeacher(teacherId).then((response) =>{
     getAllTeacher();

    }).catch(error =>{
        console.log(error);
    })
  }


  return (
    <div className='container'>
      <h2 className='text-center'>List Teacher</h2>
      <Link to="/add-teacher" className="btn btn-primary mb-2" > Add teacher </Link>
      <table className="table table-bordered table-striped">
        <thead>

          <th>Teacher Id</th>
          <th>Teacher First Name</th>
          <th>Teacher Last Name</th>
          <th>Teacher Email Id</th>
          <th>Subject</th>
          <th>Action</th>

        </thead>

        <tbody>
          {teacher.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.emailId}</td>
              <td>{teacher.subject}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-teacher/${teacher.id}`} >Update</Link>
                <button className="btn btn-danger" onClick={() => deleteTeacher(teacher.id)}
                  style={{ marginLeft: "10px" }}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeacherComponent;
