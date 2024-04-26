import axios from "axios";

const ASSIGNMENT_BASE_REST_API_URL = 'http://localhost:8080/api/assignment';

class AssignmentService{
    getAllAssignment() {
        return axios.get(ASSIGNMENT_BASE_REST_API_URL);
    }
    createAssignment(assignment) {
        return axios.post(ASSIGNMENT_BASE_REST_API_URL, assignment); // Assuming you meant to use post here, not get
    }
    getAssignmentById(assignmentId) {
        return axios.get(ASSIGNMENT_BASE_REST_API_URL + '/' + assignmentId);
    }

    updateAssignment(assignmentId, assignment){
        return axios.put(ASSIGNMENT_BASE_REST_API_URL + '/' +assignmentId, assignment);
    }

    deleteAssignment(assignmentId){
        return axios.delete(ASSIGNMENT_BASE_REST_API_URL + '/' +assignmentId);
    }

}

const AssignmentServiceInstance = new AssignmentService(); // Assign instance to a variable

export default AssignmentServiceInstance; // Export the variable as the default module
