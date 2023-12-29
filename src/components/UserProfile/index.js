// Importing necessary libraries and components
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import validUserIds from "../../data/users.json"; // Import users data

// Defining the UserProfile Component
function UserProfile() {
    // Retrieving userId from URL and navigate function
    const { userId } = useParams();
    const navigate = useNavigate();
    // Effect to handle invalid userIds
    React.useEffect(() =>{
        // IF userId is not valid
        if (!validUserIds.validUserIds.includes(userId)) {
            navigate('/profile/default')
        }
    }, []);

    // Rendering user profile
    return <div>User Profile for {userId}</div>
}

// Exporting UserProfile
export default UserProfile;