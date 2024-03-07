import { useEffect } from 'react';
import data from '../data/users.json';
import { useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
const { userId } = useParams();
let navigate = useNavigate();
    const { validUserIds } = data;
    useEffect(() => {
        if (!validUserIds.includes(userId)) {
            navigate('/not-found');
        }
    }, [userId])
    
    return(
        <div>
            User Id Found
        </div>
    )
}
export default UserProfile;