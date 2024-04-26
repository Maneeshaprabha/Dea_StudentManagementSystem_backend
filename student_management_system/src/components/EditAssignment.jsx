import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate,Link, useParams } from 'react-router-dom';

const EditAssignment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        subject: '',
        studentName: '',
        description: '',
        file: null,
    });

    const fetchAssignment = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/assignment/${id}`);
            setFormData({
                subject: response.data.subject,
                studentName: response.data.studentName,
                description: response.data.description,
                file: null,
            });
        } catch (error) {
            console.error('Failed to fetch assignment:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchAssignment();
    }, [fetchAssignment]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formPayload = new FormData();
        formPayload.append('subject', formData.subject);
        formPayload.append('studentName', formData.studentName);
        formPayload.append('description', formData.description);
        if (formData.file) {
            formPayload.append('file', formData.file);
        }

        try {
            await axios.put(`http://localhost:8080/api/assignment/${id}`, formPayload);
            navigate('/assignments');
        } catch (error) {
            console.error('Error updating assignment:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Assignment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Student Name:</label>
                    <input
                        type="text"
                        name="studentName"
                        className="form-control"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Upload File (optional):</label>
                    <input
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Update
                </button>

                <Link to="/assignments" className="btn btn-danger"> Cancel </Link>
            </form>
        </div>
    );
};

export default EditAssignment;
