import React, { useEffect } from "react";
import "./UserProfile.css"

import {  useParams, useNavigate } from "react-router-dom";
import data from "./data/users.json";

const UserProfile = () => {
  const { userId } = useParams();
  const nav = useNavigate();

  const isValidUserId = data.validUserIds.includes(userId); 
  useEffect(() => {
    if (!isValidUserId) {
      nav("/404", { replace: true }); 
    }
  }, [userId, isValidUserId, nav]);

  if (!isValidUserId) {
    return <div></div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>UserID: {userId}</p>
    </div>
  );
};

export default UserProfile;
