import axios from "axios";

const GRADE_BASE_REST_API_URL = 'http://localhost:8080/api/grade';

class GradeService{
    getAllGrade() {
        return axios.get(GRADE_BASE_REST_API_URL);
    }
    createGrade(grade) {
        return axios.post(GRADE_BASE_REST_API_URL, grade); // Assuming you meant to use post here, not get
    }
    getGradeById(gradeId) {
        return axios.get(GRADE_BASE_REST_API_URL + '/' + gradeId);
    }

    updateGrade(gradeId, grade){
        return axios.put(GRADE_BASE_REST_API_URL + '/' +gradeId, grade);
    }

    deleteGrade(gradeId){
        return axios.delete(GRADE_BASE_REST_API_URL + '/' +gradeId);
    }

}

const GradeServiceInstance = new GradeService(); // Assign instance to a variable

export default GradeServiceInstance; // Export the variable as the default module
