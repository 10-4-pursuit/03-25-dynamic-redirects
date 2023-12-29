// Importing necessary libraries and components
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import UserProfile from './components/UserProfile'; // Import the UserProfile component
import validUserIds from "./data/users.json"; // Import users data

// Defining the main App component
function App() {
  // Rendering the App component
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          {/* Map through validUserIds to create navigation links */}
          {validUserIds.validUserIds.map(userId => (
          <Link to={`/profile/${userId}`}>
            Hey, User: {userId}
          </Link>)
          )}
        </nav>
        <Routes>
          {/* Route for user profiles */}
        <Route path='/profile/:userId' element={<UserProfile/>}/>
        {/* Route for default profile */}
        <Route path='/profile/default' element={<div>Default Profile Page</div>}/>
      </Routes>
      </header>
    </div>
    </Router>
  );
}

// Exporting App
export default App;
