import React, { useEffect, useState } from 'react';
import AssignmentService from '../service/AssignmentService';
import { Link } from 'react-router-dom';

const ListAssignmentComponent = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        try {
            const response = await AssignmentService.getAllAssignment();
            setAssignments(response.data);
        } catch (error) {
            console.error('Failed to fetch assignments:', error);
        }
    };

    const handleDeleteAssignment = async (assignmentId) => {
        try {
            await AssignmentService.deleteAssignment(assignmentId);
            fetchAssignments(); // Refresh the list after deletion
        } catch (error) {
            console.error('Failed to delete assignment:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">List Assignments</h2>
            <Link to="/add-assignment" className="btn btn-primary mb-2">
                Add Assignment
            </Link>
            <table className="table table-bordered table-striped">
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
                            <td>
                                <a href={assignment.filePath} target="_blank" rel="noopener noreferrer">
                                    View File
                                </a>
                            </td>
                            <td>
                                <Link
                                    className="btn btn-info"
                                    to={`/edit-assignment/${assignment.id}`}
                                >
                                    Update
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteAssignment(assignment.id)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAssignmentComponent;
