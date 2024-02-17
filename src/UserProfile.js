import {useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import data from './data/users.json';

function UserProfile() {
    const {userId} = useParams();
    const navigate = useNavigate();

    const isValidUserIds = data.validUserIds.includes(userId);
    useEffect(() => {
        if (!isValidUserIds) {
            navigate('/404');
        }
    }, [isValidUserIds, userId, navigate]);

    if (!isValidUserIds) {
        return <div>
        </div>;
    }
        return ( <div>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
        </div>
        )
    }
    export default UserProfile