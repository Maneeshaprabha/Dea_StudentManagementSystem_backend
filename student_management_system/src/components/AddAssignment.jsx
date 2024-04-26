import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const AddAssignment = () => {
    const [formData, setFormData] = useState({
        subject: '',
        studentName: '',
        description: '',
        file: null,
    });
    const navigate = useNavigate();

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
        formPayload.append('file', formData.file);

        try {
            await axios.post('http://localhost:8080/api/assignment/upload', formPayload);
            navigate('/assignments');
        } catch (error) {
            console.error('Error adding assignment:', error);
        }
    };

    return (
        <div className="container">
            <h2>Add Assignment</h2>
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
                    <label>Upload File:</label>
                    <input
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Submit
                </button>

                <Link to="/assignments" className="btn btn-danger"> Cancel </Link>
            </form>
        </div>
    );
};

export default AddAssignment;
