import { useParams, useNavigate, BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useEffect } from 'react';
import validUserIdsData from '../src/data/users.json';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Valid ID List</Link>
        </nav>
        <Routes>
          <Route path='/' element={<UserList />} /> 
          <Route path='/profile/:userId' element={<UserProfile />} />
          <Route path='/profile/default' element={<DefaultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function UserProfile() {
  let { userId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    if (!validUserIdsData.validUserIds.includes(userId)) {
      navigate('/profile/default');
    }
  }, [userId, navigate]);
  return (
      <div>
        <h1>User Profile</h1>
        <p>User ID: {userId}</p>
      </div>
    )  
}

function DefaultPage() {
  return (
    <div>
      <h1>Default Page</h1>
      <p>Invalid user ID!</p>
    </div>
  );
}

function UserList() {
  return (
    <div>
      <h1>User Profiles</h1>
        {validUserIdsData.validUserIds.map((userId) => (
          <div key={userId}>
            <Link to={`/profile/${userId}`}>{userId}</Link>
          </div>
        ))}
    </div>
  );
}

export default App;
