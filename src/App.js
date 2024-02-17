import UserProfile from './UserProfile';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import data from './data/users.json';
import './App.css';

function App() {
  return (
    <Router>
      <ul>
        {data.validUserIds.map((userId) => (
          <li key={userId}>
            <Link to={`/users/${userId}`}>{userId}</Link>
          </li>
        ))}
      
      </ul>

      <Routes>
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>

    
    <div className="App">
     
    </div>
    </Router>
  );
}

export default App;
