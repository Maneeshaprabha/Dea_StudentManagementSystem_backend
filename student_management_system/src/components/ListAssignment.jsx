import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListAssignment = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/assignment');
            setAssignments(response.data);
        } catch (error) {
            console.error('Failed to fetch assignments:', error);
        }
    };

    const handleDeleteAssignment = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/assignment/${id}`);
            fetchAssignments(); // Refresh the list after deletion
        } catch (error) {
            console.error('Failed to delete assignment:', error);
        }
    };

    return (
        <div className="container">
            <h2>List Assignments</h2>
            <Link to="/add-assignments" className="btn btn-primary mb-2">
                Add Assignment
            </Link>
            <table className="table table-bordered">
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
                                    to={`/edit-assignments/${assignment.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger ml-2"
                                    onClick={() => handleDeleteAssignment(assignment.id)}
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

export default ListAssignment;
