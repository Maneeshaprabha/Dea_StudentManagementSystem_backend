import React, { useState } from 'react';
import axios from 'axios';

const AssignmentUpload = () => {
    const [subject, setSubject] = useState('');
    const [studentName, setStudentName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('subject', subject);
        formData.append('studentName', studentName);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:8080/api/assignment/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            // Reset form and update success state
            setSubject('');
            setStudentName('');
            setDescription('');
            setFile(null);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setError(error.response ? error.response.data : 'Error uploading assignment');
            setSuccess(false);
        }
    };

    return (
        <div>
            <h1>Upload Assignment</h1>
            {success && <p>Assignment uploaded successfully!</p>}
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Subject:</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div>
                    <label>Student Name:</label>
                    <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>File:</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default AssignmentUpload;
