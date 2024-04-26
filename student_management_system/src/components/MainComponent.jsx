import React from 'react';
import './css/MainComponent.css'; // Adjust the relative path if needed

const MainComponent = () => {
  return (
    <div className="main-container">
      <h1 className="error-message">Please provide the correct data.</h1>
      
      <a href="/register" className="link">Navigate to registration</a>
      <a href="/login" className="link">Navigate to login</a>
    </div>
  );
};

export default MainComponent;
