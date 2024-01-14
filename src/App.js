import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import users from './data/users.json';

function App() {
  // Home component rendering a list of user profiles
  function Home() {
    return (
      <div>
        <h2>Home Page</h2>
        <ul>
          {users.validUserIds.map(userId => (
            <li key={userId}>
              <Link to={`/profile/${userId}`}>Go to {userId}'s Profile</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* Define routes for Home and UserProfile components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/profile/:userId' element={<UserProfile />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
