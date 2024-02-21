import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import usersData from '../data/users.json';
// import './UserProfile.css';

export default function UserProfile({ users }) {
    const { userId } = useParams();
    const user = usersData.validUserIds.includes(userId) ? users[userId] : null;
    const navigate = useNavigate();
    if (!user) {
        return (
            <div>
                <h1>User not found</h1>
                <Link to="/" onClick={() => navigate('/')}>Back to home</Link>
            </div>
        );
    }
    return (
        <div className="UserProfile">
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <Link to="/" onClick={() => navigate('/')}>Back to home</Link>
        </div>)
};