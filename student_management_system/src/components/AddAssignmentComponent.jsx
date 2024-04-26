import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AddAssignment = () => {
    const [subject, setSubject] = useState('');
    const [studentName, setStudentName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('subject', subject);
        formData.append('studentName', studentName);
        formData.append('description', description);
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8080/api/assignment', formData);
            navigate('/assignment');
        } catch (error) {
            setError('Error adding assignment. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Assignment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Student Name:</label>
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload File:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAssignment;
