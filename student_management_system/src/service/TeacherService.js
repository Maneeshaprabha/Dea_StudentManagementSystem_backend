import axios from "axios";

const TEACHER_BASE_REST_API_URL = 'http://localhost:8080/api/teacher';

class TeacherService {
    getAllTeacher() {
        return axios.get(TEACHER_BASE_REST_API_URL);
    }
    createTeacher(teacher) {
        return axios.post(TEACHER_BASE_REST_API_URL, teacher); // Assuming you meant to use post here, not get
    }
    getTeacherById(teacherId) {
        return axios.get(TEACHER_BASE_REST_API_URL + '/' + teacherId);
    }

    updateTeacher(teacherId, teacher){
        return axios.put(TEACHER_BASE_REST_API_URL + '/' +teacherId, teacher);
    }

    deleteTeacher(teacherId){
        return axios.delete(TEACHER_BASE_REST_API_URL + '/' +teacherId);
    }

}

const teacherServiceInstance = new TeacherService(); // Assign instance to a variable

export default teacherServiceInstance; // Export the variable as the default module
