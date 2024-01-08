import React, { useEffect } from 'react'
import userData  from './data/users.json'
import {useParams, useNavigate} from 'react-router-dom'

const UserProfile =() => {
    let {userId} = useParams()
    let navigate = useNavigate()
    const data = userData.validUserIds

    
    useEffect(() => {
      if (!data.includes(userId)) {
        navigate('/profile/default')
        // return `User Profile: ${userId} not found.`;
    }
    }, [])

  return (
    <div>
        <h1>User Profile</h1>
        <h2>User ID: {userId}</h2>
    </div>
  )
}

export default UserProfile