import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import data from './data/users.json';
import UserProfile from './UserProfile';
import NotFound from './Notfound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <ul>
          {data.validUserIds.map( userId =>
             <li key={userId}>
              <Link className='App-link' to={`/profile/${userId}`}>{userId}</Link>
              </li>) }
        </ul>
      

        <Routes>
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
