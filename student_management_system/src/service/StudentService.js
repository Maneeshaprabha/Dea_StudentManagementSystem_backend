import axios from "axios";

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/student';

class StudentService {
    getAllStudent() {
        return axios.get(STUDENT_BASE_REST_API_URL);
    }
    createStudent(student) {
        return axios.post(STUDENT_BASE_REST_API_URL, student); // Assuming you meant to use post here, not get
    }
    getStudentById(studentId) {
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }

    updateStudent(studentId, student){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' +studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' +studentId);
    }

}

const studentServiceInstance = new StudentService(); // Assign instance to a variable

export default studentServiceInstance; // Export the variable as the default module
