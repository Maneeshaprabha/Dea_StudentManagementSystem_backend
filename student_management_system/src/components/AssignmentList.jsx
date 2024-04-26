import React, { useEffect, useState } from 'react';
import AssignmentService from '../service/AssignmentService';
import { Link } from 'react-router-dom';

const AssignmentList = () => {
    const [assignments, setAssignments] = useState([]);

    // Fetch the assignments when the component mounts
    useEffect(() => {
        fetchAssignments();
    }, []);

    // Function to fetch the list of assignments
    const fetchAssignments = async () => {
        try {
            const response = await AssignmentService.getAllAssignments();
            setAssignments(response.data);
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Assignments List</h2>
            {/* Link to add a new assignment */}
            <Link to="/add-assignment" className="btn btn-primary mb-2">Add Assignment</Link>
            {/* Table displaying the list of assignments */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Student Name</th>
                        <th>Description</th>
                        <th>File Path</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment) => (
                        <tr key={assignment.id}>
                            <td>{assignment.id}</td>
                            <td>{assignment.subject}</td>
                            <td>{assignment.studentName}</td>
                            <td>{assignment.description}</td>
                            <td>{assignment.filePath}</td>
                            <td>
                                {/* Links to edit and delete the assignment */}
                                <Link to={`/edit-assignment/${assignment.id}`} className="btn btn-info">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(assignment.id)} style={{ marginLeft: '10px' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    // Function to handle deleting an assignment
    const handleDelete = async (id) => {
        try {
            await AssignmentService.deleteAssignment(id);
            // Refresh the list of assignments after deletion
            fetchAssignments();
        } catch (error) {
            console.error('Error deleting assignment:', error);
        }
    };
};

export default AssignmentList;
