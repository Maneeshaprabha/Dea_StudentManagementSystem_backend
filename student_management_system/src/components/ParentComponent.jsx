// ParentComponent.jsx
import React, { useState } from 'react';
import Login from './Login';
import HeaderComponent from './HeaderComponent';

function ParentComponent() {
    const [loggedInUser, setLoggedInUser] = useState("");

    function handleLogin(user) {
        setLoggedInUser(user);
    }

    return (
        <div>
            {loggedInUser ? (
                <HeaderComponent loggedInUser={loggedInUser} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default ParentComponent;
