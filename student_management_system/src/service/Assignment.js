import axios from 'axios';

// Define the base URL for the API
const baseURL = '/api/assignment';

// Define the AssignmentService object
const AssignmentService = {
    // Function to add an assignment
    addAssignment: async (formData) => {
        try {
            // Make a POST request to the API endpoint to upload the assignment
            const response = await axios.post(`${baseURL}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            // Return the response data
            return response.data;
        } catch (error) {
            // Log error and throw it for further handling
            console.error('Error adding assignment:', error);
            throw error;
        }
    },

    // Function to get an assignment by ID
    getAssignmentById: async (id) => {
        try {
            // Make a GET request to fetch an assignment by ID
            const response = await axios.get(`${baseURL}/${id}`);
            
            // Return the response data
            return response.data;
        } catch (error) {
            // Log error and throw it for further handling
            console.error('Error fetching assignment:', error);
            throw error;
        }
    },

    // Function to update an assignment by ID
    updateAssignment: async (id, data) => {
        try {
            // Make a PUT request to update an assignment by ID
            const response = await axios.put(`${baseURL}/${id}`, data);
            
            // Return the response data
            return response.data;
        } catch (error) {
            // Log error and throw it for further handling
            console.error('Error updating assignment:', error);
            throw error;
        }
    },

    // Function to delete an assignment by ID
    deleteAssignment: async (id) => {
        try {
            // Make a DELETE request to remove an assignment by ID
            const response = await axios.delete(`${baseURL}/${id}`);
            
            // Return the response data
            return response.data;
        } catch (error) {
            // Log error and throw it for further handling
            console.error('Error deleting assignment:', error);
            throw error;
        }
    }
};

// Export the AssignmentService object as a default export
export default AssignmentService;
