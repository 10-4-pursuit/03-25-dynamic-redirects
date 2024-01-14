import React from 'react';
import users from './data/users.json';
import { Link, useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    // Check if userId is invalid or undefined
    if (!userId || !users.validUserIds.includes(userId)) {
        // Redirect to the default route if userId is invalid or undefined
        navigate('/profile/default');
        return null;
    }

    // Get the user object based on the userId
    const user = users[userId];

    return (
        <div>
            {/* Display the user's profile */}
            <h1>{ userId }'s Profile</h1>
            <footer>
                <Link to="/">Back</Link>
            </footer>
        </div>
    )
}

export default UserProfile;