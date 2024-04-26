import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderComponent = ({ loggedInUser }) => {
  // Get the current location
  const location = useLocation();

  // Define paths where HeaderComponent should be hidden
  const hiddenPaths = ['/', '/login', '/register'];

  // Check if the current path is in hiddenPaths
  const isHidden = hiddenPaths.includes(location.pathname);

  // If isHidden is true, return null to hide the HeaderComponent
  if (isHidden) {
    return null;
  }

  // Otherwise, render the HeaderComponent
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link to="/" className="navbar-brand">
              Student Management Application
            </Link>

            <Link to="/student" className="navbar-brand">
              Student
            </Link>

            <Link to="/teacher" className="navbar-brand">
              Teacher
            </Link>
            <Link to="/grade" className="navbar-brand">
              Grade
            </Link>

            <Link to="/assignments" className="navbar-brand">
              Assignment
            </Link>
          </div>
          <div className="navbar-collapse collapse justify-content-end">
            {loggedInUser && (
              <span className="navbar-text">
                Welcome, {loggedInUser}!
              </span>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
